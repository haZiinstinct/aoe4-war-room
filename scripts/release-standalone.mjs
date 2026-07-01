import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const builtFile = path.join(root, "dist", "index.html");
const outputFile = path.join(root, "outputs", "index.html");
const checkOnly = process.argv.includes("--check-only");

if (!fs.existsSync(builtFile)) {
  throw new Error("dist/index.html fehlt. Bitte zuerst `npm run build` ausführen.");
}

const html = fs.readFileSync(builtFile, "utf8");
const forbidden = [
  {
    pattern: /<script\b[^>]*\bsrc\s*=/i,
    message: "enthält ein externes JavaScript-Bundle",
  },
  {
    pattern: /<link\b[^>]*\brel=[\"']stylesheet[\"'][^>]*\bhref\s*=/i,
    message: "enthält eine externe CSS-Datei",
  },
  {
    pattern: /(?:src|href)=[\"']\/assets\//i,
    message: "enthält einen absoluten /assets/-Verweis",
  },
];

const violations = forbidden
  .filter(({ pattern }) => pattern.test(html))
  .map(({ message }) => message);

if (!/<style\b/i.test(html) || !/<script\b[^>]*type=[\"']module[\"']/i.test(html)) {
  violations.push("enthält nicht sowohl eingebettetes CSS als auch eingebettetes JavaScript");
}

if (!html.includes("WAR ROOM") || !html.includes("aoe4world")) {
  violations.push("enthält nicht die erwartete App und Einheitendaten");
}

if (violations.length) {
  throw new Error(`Standalone-Prüfung fehlgeschlagen: ${violations.join("; ")}.`);
}

if (!checkOnly) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.copyFileSync(builtFile, outputFile);
}

const sizeKb = Math.round(Buffer.byteLength(html) / 1024);
console.log(
  checkOnly
    ? `Standalone-Datei geprüft: ${sizeKb} KB, keine lokalen Abhängigkeiten.`
    : `Standalone-Datei erstellt: outputs/index.html (${sizeKb} KB).`,
);

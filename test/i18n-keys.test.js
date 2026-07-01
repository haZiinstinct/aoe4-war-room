import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { STRINGS } from "../src/i18n/strings.js";

const srcDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "src");

/** Alle .js/.jsx-Dateien unterhalb von src/ rekursiv einsammeln. */
function collectSourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectSourceFiles(full));
    } else if (/\.jsx?$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

// Statische t("…")/t('…')-Aufrufe finden. Dynamische Schlüssel mit Template-
// Interpolation (t(`nav.${id}`)) lassen sich nicht auflösen und werden bewusst
// übersprungen – sie sind durch die DE/EN-Paritätsprüfung mit abgedeckt.
const STATIC_KEY = /\bt\(\s*"([^"${}]+)"\s*[),]|\bt\(\s*'([^'${}]+)'\s*[),]/g;

function collectUsedKeys() {
  const keys = new Set();
  for (const file of collectSourceFiles(srcDir)) {
    const code = readFileSync(file, "utf8");
    for (const match of code.matchAll(STATIC_KEY)) {
      keys.add(match[1] ?? match[2]);
    }
  }
  return keys;
}

describe("i18n-Schlüssel", () => {
  it("DE und EN haben exakt dieselben Schlüssel", () => {
    const de = Object.keys(STRINGS.de).sort();
    const en = Object.keys(STRINGS.en).sort();
    const missingInEn = de.filter((key) => !(key in STRINGS.en));
    const missingInDe = en.filter((key) => !(key in STRINGS.de));
    expect(missingInEn, "in EN fehlend").toEqual([]);
    expect(missingInDe, "in DE fehlend").toEqual([]);
    expect(en).toEqual(de);
  });

  it("jeder statisch genutzte t()-Schlüssel existiert in beiden Sprachen", () => {
    const used = collectUsedKeys();
    // Sicherstellen, dass der Scan überhaupt greift (kein leeres Ergebnis).
    expect(used.size).toBeGreaterThan(20);
    const unresolved = [...used].filter(
      (key) => !(key in STRINGS.de) || !(key in STRINGS.en),
    );
    expect(unresolved, "ohne Übersetzung").toEqual([]);
  });

  it("keine leeren Übersetzungswerte", () => {
    for (const lang of ["de", "en"]) {
      for (const [key, value] of Object.entries(STRINGS[lang])) {
        if (typeof value === "string") {
          expect(value.trim(), `${lang}:${key} ist leer`).not.toBe("");
        }
      }
    }
  });
});

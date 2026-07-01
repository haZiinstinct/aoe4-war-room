// Rendert die statischen Sharing-Assets aus dem Brand-Look (kein externer Dienst):
//   docs/og-image.png        1200×630  – Social-Preview (OpenGraph/Twitter)
//   docs/apple-touch-icon.png 180×180  – Homescreen-Icon iOS/iPadOS
// Beide werden zusätzlich in den Docroot hochgeladen (absolute Crawler-URLs).
// Aufruf: node scripts/make-og.mjs
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "docs");

// Gemeinsame Farb-/Verlaufsdefinitionen (an docs/banner.svg angelehnt).
const defs = `
  <radialGradient id="glow" cx="50%" cy="0%" r="80%">
    <stop offset="0%" stop-color="#5c2b1d" stop-opacity="0.45" />
    <stop offset="55%" stop-color="#0b0e0d" stop-opacity="0" />
  </radialGradient>
  <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e9c680" />
    <stop offset="100%" stop-color="#c89d4f" />
  </linearGradient>
  <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#6d5229" stop-opacity="0" />
    <stop offset="50%" stop-color="#c89d4f" />
    <stop offset="100%" stop-color="#6d5229" stop-opacity="0" />
  </linearGradient>`;

// Das Wappen (Schild + innere Linien) als wiederverwendbares Fragment.
const crest = `
  <path d="M4 3h40v34L24 54 4 37Z" />
  <path d="M24 8v38M10 15l14 9 14-9M12 34l12-10 12 10" />`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>${defs}</defs>
  <rect width="1200" height="630" fill="#0b0e0d" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect x="20" y="20" width="1160" height="590" fill="none" stroke="#2a2114" stroke-width="2" />
  <rect x="30" y="30" width="1140" height="570" fill="none" stroke="#4c3b22" stroke-width="1" opacity="0.6" />
  <g transform="translate(525.6 92) scale(3.1)" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${crest}</g>
  <circle cx="600" cy="166.4" r="9" fill="url(#gold)" />
  <text x="600" y="430" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="128" font-weight="700" letter-spacing="8" fill="#f0e7d6">WAR ROOM</text>
  <text x="600" y="478" text-anchor="middle" font-family="'Segoe UI', system-ui, sans-serif" font-size="26" font-weight="600" letter-spacing="8" fill="#c89d4f">AGE OF EMPIRES IV · INTERACTIVE COUNTER LAB</text>
  <rect x="300" y="508" width="600" height="2" fill="url(#rule)" />
  <text x="600" y="556" text-anchor="middle" font-family="'Segoe UI', system-ui, sans-serif" font-size="22" font-weight="600" letter-spacing="1" fill="#a49d90">205 units · 42,025 matchups · 23 civilizations · DE / EN</text>
</svg>`;

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>${defs}</defs>
  <rect width="180" height="180" rx="32" fill="#0b0e0d" />
  <rect width="180" height="180" rx="32" fill="url(#glow)" />
  <g transform="translate(44.4 36) scale(1.9)" fill="none" stroke="url(#gold)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${crest}</g>
  <circle cx="90" cy="81.6" r="6" fill="url(#gold)" />
</svg>`;

await mkdir(outDir, { recursive: true });

async function render(svg, file) {
  const out = resolve(outDir, file);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
  console.log(`geschrieben: docs/${file}`);
}

await render(ogSvg, "og-image.png");
await render(iconSvg, "apple-touch-icon.png");

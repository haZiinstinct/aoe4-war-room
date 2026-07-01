import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workDir = path.join(root, "work", "aoe4world-data");
const sourcePath = path.join(workDir, "units", "all-unified.json");
const civPath = path.join(workDir, "civilizations", "civs-index.json");
const outputPath = path.join(root, "src", "data", "units.generated.js");

if (!fs.existsSync(sourcePath)) {
  throw new Error(
    `AoE4 World source data not found at ${sourcePath}. Clone https://github.com/aoe4world/data into work/aoe4world-data first.`,
  );
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const civSource = JSON.parse(fs.readFileSync(civPath, "utf8"));

// --- Schema-Validierung: früh und laut scheitern statt still Müll erzeugen. ---
if (!source || !Array.isArray(source.data)) {
  throw new Error(
    "Unerwartetes Upstream-Schema: `source.data` ist kein Array. " +
      "Hat aoe4world/data die Struktur von all-unified.json geändert?",
  );
}
if (!civSource || typeof civSource !== "object") {
  throw new Error(
    "Unerwartetes Upstream-Schema: civs-index.json ist kein Objekt.",
  );
}
const sampleUnit = source.data.find((unit) => unit && unit.id);
if (
  !sampleUnit ||
  !("classes" in sampleUnit) ||
  !("variations" in sampleUnit)
) {
  throw new Error(
    "Unerwartetes Upstream-Schema: Einheiten haben nicht die erwarteten " +
      "Felder `id`, `classes`, `variations`.",
  );
}

// Klassen-Tokens, die wir taktisch auswerten. Alles andere wird verworfen —
// unten warnen wir sichtbar, falls Upstream neue, häufige Tokens einführt.
const relevantClassTokens = new Set([
  "armored",
  "archer",
  "building",
  "camel",
  "cavalry",
  "cavalry_archer",
  "cavalry_armored",
  "cavalry_light",
  "elephant",
  "gunpowder",
  "handcannon",
  "heavy",
  "horse",
  "infantry",
  "infantry_light",
  "knight",
  "leader",
  "light_melee_infantry",
  "manatarms",
  "massive",
  "melee",
  "melee_infantry",
  "military",
  "military_cavalry",
  "monk",
  "naval_military",
  "naval_unit",
  "ranged",
  "ranged_infantry",
  "religious",
  "siege",
  "ship",
  "spearman",
  "support",
  "war_elephant",
]);

// --- Daten-getriebene Kampf-Flags -----------------------------------------
// Diese Heuristiken lebten früher als ID-Regexe zur Laufzeit in matchup.js und
// brachen bei Balance-Patches still. Jetzt an EINEM Ort, zur Build-Zeit, mit
// Drift-Warnung. Die Match-Semantik (Teilstring via Regex) bleibt identisch,
// damit sich die Matchup-Ergebnisse nicht verändern.

// Flächenschaden (Belagerung u. Ä.) — Teilstring-Match deckt Varianten wie
// "counterweight-mangonel" mit ab.
const SPLASH_TOKENS = [
  "mangonel",
  "ribauldequin",
  "nest-of-bees",
  "great-bombard",
  "huihui",
  "ozutsu",
  "cheirosiphon",
  "eruptor",
];
// Nahkampf-Spezialisten mit starkem Anti-Infanterie-Profil.
const ANTI_INFANTRY_MELEE_TOKENS = ["landsknecht", "varangian", "zhanma"];
// Zusammengesetzte Formations-Einheiten (keine echten Trainings-Einheiten) —
// exakter ID-Abgleich, wie die frühere FORMATION_IDS-Menge in matchup.js.
const FORMATION_IDS = new Set([
  "earls-retinue",
  "garrison-command",
  "gunpowder-contingent",
  "wynguard-army",
  "wynguard-footmen",
  "wynguard-raiders",
  "wynguard-rangers",
]);

const SPLASH_PATTERN = new RegExp(SPLASH_TOKENS.join("|"));
const ANTI_INFANTRY_PATTERN = new RegExp(ANTI_INFANTRY_MELEE_TOKENS.join("|"));

function computeFlags(id) {
  return {
    splash: SPLASH_PATTERN.test(id),
    antiInfantryMelee: ANTI_INFANTRY_PATTERN.test(id),
    formation: FORMATION_IDS.has(id),
  };
}

function pickVariation(unit) {
  return (
    unit.variations.find((variation) =>
      variation.weapons?.some((weapon) => weapon.type !== "fire"),
    ) ??
    unit.variations[0] ??
    {}
  );
}

function classify(unit, variation) {
  const classes = new Set([
    ...(unit.classes ?? []),
    ...(variation.classes ?? []),
  ]);
  if (classes.has("ship") || classes.has("naval_unit")) return "marine";
  if (classes.has("siege")) return "belagerung";
  if (
    classes.has("monk") ||
    classes.has("religious") ||
    /bannerman|dervish|healer-elephant|imam|mehter|monk|prelate|scholar|shaman|shinto-priest/.test(
      unit.id,
    ) ||
    (!variation.weapons?.some((weapon) => weapon.type !== "fire") &&
      !classes.has("hero"))
  ) {
    return "support";
  }
  if (classes.has("cavalry")) return "kavallerie";
  if (classes.has("ranged")) return "fernkampf";
  if (classes.has("infantry")) return "infanterie";
  return "sonstige";
}

function compactWeapon(weapon) {
  return {
    name: weapon.name,
    type: weapon.type,
    damage: Number(weapon.damage ?? 0),
    speed: Number(weapon.speed ?? 1),
    range: Number(weapon.range?.max ?? 0),
    modifiers: (weapon.modifiers ?? [])
      .filter((modifier) => modifier.effect === "change" && modifier.value)
      .map((modifier) => ({
        value: Number(modifier.value),
        property: modifier.property,
        groups: modifier.target?.class ?? [],
      })),
  };
}

// Verworfene Klassen-Tokens sammeln, um neue Upstream-Klassen sichtbar zu machen.
const droppedTokenCounts = new Map();

const units = source.data
  .filter((unit) => unit.classes?.includes("military"))
  .map((unit) => {
    const variation = pickVariation(unit);
    const rawClasses = [
      ...new Set([...(unit.classes ?? []), ...(variation.classes ?? [])]),
    ];
    for (const token of rawClasses) {
      if (!relevantClassTokens.has(token)) {
        droppedTokenCounts.set(token, (droppedTokenCounts.get(token) ?? 0) + 1);
      }
    }
    const classes = rawClasses.filter((token) =>
      relevantClassTokens.has(token),
    );
    const weapons = (variation.weapons ?? [])
      .filter((weapon) => weapon.type !== "fire")
      .map(compactWeapon);
    const armor = Object.fromEntries(
      (variation.armor ?? []).map((entry) => [
        entry.type,
        Number(entry.value ?? 0),
      ]),
    );
    const costs = variation.costs ?? {};

    return {
      id: unit.id,
      name: unit.name,
      unique: Boolean(unit.unique),
      civs: unit.civs ?? [],
      minAge: Number(unit.minAge ?? variation.age ?? 1),
      icon: unit.icon,
      description: unit.description ?? variation.description ?? "",
      displayClasses: unit.displayClasses ?? variation.displayClasses ?? [],
      classes,
      category: classify(unit, variation),
      hp: Number(variation.hitpoints ?? 0),
      armor: {
        melee: Number(armor.melee ?? 0),
        ranged: Number(armor.ranged ?? 0),
      },
      movement: Number(variation.movement?.speed ?? 0),
      costs: {
        food: Number(costs.food ?? 0),
        wood: Number(costs.wood ?? 0),
        gold: Number(costs.gold ?? 0),
        stone: Number(costs.stone ?? 0),
        oliveoil: Number(costs.oliveoil ?? 0),
        total: Number(costs.total ?? 0),
        popcap: Number(costs.popcap ?? 0),
        time: Number(costs.time ?? 0),
      },
      weapons,
      flags: computeFlags(unit.id),
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const civs = Object.values(civSource).map((civ) => ({
  code: civ.abbr,
  id: civ.id,
  name: civ.name,
  slug: civ.slug,
  expansion: civ.expansion?.[0] ?? "base",
}));

// --- Drift-Warnungen: gelistete IDs, die Upstream nicht (mehr) kennt. -------
const upstreamIds = source.data.map((unit) => unit.id).filter(Boolean);
function warnMissingTokens(label, tokens) {
  const missing = tokens.filter(
    (token) => !upstreamIds.some((id) => id.includes(token)),
  );
  if (missing.length) {
    console.warn(
      `⚠️  ${label}: keine passende Einheit mehr im Upstream für: ${missing.join(", ")}. ` +
        "Wurde etwas umbenannt/entfernt? Liste in generate-units.mjs prüfen.",
    );
  }
}
warnMissingTokens("Splash-Liste", SPLASH_TOKENS);
warnMissingTokens("Anti-Infanterie-Nahkampf-Liste", ANTI_INFANTRY_MELEE_TOKENS);
const missingFormations = [...FORMATION_IDS].filter(
  (id) => !upstreamIds.includes(id),
);
if (missingFormations.length) {
  console.warn(
    `⚠️  Formations-Liste: nicht mehr im Upstream: ${missingFormations.join(", ")}.`,
  );
}

// Neue, häufige Klassen-Tokens sichtbar machen (Schwelle: >= 3 Einheiten).
// Nur die häufigsten anzeigen — die Liste dient als Signal bei Balance-Patches,
// nicht als vollständiges Inventar der Upstream-Meta-Tokens.
const notableDropped = [...droppedTokenCounts.entries()]
  .filter(([, count]) => count >= 3)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);
if (notableDropped.length) {
  console.warn(
    "ℹ️  Häufigste nicht ausgewertete Klassen-Tokens (Top 15, evtl. neue " +
      "Upstream-Klassen prüfen): " +
      notableDropped.map(([token, count]) => `${token} (${count})`).join(", "),
  );
}

// --- Stabile Herkunft statt Build-Datum: verhindert Diff-Rauschen. ----------
let dataCommit = "unbekannt";
try {
  dataCommit = execFileSync(
    "git",
    ["-C", workDir, "rev-parse", "--short", "HEAD"],
    {
      encoding: "utf8",
    },
  ).trim();
} catch {
  // Kein Git-Checkout (z. B. entpacktes Archiv) — Herkunft bleibt "unbekannt".
}

const header = `// Auto-generated from aoe4world/data @ ${dataCommit}. Do not edit by hand.\n`;
const file = `${header}export const dataCommit = ${JSON.stringify(
  dataCommit,
)};\n\nexport const units = ${JSON.stringify(
  units,
  null,
  2,
)};\n\nexport const civilizations = ${JSON.stringify(civs, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, file);
console.log(
  `Generated ${units.length} units and ${civs.length} civilizations from aoe4world/data @ ${dataCommit}.`,
);

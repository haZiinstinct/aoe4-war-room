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

// Klassen-Tokens, die wir taktisch auswerten. Zusätzlich behalten wir unten
// automatisch jedes Token, das irgendeine Bonusschaden-Gruppe referenziert —
// sonst greift z. B. „+10 gegen Späher“ nie, weil „scout“ weggefiltert wäre.
const baseClassTokens = new Set([
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
  "hero",
  "horse",
  "infantry",
  "infantry_light",
  "khan",
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

// Bevorzugte Zivilisation je Zeitalter-Variante: Standard-Einheiten (Bogen-
// schütze, Speerträger …) existieren je Civ und Zeitalter als eigene Variante.
// Wir nehmen die generischste Ausprägung, damit Civ-Boni (Byzanz-Söldner,
// Delhi-Upgrades) den Vergleich nicht verzerren.
const CIV_PREFERENCE = [
  "en",
  "fr",
  "hr",
  "ru",
  "ab",
  "ch",
  "de",
  "mo",
  "ot",
  "ma",
  "by",
  "ja",
  "je",
  "ay",
  "gol",
  "zx",
  "hl",
  "kt",
  "tug",
  "mac",
  "sen",
  "od",
  "jin",
];

// --- Daten-getriebene Kampf-Flags -----------------------------------------
// Flächenschaden (Belagerung u. Ä.) — Teilstring-Match deckt Varianten wie
// "counterweight-mangonel" mit ab.
const SPLASH_TOKENS = [
  "mangonel",
  "manjaniq",
  "ribauldequin",
  "nest-of-bees",
  "great-bombard",
  "huihui",
  "ozutsu",
  "cheirosiphon",
  "eruptor",
];
// Nahkampf-Spezialisten mit Cleave/Anti-Infanterie-Profil.
const ANTI_INFANTRY_MELEE_TOKENS = ["landsknecht", "varangian", "zhanma"];
// Zusammengesetzte Formations-Einheiten (keine echten Trainings-Einheiten).
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

// --- Waffen-Klassifikation --------------------------------------------------
// Upstream listet je Einheit alle Waffen inkl. Tech-Upgrades (improved,
// incendiary …), Platzhalter (dummy) und Stellungs-Fähigkeiten (Spearwall).
// Für das Grundmodell zählen nur Basiswaffen; Upgrades bildet der Regler
// „Mein Upgrade“ ab. Sturmangriffe (Lanze/Charge, Abklingzeit < 0,6 s) sind
// Burst-Treffer beim Kontakt, keine Dauer-DPS.
const DROP_WEAPON_PATTERN =
  /improved|upgrade|incendiary|adjustable|dummy|spearwall|debuff/i;
const BURST_SPEED = 0.6;

function isBurst(weapon) {
  return (
    /charge/i.test(weapon.attribName ?? "") ||
    /^(charge|spear charge)$/i.test(weapon.name ?? "") ||
    Number(weapon.speed ?? 1) < BURST_SPEED
  );
}

function usableWeapon(weapon) {
  if (!weapon || weapon.type === "fire") return false;
  if (!Number(weapon.damage)) return false;
  if (/translation not found/i.test(weapon.name ?? "")) return false;
  if (/spearwall/i.test(weapon.name ?? "")) return false;
  // Rammböcke können in AoE IV keine Einheiten angreifen.
  if (/^ram$/i.test(weapon.name ?? "")) return false;
  if (DROP_WEAPON_PATTERN.test(weapon.attribName ?? "")) return false;
  return true;
}

function compactWeapon(weapon) {
  return {
    name: weapon.name,
    type: weapon.type,
    damage: Number(weapon.damage ?? 0),
    speed: Number(weapon.speed ?? 1),
    range: Number(weapon.range?.max ?? 0),
    burst: isBurst(weapon),
    modifiers: (weapon.modifiers ?? [])
      .filter((modifier) => modifier.effect === "change" && modifier.value)
      .map((modifier) => ({
        value: Number(modifier.value),
        property: modifier.property,
        groups: modifier.target?.class ?? [],
      })),
  };
}

function compactWeapons(weapons) {
  const seen = new Set();
  const result = [];
  for (const raw of weapons ?? []) {
    if (!usableWeapon(raw)) continue;
    const weapon = compactWeapon(raw);
    const key = [
      weapon.type,
      weapon.damage,
      weapon.speed,
      weapon.range,
      weapon.burst,
      JSON.stringify(weapon.modifiers),
    ].join("|");
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(weapon);
  }
  return result;
}

// --- Varianten je Zeitalter -------------------------------------------------
function mode(values) {
  const counts = new Map();
  for (const value of values) {
    const key = JSON.stringify(value);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  let best = null;
  let bestCount = -1;
  for (const [key, count] of counts) {
    if (count > bestCount) {
      best = key;
      bestCount = count;
    }
  }
  return best === null ? undefined : JSON.parse(best);
}

function civRank(variation) {
  const ranks = (variation.civs ?? []).map((civ) => {
    const index = CIV_PREFERENCE.indexOf(civ);
    return index === -1 ? CIV_PREFERENCE.length : index;
  });
  return ranks.length ? Math.min(...ranks) : CIV_PREFERENCE.length;
}

function hasCombatWeapon(variation) {
  return (variation.weapons ?? []).some(usableWeapon);
}

function buildAgeVariant(variations) {
  // Bevorzugt: generische Civ mit echter Kampfwaffe.
  const ordered = [...variations].sort((a, b) => {
    const weaponDelta = Number(hasCombatWeapon(b)) - Number(hasCombatWeapon(a));
    if (weaponDelta !== 0) return weaponDelta;
    return civRank(a) - civRank(b);
  });
  const primary = ordered[0];
  const armorOf = (variation) => {
    const armor = Object.fromEntries(
      (variation.armor ?? []).map((entry) => [
        entry.type,
        Number(entry.value ?? 0),
      ]),
    );
    return {
      melee: Number(armor.melee ?? 0),
      ranged: Number(armor.ranged ?? 0),
    };
  };
  const costsOf = (variation) => {
    const costs = variation.costs ?? {};
    return {
      food: Number(costs.food ?? 0),
      wood: Number(costs.wood ?? 0),
      gold: Number(costs.gold ?? 0),
      stone: Number(costs.stone ?? 0),
      oliveoil: Number(costs.oliveoil ?? 0),
      total: Number(costs.total ?? 0),
      popcap: Number(costs.popcap ?? 0),
      time: Number(costs.time ?? 0),
    };
  };
  return {
    hp: mode(variations.map((v) => Number(v.hitpoints ?? 0))),
    armor: mode(variations.map(armorOf)),
    movement: mode(variations.map((v) => Number(v.movement?.speed ?? 0))),
    costs: mode(variations.map(costsOf)),
    weapons: compactWeapons(primary.weapons),
  };
}

function classify(unit, classes, hasWeapon) {
  if (classes.has("ship") || classes.has("naval_unit")) return "marine";
  if (classes.has("siege")) return "belagerung";
  if (
    classes.has("monk") ||
    classes.has("religious") ||
    /bannerman|dervish|healer-elephant|imam|mehter|monk|prelate|scholar|shaman|shinto-priest/.test(
      unit.id,
    ) ||
    (!hasWeapon && !classes.has("hero"))
  ) {
    return "support";
  }
  if (classes.has("cavalry")) return "kavallerie";
  if (classes.has("ranged")) return "fernkampf";
  if (classes.has("infantry")) return "infanterie";
  return "sonstige";
}

// Tokens, die Bonusschaden-Gruppen referenzieren (einzeln und als Verbund).
const referencedTokens = new Set();
for (const unit of source.data) {
  for (const variation of unit.variations ?? []) {
    for (const weapon of variation.weapons ?? []) {
      for (const modifier of weapon.modifiers ?? []) {
        for (const group of modifier.target?.class ?? []) {
          for (const token of group) referencedTokens.add(token);
          referencedTokens.add(group.join("_"));
        }
      }
    }
  }
}
const relevantClassTokens = new Set([...baseClassTokens, ...referencedTokens]);

// Verworfene Klassen-Tokens sammeln, um neue Upstream-Klassen sichtbar zu machen.
const droppedTokenCounts = new Map();

const units = source.data
  .filter((unit) => unit.classes?.includes("military"))
  .map((unit) => {
    const variations = (unit.variations ?? []).filter((variation) =>
      Number.isFinite(Number(variation.age)),
    );
    const rawClasses = new Set(unit.classes ?? []);
    for (const variation of variations) {
      for (const token of variation.classes ?? []) rawClasses.add(token);
    }
    for (const token of rawClasses) {
      if (!relevantClassTokens.has(token)) {
        droppedTokenCounts.set(token, (droppedTokenCounts.get(token) ?? 0) + 1);
      }
    }
    const classes = [...rawClasses].filter((token) =>
      relevantClassTokens.has(token),
    );

    const byAge = new Map();
    for (const variation of variations) {
      const age = Number(variation.age);
      if (!byAge.has(age)) byAge.set(age, []);
      byAge.get(age).push(variation);
    }
    const ages = {};
    for (const age of [...byAge.keys()].sort((a, b) => a - b)) {
      ages[age] = buildAgeVariant(byAge.get(age));
    }
    const ageKeys = Object.keys(ages)
      .map(Number)
      .sort((a, b) => a - b);
    // Basiswerte = früheste Variante mit echter Waffe (Helden wie der Earl's
    // Guard existieren in Zeitalter I noch waffenlos), sonst die früheste.
    const baseAge =
      ageKeys.find((age) => ages[age].weapons.length > 0) ?? ageKeys[0] ?? 1;
    const base = ages[baseAge] ?? {
      hp: 0,
      armor: { melee: 0, ranged: 0 },
      movement: 0,
      costs: {
        food: 0,
        wood: 0,
        gold: 0,
        stone: 0,
        oliveoil: 0,
        total: 0,
        popcap: 0,
        time: 0,
      },
      weapons: [],
    };
    const hasWeapon = Object.values(ages).some(
      (variant) => variant.weapons.length > 0,
    );
    const primaryVariation = variations[0] ?? {};

    return {
      id: unit.id,
      name: unit.name,
      unique: Boolean(unit.unique),
      civs: unit.civs ?? [],
      minAge: Number(unit.minAge ?? baseAge),
      icon: unit.icon,
      description: unit.description ?? primaryVariation.description ?? "",
      displayClasses:
        unit.displayClasses ?? primaryVariation.displayClasses ?? [],
      classes,
      category: classify(unit, rawClasses, hasWeapon),
      hp: base.hp,
      armor: base.armor,
      movement: base.movement,
      costs: base.costs,
      weapons: base.weapons,
      ages,
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

// Bonusgruppen, die keine einzige Einheit treffen (Gebäude/Mauern/Tiere sind
// erwartet) — sichtbar machen, falls ein Klassen-Token umbenannt wurde.
const EXPECTED_UNMATCHED = /^(building|wall|gaia|animal|worker|scout_tower)/;
const groupMatches = new Map();
for (const unit of units) {
  for (const weapon of unit.weapons) {
    for (const modifier of weapon.modifiers) {
      for (const group of modifier.groups) {
        const key = group.join("+");
        if (groupMatches.has(key)) continue;
        const tokens = group.map((token) => token.replaceAll(" ", "_"));
        const hits = units.filter((candidate) => {
          const set = new Set(candidate.classes);
          return (
            tokens.every((token) => set.has(token)) || set.has(tokens.join("_"))
          );
        }).length;
        groupMatches.set(key, hits);
      }
    }
  }
}
const unmatched = [...groupMatches.entries()]
  .filter(([key, hits]) => hits === 0 && !EXPECTED_UNMATCHED.test(key))
  .map(([key]) => key);
if (unmatched.length) {
  console.warn(
    `ℹ️  Bonusgruppen ohne treffende Einheit (nur Gebäude/Tiere sind erwartet): ${unmatched.join(", ")}`,
  );
}

// Neue, häufige Klassen-Tokens sichtbar machen (Schwelle: >= 3 Einheiten).
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
let dataDate = "";
try {
  dataCommit = execFileSync(
    "git",
    ["-C", workDir, "rev-parse", "--short", "HEAD"],
    { encoding: "utf8" },
  ).trim();
  dataDate = execFileSync("git", ["-C", workDir, "log", "-1", "--format=%cs"], {
    encoding: "utf8",
  }).trim();
} catch {
  // Kein Git-Checkout (z. B. entpacktes Archiv) — Herkunft bleibt "unbekannt".
}

const header = `// Auto-generated from aoe4world/data @ ${dataCommit}. Do not edit by hand.\n`;
const file =
  `${header}export const dataCommit = ${JSON.stringify(dataCommit)};\n` +
  `export const dataDate = ${JSON.stringify(dataDate)};\n\n` +
  `export const units = ${JSON.stringify(units, null, 1)};\n\n` +
  `export const civilizations = ${JSON.stringify(civs, null, 1)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, file);
const ageVariants = units.reduce(
  (sum, unit) => sum + Object.keys(unit.ages).length,
  0,
);
console.log(
  `Generated ${units.length} units (${ageVariants} age variants) and ${civs.length} civilizations from aoe4world/data @ ${dataCommit}${dataDate ? ` (${dataDate})` : ""}.`,
);

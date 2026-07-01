import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(
  root,
  "work",
  "aoe4world-data",
  "units",
  "all-unified.json",
);
const civPath = path.join(
  root,
  "work",
  "aoe4world-data",
  "civilizations",
  "civs-index.json",
);
const outputPath = path.join(root, "src", "data", "units.generated.js");

if (!fs.existsSync(sourcePath)) {
  throw new Error(
    `AoE4 World source data not found at ${sourcePath}. Clone https://github.com/aoe4world/data into work/aoe4world-data first.`,
  );
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const civSource = JSON.parse(fs.readFileSync(civPath, "utf8"));

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
  "hero",
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
  const classes = new Set([...(unit.classes ?? []), ...(variation.classes ?? [])]);
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

const units = source.data
  .filter((unit) => unit.classes?.includes("military"))
  .map((unit) => {
    const variation = pickVariation(unit);
    const classes = [
      ...new Set([...(unit.classes ?? []), ...(variation.classes ?? [])]),
    ].filter((token) => relevantClassTokens.has(token));
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

const header = `// Auto-generated from aoe4world/data on ${new Date()
  .toISOString()
  .slice(0, 10)}. Do not edit by hand.\n`;
const file = `${header}export const units = ${JSON.stringify(
  units,
  null,
  2,
)};\n\nexport const civilizations = ${JSON.stringify(civs, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, file);
console.log(`Generated ${units.length} units and ${civs.length} civilizations.`);

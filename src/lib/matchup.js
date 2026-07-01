import { roleLabel, unitName } from "../data/localization.js";
import {
  MICRO_BONUSES,
  MICRO_RANGE_SCALE,
  SPLASH,
  TERRAIN_MULTIPLIERS,
  TUNING,
  VERDICT_THRESHOLDS,
} from "./matchup.config.js";

/** @typedef {import("../types.js").Unit} Unit */
/** @typedef {import("../types.js").MatchupSettings} MatchupSettings */
/** @typedef {import("../types.js").MatchupResult} MatchupResult */
/** @typedef {import("../types.js").CounterCandidate} CounterCandidate */

/**
 * @param {Unit} unit
 * @returns {Set<string>}
 */
function classSet(unit) {
  return new Set(unit.classes);
}

function matchesTargetGroup(unit, group) {
  const classes = classSet(unit);
  const tokens = group.map((token) => token.replaceAll(" ", "_"));
  return (
    tokens.every((token) => classes.has(token)) || classes.has(tokens.join("_"))
  );
}

function computeWeaponProfile(attacker, defender) {
  const profiles = attacker.weapons.map((weapon) => {
    const bonus = weapon.modifiers.reduce((sum, modifier) => {
      const matches = modifier.groups.some((group) =>
        matchesTargetGroup(defender, group),
      );
      return matches ? sum + modifier.value : sum;
    }, 0);
    const armorType = weapon.type === "melee" ? "melee" : "ranged";
    const armor = defender.armor[armorType] ?? 0;
    const hit = Math.max(1, weapon.damage + bonus - armor);
    return {
      ...weapon,
      bonus,
      armor,
      dps: hit / Math.max(TUNING.speedFloor, weapon.speed),
    };
  });

  // Beste Waffe (höchste DPS) entscheidet. Fällt eine Einheit ohne (Nicht-Feuer-)
  // Waffe an, liefert der Fallback einen kampflos schwachen Wert, statt zu werfen.
  return (
    profiles.sort((a, b) => b.dps - a.dps)[0] ?? {
      damage: 0,
      bonus: 0,
      armor: 0,
      dps: TUNING.emptyWeaponDps,
      range: 0,
      speed: 1,
      type: "melee",
      modifiers: [],
    }
  );
}

// Das Waffenprofil eines (Angreifer, Verteidiger)-Paares ist rein von statischen
// Einheitendaten bestimmt und wird über die Kandidatenlisten sehr oft mit den
// gleichen Einheiten berechnet. Ein Cache (WeakMap je Angreifer → Verteidiger-ID)
// spart die Wiederholung; die Einträge fallen mit dem Angreifer aus dem GC.
const profileCache = new WeakMap();
function weaponProfile(attacker, defender) {
  let byDefender = profileCache.get(attacker);
  if (!byDefender) {
    byDefender = new Map();
    profileCache.set(attacker, byDefender);
  }
  const cached = byDefender.get(defender.id);
  if (cached) return cached;
  const profile = computeWeaponProfile(attacker, defender);
  byDefender.set(defender.id, profile);
  return profile;
}

function unitCost(unit) {
  return unit.costs.total > 0 ? unit.costs.total : TUNING.costFallback;
}

function terrainMultiplier(unit, terrain) {
  const table = TERRAIN_MULTIPLIERS[terrain];
  if (!table) return 1;
  const classes = classSet(unit);
  if (terrain === "engpass") {
    if (unit.category === "belagerung") return table.belagerung;
    if (classes.has("ranged")) return table.ranged;
    if (classes.has("cavalry")) return table.cavalry;
  }
  if (terrain === "offen") {
    if (classes.has("cavalry")) return table.cavalry;
    if (classes.has("ranged")) return table.ranged;
  }
  if (terrain === "wald") {
    if (classes.has("ranged")) return table.ranged;
    if (classes.has("infantry")) return table.infantry;
  }
  return 1;
}

function microMultiplier(unit, opponent, micro) {
  if (micro !== "stark" && micro !== "solide") return 1;
  const classes = classSet(unit);
  const opponentClasses = classSet(opponent);
  let multiplier = 1;
  if (classes.has("ranged")) multiplier += MICRO_BONUSES.ranged[micro];
  if (classes.has("cavalry")) multiplier += MICRO_BONUSES.cavalry[micro];
  if (
    classes.has("ranged") &&
    unit.movement > opponent.movement &&
    !opponentClasses.has("ranged")
  ) {
    multiplier += MICRO_BONUSES.kite[micro];
  }
  return multiplier;
}

// Flächenschaden/Spezialprofile lesen jetzt daten-getriebene Flags
// (unit.flags), statt IDs zur Laufzeit per Regex zu erraten.
function splashMultiplier(attacker, defender, mode) {
  if (mode !== "resources") return 1;
  const defenderClasses = classSet(defender);
  if (
    attacker.flags?.splash &&
    (defenderClasses.has("infantry") || defenderClasses.has("ranged"))
  ) {
    return SPLASH.siegeVsSoft;
  }
  if (attacker.flags?.antiInfantryMelee && defenderClasses.has("infantry")) {
    return SPLASH.antiInfantryMelee;
  }
  return 1;
}

function hasExplicitBonusAgainst(unit, classToken) {
  return unit.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some(
        (group) =>
          group.includes(classToken) || group.join("_").includes(classToken),
      ),
    ),
  );
}

function hasMatchingBonus(attacker, target) {
  return attacker.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some((group) => matchesTargetGroup(target, group)),
    ),
  );
}

function isPreferredTarget(attacker, target) {
  const attackerClasses = classSet(attacker);
  const targetClasses = classSet(target);
  const hasUnitBonus = attacker.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some((group) =>
        ["cavalry", "heavy", "infantry", "ranged", "siege"].some((token) =>
          group.includes(token),
        ),
      ),
    ),
  );

  if (hasUnitBonus) return hasMatchingBonus(attacker, target);
  if (attacker.flags?.antiInfantryMelee) return targetClasses.has("infantry");
  if (attackerClasses.has("gunpowder") && attackerClasses.has("ranged"))
    return targetClasses.has("heavy");
  if (attackerClasses.has("cavalry") && attackerClasses.has("melee"))
    return targetClasses.has("ranged") || target.category === "belagerung";
  if (attackerClasses.has("heavy") && attackerClasses.has("melee_infantry"))
    return (
      targetClasses.has("infantry_light") ||
      targetClasses.has("ranged_infantry")
    );
  if (attacker.category === "belagerung")
    return targetClasses.has("ranged") || targetClasses.has("infantry");
  return true;
}

function sideStrength(unit, opponent, settings, upgradeDelta = 0) {
  const weapon = weaponProfile(unit, opponent);
  const opponentWeapon = weaponProfile(opponent, unit);
  const count =
    settings.mode === "resources"
      ? Math.max(TUNING.countFloor, settings.budget / unitCost(unit))
      : 1;
  const hp = Math.max(TUNING.hpFloor, unit.hp || TUNING.fallbackHp);
  const individual = Math.sqrt(Math.max(TUNING.dpsFloor, weapon.dps) * hp);

  let tactical = 1;
  // In AoE IV, explicit class bonuses are not merely extra raw DPS: they define
  // the production answer and scale with focus fire. Weight that specialization
  // separately so natural counters remain visible beside expensive raw stats.
  if (weapon.bonus > 0) {
    tactical *=
      1 +
      Math.min(
        TUNING.bonusCap,
        (weapon.bonus / Math.max(1, weapon.damage)) * TUNING.bonusWeight,
      );
  }
  const rangeLead = weapon.range - opponentWeapon.range;
  if (rangeLead > 0) {
    const microScale =
      MICRO_RANGE_SCALE[settings.micro] ?? MICRO_RANGE_SCALE.amove;
    tactical *=
      1 + Math.min(TUNING.rangeCap, rangeLead * TUNING.rangeRate * microScale);
  }
  tactical *= terrainMultiplier(unit, settings.terrain);
  tactical *= microMultiplier(unit, opponent, settings.micro);
  tactical *= splashMultiplier(unit, opponent, settings.mode);
  tactical *= 1 + upgradeDelta * TUNING.upgradeStep;

  return {
    weapon,
    count,
    value: individual * count * tactical,
    tactical,
  };
}

// Domänentrennung: nur "marine" gilt als Wasser; alles andere (inkl. fehlender/
// unbekannter Kategorie) wird bewusst als Landeinheit behandelt.
function domain(unit) {
  return unit.category === "marine" ? "water" : "land";
}

// Label + Kurzform je Verdict-Schlüssel und Sprache: [label, short].
const VERDICT_LABELS = {
  mirror: {
    de: ["Spiegel-Matchup", "Gleichstand"],
    en: ["Mirror matchup", "Even"],
  },
  hard: { de: ["Klarer Counter", "Stark"], en: ["Clear counter", "Strong"] },
  soft: { de: ["Leichter Vorteil", "Vorteil"], en: ["Slight edge", "Edge"] },
  skill: {
    de: ["Skill-Matchup", "Situativ"],
    en: ["Skill matchup", "Situational"],
  },
  "soft-loss": {
    de: ["Leichter Nachteil", "Nachteil"],
    en: ["Slight loss", "Behind"],
  },
  "hard-loss": {
    de: ["Harter Nachteil", "Schwach"],
    en: ["Hard loss", "Weak"],
  },
  invalid: {
    de: ["Andere Domäne", "Land/Wasser"],
    en: ["Not comparable", "Other domain"],
  },
};

function makeVerdict(key, tone, lang) {
  const [label, short] = VERDICT_LABELS[key][lang] ?? VERDICT_LABELS[key].de;
  return { key, label, short, tone };
}

function verdict(ratio, sameUnit, lang) {
  if (sameUnit) return makeVerdict("mirror", "neutral", lang);
  if (ratio >= VERDICT_THRESHOLDS.hard)
    return makeVerdict("hard", "positive", lang);
  if (ratio >= VERDICT_THRESHOLDS.soft)
    return makeVerdict("soft", "positive", lang);
  if (ratio > VERDICT_THRESHOLDS.skill)
    return makeVerdict("skill", "neutral", lang);
  if (ratio > VERDICT_THRESHOLDS.softLoss)
    return makeVerdict("soft-loss", "negative", lang);
  return makeVerdict("hard-loss", "negative", lang);
}

function matchupReasons(attacker, defender, a, b, ratio, settings, lang) {
  const L = (de, en) => (lang === "en" ? en : de);
  const nA = unitName(attacker, lang);
  const nD = unitName(defender, lang);
  const reasons = [];
  if (a.weapon.bonus > 0) {
    const bonus = Math.round(a.weapon.bonus);
    reasons.push({
      title: L(`+${bonus} Bonusschaden`, `+${bonus} bonus damage`),
      text: L(
        `${nA} trifft gezielt eine Klasse von ${nD}.`,
        `${nA} deals bonus damage to a class ${nD} belongs to.`,
      ),
      good: true,
    });
  }
  if (b.weapon.bonus > 0) {
    const bonus = Math.round(b.weapon.bonus);
    const role = roleLabel(attacker, lang).toLowerCase();
    reasons.push({
      title: L(`Gegner hat +${bonus}`, `Enemy has +${bonus}`),
      text: L(
        `${nD} besitzt passenden Bonusschaden gegen ${role}.`,
        `${nD} has matching bonus damage against ${role}.`,
      ),
      good: false,
    });
  }
  const rangeDiff = a.weapon.range - b.weapon.range;
  if (rangeDiff >= 2) {
    reasons.push({
      title: L("Sicherer Abstand", "Safe distance"),
      text: L(
        `+${rangeDiff.toFixed(1)} Felder Reichweite – nur wertvoll, wenn du den Abstand hältst.`,
        `+${rangeDiff.toFixed(1)} tiles of range – only worth it if you keep the distance.`,
      ),
      good: true,
    });
  } else if (-rangeDiff >= 2) {
    reasons.push({
      title: L("Reichweitenproblem", "Range problem"),
      text: L(
        `${nA} muss erst ${(-rangeDiff).toFixed(1)} Felder überbrücken.`,
        `${nA} first has to close ${(-rangeDiff).toFixed(1)} tiles.`,
      ),
      good: false,
    });
  }
  const costGap = unitCost(defender) - unitCost(attacker);
  if (settings.mode === "resources" && Math.abs(costGap) >= 45) {
    reasons.push({
      title:
        costGap > 0
          ? L("Mehr Körper fürs Budget", "More bodies per budget")
          : L("Teure Antwort", "Expensive answer"),
      text:
        costGap > 0
          ? L(
              `Bei ${settings.budget} Ressourcen stehen ungefähr ${a.count.toFixed(1)} gegen ${b.count.toFixed(1)} Einheiten.`,
              `At ${settings.budget} resources that is roughly ${a.count.toFixed(1)} vs ${b.count.toFixed(1)} units.`,
            )
          : L(
              `${nA} kostet deutlich mehr; jeder Verlust tut weh.`,
              `${nA} costs noticeably more; every loss hurts.`,
            ),
      good: costGap > 0,
    });
  }
  if (
    attacker.armor.melee + attacker.armor.ranged >=
    defender.armor.melee + defender.armor.ranged + 5
  ) {
    reasons.push({
      title: L("Rüstungsvorteil", "Armour advantage"),
      text: L(
        `${nA} kann Grundschaden besser abfangen.`,
        `${nA} absorbs base damage better.`,
      ),
      good: true,
    });
  }
  if (reasons.length < 2) {
    reasons.push({
      title:
        ratio > 1
          ? L("Besseres Gesamtpaket", "Better overall package")
          : L("Kein natürlicher Counter", "No natural counter"),
      text:
        ratio > 1
          ? L(
              "Schaden, Haltbarkeit und Kosten greifen in diesem Szenario besser ineinander.",
              "Damage, durability and cost mesh better in this scenario.",
            )
          : L(
              "Ohne Klassenbonus entscheiden Support, Zahl, Position und Fokusfeuer.",
              "Without a class bonus, support, numbers, position and focus fire decide.",
            ),
      good: ratio > 1,
    });
  }
  if (reasons.length < 3) {
    const terrainText = {
      offen: L(
        "Offenes Feld gibt mobilen Einheiten und Kiting mehr Raum.",
        "Open field gives mobile units and kiting more room.",
      ),
      engpass: L(
        "Im Engpass zählen Frontbreite und Flächenschaden stärker.",
        "In a choke, frontage and area damage matter more.",
      ),
      wald: L(
        "Waldwege verkürzen Sichtlinien und bremsen breite Formationen.",
        "Forest paths shorten sightlines and slow wide formations.",
      ),
    };
    reasons.push({
      title: L("Gelände & Ausführung", "Terrain & execution"),
      text: terrainText[settings.terrain],
      good: settings.terrain !== "wald" || attacker.category === "infanterie",
    });
  }
  return reasons.slice(0, 3);
}

export const DEFAULT_SETTINGS = {
  mode: "resources",
  budget: 720,
  terrain: "offen",
  micro: "solide",
  upgrades: 0,
  age: 4,
};

/**
 * Bewertet Angreifer gegen Verteidiger im erklärbaren Lernmodell.
 * @param {Unit} attacker
 * @param {Unit} defender
 * @param {Partial<MatchupSettings>} [settings]
 * @param {"de"|"en"} [lang]
 * @returns {MatchupResult | null}
 */
export function calculateMatchup(
  attacker,
  defender,
  settings = DEFAULT_SETTINGS,
  lang = "de",
) {
  if (!attacker || !defender) return null;
  // Fehlende Felder gegen die Defaults auffüllen, damit einzelne undefinierte
  // Einstellungen nicht zu NaN-Ergebnissen führen.
  settings = { ...DEFAULT_SETTINGS, ...settings };
  if (domain(attacker) !== domain(defender)) {
    return {
      comparable: false,
      verdict: makeVerdict("invalid", "neutral", lang),
      ratio: 1,
      confidence: 0,
      reasons: [
        {
          title:
            lang === "en"
              ? "Land and water separated"
              : "Land und Wasser getrennt",
          text:
            lang === "en"
              ? "Naval units are only rated against other naval units."
              : "Marineeinheiten werden nur mit Marineeinheiten bewertet.",
          good: false,
        },
      ],
    };
  }

  const a = sideStrength(
    attacker,
    defender,
    settings,
    Number(settings.upgrades ?? 0),
  );
  const b = sideStrength(defender, attacker, settings, 0);
  const ratio = a.value / Math.max(TUNING.ratioFloor, b.value);
  const resultVerdict = verdict(ratio, attacker.id === defender.id, lang);
  return {
    comparable: true,
    verdict: resultVerdict,
    ratio,
    confidence: Math.min(
      TUNING.confidenceCap,
      Math.round(
        TUNING.confidenceBase +
          Math.abs(Math.log2(ratio)) * TUNING.confidenceScale,
      ),
    ),
    attacker: a,
    defender: b,
    reasons: matchupReasons(attacker, defender, a, b, ratio, settings, lang),
  };
}

/**
 * Beste direkte Antworten auf eine Zieleinheit, absteigend nach Vorteil.
 * @param {Unit[]} allUnits
 * @param {Unit} target
 * @param {Partial<MatchupSettings>} [settings]
 * @param {number} [limit]
 * @param {"de"|"en"} [lang]
 * @returns {CounterCandidate[]}
 */
export function getCounterCandidates(
  allUnits,
  target,
  settings = DEFAULT_SETTINGS,
  limit = 5,
  lang = "de",
) {
  return allUnits
    .filter(
      (unit) =>
        unit.id !== target.id &&
        domain(unit) === domain(target) &&
        unit.minAge <= settings.age &&
        unit.weapons.length > 0 &&
        unit.costs.total > 0 &&
        unit.category !== "support" &&
        !unit.flags?.formation,
    )
    .map((unit) => ({
      unit,
      result: calculateMatchup(unit, target, settings, lang),
    }))
    .filter((entry) => entry.result.comparable)
    .sort((a, b) => b.result.ratio - a.result.ratio)
    .slice(0, limit);
}

/**
 * Einheiten, die diese Einheit am stärksten bedrohen.
 * @param {Unit[]} allUnits
 * @param {Unit} unit
 * @param {Partial<MatchupSettings>} [settings]
 * @param {number} [limit]
 * @param {"de"|"en"} [lang]
 * @returns {CounterCandidate[]}
 */
export function getThreats(
  allUnits,
  unit,
  settings = DEFAULT_SETTINGS,
  limit = 4,
  lang = "de",
) {
  return getCounterCandidates(allUnits, unit, settings, limit, lang);
}

/**
 * Ziele, gegen die diese Einheit bevorzugt eingesetzt wird.
 * @param {Unit[]} allUnits
 * @param {Unit} unit
 * @param {Partial<MatchupSettings>} [settings]
 * @param {number} [limit]
 * @param {"de"|"en"} [lang]
 * @returns {CounterCandidate[]}
 */
export function getFavoredTargets(
  allUnits,
  unit,
  settings = DEFAULT_SETTINGS,
  limit = 4,
  lang = "de",
) {
  return allUnits
    .filter(
      (target) =>
        target.id !== unit.id &&
        domain(target) === domain(unit) &&
        target.minAge <= settings.age &&
        target.weapons.length > 0 &&
        target.costs.total > 0 &&
        target.category !== "support" &&
        isPreferredTarget(unit, target) &&
        (target.category !== "belagerung" ||
          unit.category === "kavallerie" ||
          hasExplicitBonusAgainst(unit, "siege")) &&
        !target.flags?.formation,
    )
    .map((target) => ({
      unit: target,
      result: calculateMatchup(unit, target, settings, lang),
    }))
    .filter((entry) => entry.result.comparable)
    .sort((a, b) => b.result.ratio - a.result.ratio)
    .slice(0, limit);
}

import { roleLabel, unitName } from "../data/localization.js";
import {
  EDGE_DISPLAY_LIMIT,
  EDGE_THRESHOLDS,
  MICRO_BONUSES,
  MICRO_RANGE_SCALE,
  SPLASH,
  TERRAIN_MULTIPLIERS,
  TUNING,
} from "./matchup.config.js";

/** @typedef {import("../types.js").Unit} Unit */
/** @typedef {import("../types.js").UnitStats} UnitStats */
/** @typedef {import("../types.js").Weapon} Weapon */
/** @typedef {import("../types.js").MatchupSettings} MatchupSettings */
/** @typedef {import("../types.js").MatchupResult} MatchupResult */
/** @typedef {import("../types.js").CounterCandidate} CounterCandidate */
/** @typedef {import("../types.js").SideStrength} SideStrength */
/** @typedef {import("../types.js").WeaponProfile} WeaponProfile */

export const DEFAULT_SETTINGS = {
  mode: "resources",
  budget: 720,
  terrain: "offen",
  micro: "solide",
  upgrades: 0,
  age: 4,
  civ: "all",
};

// ---------------------------------------------------------------------------
// Zeitalter-Varianten
// ---------------------------------------------------------------------------

/**
 * Werte einer Einheit im gewählten Zeitalter: die höchste verfügbare Variante
 * ≤ Zeitalter, sonst die früheste (Einheit ist dann eigentlich noch nicht
 * verfügbar — der Vergleich bleibt möglich, die UI weist darauf hin).
 * @param {Unit} unit
 * @param {number} [age]
 * @returns {UnitStats}
 */
export function statsAt(unit, age = DEFAULT_SETTINGS.age) {
  const ages = unit.ages ?? {};
  const keys = Object.keys(ages)
    .map(Number)
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
  let chosen = null;
  for (const key of keys) {
    if (key <= age) chosen = key;
  }
  if (chosen === null && keys.length) chosen = keys[0];
  if (chosen === null) {
    return {
      age: unit.minAge,
      hp: unit.hp,
      armor: unit.armor,
      movement: unit.movement,
      costs: unit.costs,
      weapons: unit.weapons,
    };
  }
  const variant = ages[chosen];
  // Waffenlose Varianten (z. B. Held in Zeitalter I) fallen auf die Basis zurück.
  const weapons = variant.weapons?.length ? variant.weapons : unit.weapons;
  return { age: chosen, ...variant, weapons };
}

/**
 * Beste Dauerwaffe (höchste Grund-DPS) einer Einheit — für Anzeigen.
 * @param {UnitStats | Unit} stats
 * @returns {Weapon | undefined}
 */
export function primaryWeapon(stats) {
  const sustained = stats.weapons.filter((weapon) => !weapon.burst);
  const pool = sustained.length ? sustained : stats.weapons;
  return [...pool].sort(
    (a, b) =>
      b.damage / Math.max(TUNING.speedFloor, b.speed) -
      a.damage / Math.max(TUNING.speedFloor, a.speed),
  )[0];
}

// ---------------------------------------------------------------------------
// Waffenprofil
// ---------------------------------------------------------------------------

function classSet(unit) {
  return new Set(unit.classes);
}

export function matchesTargetGroup(unit, group) {
  const classes = classSet(unit);
  const tokens = group.map((token) => token.replaceAll(" ", "_"));
  return (
    tokens.every((token) => classes.has(token)) || classes.has(tokens.join("_"))
  );
}

/**
 * Bonusschaden einer Waffe gegen die Klassen des Ziels.
 * @param {Weapon} weapon
 * @param {Unit} defender
 */
export function weaponBonus(weapon, defender) {
  return weapon.modifiers.reduce((sum, modifier) => {
    const matches = modifier.groups.some((group) =>
      matchesTargetGroup(defender, group),
    );
    return matches ? sum + modifier.value : sum;
  }, 0);
}

/**
 * Rüstung, die gegen diesen Waffentyp zählt. Belagerungsschaden (siege)
 * ignoriert in Age of Empires IV beide Rüstungswerte.
 * @param {UnitStats} defenderStats
 * @param {Weapon} weapon
 */
export function effectiveArmor(defenderStats, weapon) {
  if (weapon.type === "siege") return 0;
  if (weapon.type === "melee") return defenderStats.armor.melee ?? 0;
  return defenderStats.armor.ranged ?? 0;
}

/**
 * @param {Unit} attacker
 * @param {UnitStats} attackerStats
 * @param {Unit} defender
 * @param {UnitStats} defenderStats
 * @returns {WeaponProfile}
 */
function computeWeaponProfile(
  attacker,
  attackerStats,
  defender,
  defenderStats,
) {
  const profiles = attackerStats.weapons.map((weapon) => {
    const bonus = weaponBonus(weapon, defender);
    const armor = effectiveArmor(defenderStats, weapon);
    const hit = Math.max(1, weapon.damage + bonus - armor);
    return {
      ...weapon,
      bonus,
      armor,
      hit,
      dps: weapon.burst ? 0 : hit / Math.max(TUNING.speedFloor, weapon.speed),
    };
  });

  const sustained = profiles
    .filter((profile) => !profile.burst)
    .sort((a, b) => b.dps - a.dps);
  const bursts = profiles
    .filter((profile) => profile.burst)
    .sort((a, b) => b.hit - a.hit);

  const main = sustained[0] ?? {
    name: "",
    damage: 0,
    bonus: 0,
    armor: 0,
    hit: 0,
    dps: TUNING.emptyWeaponDps,
    range: 0,
    speed: 1,
    type: "melee",
    burst: false,
    modifiers: [],
  };
  return { ...main, burstHit: bursts[0]?.hit ?? 0 };
}

// Profil-Cache je (Angreifer, Verteidiger, Zeitalter): Kandidatenlisten
// berechnen dieselben Paare sehr oft.
const profileCache = new WeakMap();
function weaponProfile(attacker, attackerStats, defender, defenderStats) {
  let byKey = profileCache.get(attacker);
  if (!byKey) {
    byKey = new Map();
    profileCache.set(attacker, byKey);
  }
  const key = `${defender.id}@${attackerStats.age}/${defenderStats.age}`;
  const cached = byKey.get(key);
  if (cached) return cached;
  const profile = computeWeaponProfile(
    attacker,
    attackerStats,
    defender,
    defenderStats,
  );
  byKey.set(key, profile);
  return profile;
}

// ---------------------------------------------------------------------------
// Taktische Faktoren
// ---------------------------------------------------------------------------

function unitCost(stats) {
  return stats.costs.total > 0 ? stats.costs.total : TUNING.costFallback;
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
    if (classes.has("cavalry")) return table.cavalry;
    if (classes.has("infantry")) return table.infantry;
  }
  return 1;
}

function microMultiplier(unit, unitStats, opponent, opponentStats, micro) {
  if (micro !== "stark" && micro !== "solide") return { control: 1, kite: 1 };
  const classes = classSet(unit);
  const opponentClasses = classSet(opponent);
  let control = 1;
  if (classes.has("ranged")) control += MICRO_BONUSES.ranged[micro];
  if (classes.has("cavalry")) control += MICRO_BONUSES.cavalry[micro];
  let kite = 1;
  if (
    classes.has("ranged") &&
    unitStats.movement > opponentStats.movement &&
    !opponentClasses.has("ranged")
  ) {
    kite += MICRO_BONUSES.kite[micro];
  }
  return { control, kite };
}

// Flächenschaden/Spezialprofile lesen daten-getriebene Flags (unit.flags).
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

/**
 * Freier Schaden vor dem ersten Gegenschlag: Reichweitenvorsprung geteilt
 * durch die Laufgeschwindigkeit des Gegners ergibt die Anlaufzeit, in der nur
 * eine Seite schießt. Dazu kommt ein Sturmangriff beim Kontakt.
 */
function openingDamage(weapon, opponentWeapon, opponentStats, micro) {
  const rangeLead = weapon.range - opponentWeapon.range;
  let approachTime = 0;
  let freeDamage = 0;
  if (rangeLead >= TUNING.minRangeLead) {
    const microScale = MICRO_RANGE_SCALE[micro] ?? MICRO_RANGE_SCALE.amove;
    approachTime =
      rangeLead /
      Math.max(TUNING.approachSpeedFloor, opponentStats.movement || 0);
    freeDamage = weapon.dps * approachTime * microScale;
  }
  const burst = weapon.burstHit * TUNING.burstWeight;
  return { rangeLead, approachTime, freeDamage, burst };
}

/**
 * @param {Unit} unit
 * @param {Unit} opponent
 * @param {MatchupSettings} settings
 * @param {number} upgradeDelta
 * @returns {SideStrength}
 */
function sideStrength(unit, opponent, settings, upgradeDelta = 0) {
  const stats = statsAt(unit, settings.age);
  const opponentStats = statsAt(opponent, settings.age);
  const weapon = weaponProfile(unit, stats, opponent, opponentStats);
  const opponentWeapon = weaponProfile(opponent, opponentStats, unit, stats);

  const cost = unitCost(stats);
  const count =
    settings.mode === "resources"
      ? Math.max(TUNING.countFloor, settings.budget / cost)
      : 1;
  const hp = Math.max(TUNING.hpFloor, stats.hp || TUNING.fallbackHp);
  const opponentHp = Math.max(
    TUNING.hpFloor,
    opponentStats.hp || TUNING.fallbackHp,
  );
  const individual = Math.sqrt(Math.max(TUNING.dpsFloor, weapon.dps) * hp);

  const opening = openingDamage(
    weapon,
    opponentWeapon,
    opponentStats,
    settings.micro,
  );
  const openingShare = Math.min(
    TUNING.approachCap,
    ((opening.freeDamage + opening.burst) / opponentHp) * TUNING.approachWeight,
  );
  const micro = microMultiplier(
    unit,
    stats,
    opponent,
    opponentStats,
    settings.micro,
  );

  const factors = {
    focus:
      weapon.bonus > 0
        ? 1 +
          Math.min(
            TUNING.bonusCap,
            (weapon.bonus / Math.max(1, weapon.damage)) * TUNING.bonusWeight,
          )
        : 1,
    approach: 1 + openingShare,
    terrain: terrainMultiplier(unit, settings.terrain),
    micro: micro.control,
    kite: micro.kite,
    splash: splashMultiplier(unit, opponent, settings.mode),
    upgrade: 1 + upgradeDelta * TUNING.upgradeStep,
  };
  const tactical = Object.values(factors).reduce((a, b) => a * b, 1);

  return {
    stats,
    weapon,
    cost,
    count,
    hp,
    individual,
    opening: { ...opening, share: openingShare },
    factors,
    tactical,
    value: individual * count * tactical,
  };
}

// Domänentrennung: nur "marine" gilt als Wasser; alles andere (inkl. fehlender/
// unbekannter Kategorie) wird bewusst als Landeinheit behandelt.
function domain(unit) {
  return unit.category === "marine" ? "water" : "land";
}

// ---------------------------------------------------------------------------
// Verdict
// ---------------------------------------------------------------------------

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

/**
 * @param {number} edge log2(ratio)
 * @param {boolean} sameUnit
 * @param {"de"|"en"} lang
 */
export function verdictForEdge(edge, sameUnit, lang) {
  if (sameUnit) return makeVerdict("mirror", "neutral", lang);
  if (edge >= EDGE_THRESHOLDS.hard)
    return makeVerdict("hard", "positive", lang);
  if (edge >= EDGE_THRESHOLDS.soft)
    return makeVerdict("soft", "positive", lang);
  if (edge > -EDGE_THRESHOLDS.soft)
    return makeVerdict("skill", "neutral", lang);
  if (edge > -EDGE_THRESHOLDS.hard) {
    return makeVerdict("soft-loss", "negative", lang);
  }
  return makeVerdict("hard-loss", "negative", lang);
}

/** Ratio als lesbares „x : 1“ bzw. „1 : x“. */
export function formatRatio(ratio, lang = "de") {
  const format = (value) =>
    new Intl.NumberFormat(lang, {
      maximumFractionDigits: value >= 10 ? 0 : 1,
    }).format(value);
  if (ratio >= 1) return `${format(Math.min(99, ratio))} : 1`;
  return `1 : ${format(Math.min(99, 1 / Math.max(ratio, 1e-6)))}`;
}

// ---------------------------------------------------------------------------
// Begründungen
// ---------------------------------------------------------------------------

function matchupReasons(attacker, defender, a, b, ratio, settings, lang) {
  const L = (de, en) => (lang === "en" ? en : de);
  const nA = unitName(attacker, lang);
  const nD = unitName(defender, lang);
  const percent = (value) => `${Math.round(value * 100)} %`;
  const reasons = [];

  if (a.weapon.bonus > 0) {
    const bonus = Math.round(a.weapon.bonus);
    reasons.push({
      title: L(`+${bonus} Bonusschaden`, `+${bonus} bonus damage`),
      text: L(
        `${nA} trifft gezielt eine Klasse von ${nD}: ${a.weapon.hit} statt ${Math.max(1, a.weapon.damage - a.weapon.armor)} Schaden je Treffer.`,
        `${nA} hits a class ${nD} belongs to: ${a.weapon.hit} instead of ${Math.max(1, a.weapon.damage - a.weapon.armor)} damage per hit.`,
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
  if (
    a.weapon.type === "siege" &&
    b.stats.armor.ranged + b.stats.armor.melee >= 4
  ) {
    reasons.push({
      title: L("Rüstung ignoriert", "Armour ignored"),
      text: L(
        `Belagerungsschaden umgeht die ${b.stats.armor.ranged}/${b.stats.armor.melee} Rüstung von ${nD} komplett.`,
        `Siege damage bypasses ${nD}'s ${b.stats.armor.ranged}/${b.stats.armor.melee} armour entirely.`,
      ),
      good: true,
    });
  }
  if (a.opening.freeDamage > 0 && a.opening.share >= 0.12) {
    reasons.push({
      title: L("Freier Schaden beim Anlaufen", "Free damage on approach"),
      text: L(
        `+${a.opening.rangeLead.toFixed(1)} Felder Reichweite: ${nD} braucht ~${a.opening.approachTime.toFixed(1)} s bis zum Kontakt – das sind ~${Math.round(a.opening.freeDamage)} Schaden (${percent(a.opening.freeDamage / b.hp)} der LP) ohne Gegenwehr.`,
        `+${a.opening.rangeLead.toFixed(1)} tiles of range: ${nD} needs ~${a.opening.approachTime.toFixed(1)} s to close – about ${Math.round(a.opening.freeDamage)} damage (${percent(a.opening.freeDamage / b.hp)} of its HP) without reply.`,
      ),
      good: true,
    });
  } else if (b.opening.freeDamage > 0 && b.opening.share >= 0.12) {
    reasons.push({
      title: L("Reichweitenproblem", "Range problem"),
      text: L(
        `${nA} muss erst ${b.opening.rangeLead.toFixed(1)} Felder überbrücken und verliert dabei ~${percent(b.opening.freeDamage / a.hp)} der LP.`,
        `${nA} first has to close ${b.opening.rangeLead.toFixed(1)} tiles and loses ~${percent(b.opening.freeDamage / a.hp)} of its HP on the way.`,
      ),
      good: false,
    });
  }
  if (a.opening.burst > 0 && a.weapon.burstHit / b.hp >= 0.15) {
    reasons.push({
      title: L("Sturmangriff", "Charge"),
      text: L(
        `Der Anritt von ${nA} trifft beim Kontakt mit ${Math.round(a.weapon.burstHit)} Schaden – ${percent(a.weapon.burstHit / b.hp)} der LP von ${nD}, bevor der Nahkampf beginnt.`,
        `${nA}'s charge lands ${Math.round(a.weapon.burstHit)} damage on contact – ${percent(a.weapon.burstHit / b.hp)} of ${nD}'s HP before the melee starts.`,
      ),
      good: true,
    });
  }
  const costGap = b.cost - a.cost;
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
              `${nA} kostet ${a.cost} statt ${b.cost}; bei ${settings.budget} Ressourcen stehen nur ${a.count.toFixed(1)} gegen ${b.count.toFixed(1)}.`,
              `${nA} costs ${a.cost} instead of ${b.cost}; at ${settings.budget} resources that is only ${a.count.toFixed(1)} vs ${b.count.toFixed(1)}.`,
            ),
      good: costGap > 0,
    });
  }
  if (
    a.weapon.armor >= 4 &&
    a.weapon.armor / Math.max(1, a.weapon.damage) >= 0.3
  ) {
    reasons.push({
      title: L("Rüstung frisst Schaden", "Armour eats damage"),
      text: L(
        `${b.weapon.armor >= a.weapon.armor ? "" : ""}${nD} blockt ${a.weapon.armor} von ${a.weapon.damage + a.weapon.bonus} Schaden je Treffer – es bleiben nur ${a.weapon.hit}.`,
        `${nD} blocks ${a.weapon.armor} of ${a.weapon.damage + a.weapon.bonus} damage per hit – only ${a.weapon.hit} gets through.`,
      ),
      good: false,
    });
  } else if (
    b.weapon.armor >= 4 &&
    b.weapon.armor / Math.max(1, b.weapon.damage) >= 0.3
  ) {
    reasons.push({
      title: L("Rüstungsvorteil", "Armour advantage"),
      text: L(
        `${nA} blockt ${b.weapon.armor} von ${b.weapon.damage + b.weapon.bonus} gegnerischen Schadenspunkten je Treffer.`,
        `${nA} blocks ${b.weapon.armor} of ${b.weapon.damage + b.weapon.bonus} enemy damage per hit.`,
      ),
      good: true,
    });
  }
  if (a.factors.splash > 1) {
    reasons.push({
      title: L("Flächenschaden", "Area damage"),
      text: L(
        `Gegen gruppierte Einheiten trifft jeder Schuss von ${nA} mehrere Ziele.`,
        `Against grouped units every shot from ${nA} hits several targets.`,
      ),
      good: true,
    });
  }
  if (a.factors.kite > 1) {
    reasons.push({
      title: L("Kiting möglich", "Kiting possible"),
      text: L(
        `${nA} ist schneller als ${nD} und kann den Abstand halten.`,
        `${nA} is faster than ${nD} and can keep the distance.`,
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
              `Schaden, Haltbarkeit und Kosten greifen hier besser ineinander: ${a.weapon.dps.toFixed(1)} DPS bei ${a.hp} LP gegen ${b.weapon.dps.toFixed(1)} DPS bei ${b.hp} LP.`,
              `Damage, durability and cost mesh better here: ${a.weapon.dps.toFixed(1)} DPS at ${a.hp} HP versus ${b.weapon.dps.toFixed(1)} DPS at ${b.hp} HP.`,
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
      good: a.factors.terrain >= b.factors.terrain,
    });
  }
  return reasons.slice(0, 3);
}

// ---------------------------------------------------------------------------
// Öffentliche API
// ---------------------------------------------------------------------------

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
  /** @type {MatchupSettings} */
  const merged = { ...DEFAULT_SETTINGS, ...settings };
  if (domain(attacker) !== domain(defender)) {
    return {
      comparable: false,
      verdict: makeVerdict("invalid", "neutral", lang),
      ratio: 1,
      edge: 0,
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
    merged,
    Number(merged.upgrades ?? 0),
  );
  const b = sideStrength(defender, attacker, merged, 0);
  const ratio = a.value / Math.max(TUNING.ratioFloor, b.value);
  const edge = Math.log2(ratio);
  return {
    comparable: true,
    verdict: verdictForEdge(edge, attacker.id === defender.id, lang),
    ratio,
    edge,
    edgeClamped: Math.max(
      -EDGE_DISPLAY_LIMIT,
      Math.min(EDGE_DISPLAY_LIMIT, edge),
    ),
    confidence: Math.min(
      TUNING.confidenceCap,
      Math.round(
        TUNING.confidenceBase + Math.abs(edge) * TUNING.confidenceScale,
      ),
    ),
    attacker: a,
    defender: b,
    reasons: matchupReasons(attacker, defender, a, b, ratio, merged, lang),
  };
}

function isTrainable(unit, settings) {
  const stats = statsAt(unit, settings.age);
  const classes = classSet(unit);
  return (
    unit.minAge <= settings.age &&
    stats.weapons.length > 0 &&
    stats.costs.total > 0 &&
    unit.category !== "support" &&
    !unit.flags?.formation &&
    !classes.has("leader") &&
    !classes.has("hero") &&
    !classes.has("khan")
  );
}

function matchesCiv(unit, civ) {
  return !civ || civ === "all" || unit.civs.includes(civ);
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
  const merged = { ...DEFAULT_SETTINGS, ...settings };
  return allUnits
    .filter(
      (unit) =>
        unit.id !== target.id &&
        domain(unit) === domain(target) &&
        isTrainable(unit, merged) &&
        matchesCiv(unit, merged.civ),
    )
    .map((unit) => ({
      unit,
      result: calculateMatchup(unit, target, merged, lang),
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
  return getCounterCandidates(
    allUnits,
    unit,
    { ...settings, civ: "all" },
    limit,
    lang,
  );
}

function hasExplicitBonusAgainst(stats, classToken) {
  return stats.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some(
        (group) =>
          group.includes(classToken) || group.join("_").includes(classToken),
      ),
    ),
  );
}

function hasMatchingBonus(stats, target) {
  return stats.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some((group) => matchesTargetGroup(target, group)),
    ),
  );
}

function isPreferredTarget(attacker, attackerStats, target) {
  const attackerClasses = classSet(attacker);
  const targetClasses = classSet(target);
  const hasUnitBonus = attackerStats.weapons.some((weapon) =>
    weapon.modifiers.some((modifier) =>
      modifier.groups.some((group) =>
        ["cavalry", "heavy", "infantry", "ranged", "siege"].some((token) =>
          group.includes(token),
        ),
      ),
    ),
  );

  if (hasUnitBonus) return hasMatchingBonus(attackerStats, target);
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
  const merged = { ...DEFAULT_SETTINGS, ...settings, civ: "all" };
  const stats = statsAt(unit, merged.age);
  return allUnits
    .filter(
      (target) =>
        target.id !== unit.id &&
        domain(target) === domain(unit) &&
        isTrainable(target, merged) &&
        isPreferredTarget(unit, stats, target) &&
        (target.category !== "belagerung" ||
          unit.category === "kavallerie" ||
          hasExplicitBonusAgainst(stats, "siege")),
    )
    .map((target) => ({
      unit: target,
      result: calculateMatchup(unit, target, merged, lang),
    }))
    .filter((entry) => entry.result.comparable)
    .sort((a, b) => b.result.ratio - a.result.ratio)
    .slice(0, limit);
}

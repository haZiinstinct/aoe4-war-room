import { roleLabel, unitName } from "../data/localization.js";

const FORMATION_IDS = new Set([
  "earls-retinue",
  "garrison-command",
  "gunpowder-contingent",
  "wynguard-army",
  "wynguard-footmen",
  "wynguard-raiders",
  "wynguard-rangers",
]);

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

function weaponProfile(attacker, defender) {
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
      dps: hit / Math.max(0.5, weapon.speed),
    };
  });

  return (
    profiles.sort((a, b) => b.dps - a.dps)[0] ?? {
      damage: 0,
      bonus: 0,
      armor: 0,
      dps: 0.05,
      range: 0,
      speed: 1,
      type: "melee",
      modifiers: [],
    }
  );
}

function unitCost(unit) {
  return unit.costs.total > 0 ? unit.costs.total : 180;
}

function terrainMultiplier(unit, terrain) {
  const classes = classSet(unit);
  if (terrain === "engpass") {
    if (unit.category === "belagerung") return 1.12;
    if (classes.has("ranged")) return 1.08;
    if (classes.has("cavalry")) return 0.88;
  }
  if (terrain === "offen") {
    if (classes.has("cavalry")) return 1.08;
    if (classes.has("ranged")) return 1.04;
  }
  if (terrain === "wald") {
    if (classes.has("ranged")) return 0.93;
    if (classes.has("infantry")) return 1.05;
  }
  return 1;
}

function microMultiplier(unit, opponent, micro) {
  if (micro === "amove") return 1;
  const classes = classSet(unit);
  const opponentClasses = classSet(opponent);
  let multiplier = 1;
  if (classes.has("ranged")) multiplier += micro === "stark" ? 0.14 : 0.07;
  if (classes.has("cavalry")) multiplier += micro === "stark" ? 0.08 : 0.04;
  if (
    classes.has("ranged") &&
    unit.movement > opponent.movement &&
    !opponentClasses.has("ranged")
  ) {
    multiplier += micro === "stark" ? 0.1 : 0.04;
  }
  return multiplier;
}

function splashMultiplier(attacker, defender, mode) {
  if (mode !== "resources") return 1;
  const defenderClasses = classSet(defender);
  const splashIds =
    /mangonel|ribauldequin|nest-of-bees|great-bombard|huihui|ozutsu|cheirosiphon|eruptor/;
  if (
    splashIds.test(attacker.id) &&
    (defenderClasses.has("infantry") || defenderClasses.has("ranged"))
  ) {
    return 1.22;
  }
  if (
    /landsknecht|varangian|zhanma/.test(attacker.id) &&
    defenderClasses.has("infantry")
  ) {
    return 1.8;
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
  if (/landsknecht|varangian|zhanma/.test(attacker.id))
    return targetClasses.has("infantry");
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
      ? Math.max(0.35, settings.budget / unitCost(unit))
      : 1;
  const hp = Math.max(20, unit.hp || 75);
  const individual = Math.sqrt(Math.max(0.05, weapon.dps) * hp);

  let tactical = 1;
  // In AoE IV, explicit class bonuses are not merely extra raw DPS: they define
  // the production answer and scale with focus fire. Weight that specialization
  // separately so natural counters remain visible beside expensive raw stats.
  if (weapon.bonus > 0) {
    tactical *=
      1 + Math.min(1.6, (weapon.bonus / Math.max(1, weapon.damage)) * 1.4);
  }
  const rangeLead = weapon.range - opponentWeapon.range;
  if (rangeLead > 0) {
    const microScale =
      settings.micro === "stark"
        ? 1.25
        : settings.micro === "solide"
          ? 1
          : 0.45;
    tactical *= 1 + Math.min(0.22, rangeLead * 0.025 * microScale);
  }
  tactical *= terrainMultiplier(unit, settings.terrain);
  tactical *= microMultiplier(unit, opponent, settings.micro);
  tactical *= splashMultiplier(unit, opponent, settings.mode);
  tactical *= 1 + upgradeDelta * 0.075;

  return {
    weapon,
    count,
    value: individual * count * tactical,
    tactical,
  };
}

function domain(unit) {
  return unit.category === "marine" ? "water" : "land";
}

function verdict(ratio, sameUnit) {
  if (sameUnit) {
    return {
      key: "mirror",
      label: "Spiegelmatchup",
      short: "Gleichstand",
      tone: "neutral",
    };
  }
  if (ratio >= 1.52)
    return {
      key: "hard",
      label: "Klarer Counter",
      short: "Stark",
      tone: "positive",
    };
  if (ratio >= 1.16)
    return {
      key: "soft",
      label: "Leichter Vorteil",
      short: "Vorteil",
      tone: "positive",
    };
  if (ratio > 0.86)
    return {
      key: "skill",
      label: "Skill-Matchup",
      short: "Situativ",
      tone: "neutral",
    };
  if (ratio > 0.66)
    return {
      key: "soft-loss",
      label: "Leichter Nachteil",
      short: "Nachteil",
      tone: "negative",
    };
  return {
    key: "hard-loss",
    label: "Harter Nachteil",
    short: "Schwach",
    tone: "negative",
  };
}

function matchupReasons(attacker, defender, a, b, ratio, settings) {
  const reasons = [];
  if (a.weapon.bonus > 0) {
    reasons.push({
      title: `+${Math.round(a.weapon.bonus)} Bonusschaden`,
      text: `${unitName(attacker)} trifft gezielt eine Klasse von ${unitName(defender)}.`,
      good: true,
    });
  }
  if (b.weapon.bonus > 0) {
    reasons.push({
      title: `Gegner hat +${Math.round(b.weapon.bonus)}`,
      text: `${unitName(defender)} besitzt passenden Bonusschaden gegen ${roleLabel(attacker).toLowerCase()}.`,
      good: false,
    });
  }
  if (a.weapon.range - b.weapon.range >= 2) {
    reasons.push({
      title: "Sicherer Abstand",
      text: `+${(a.weapon.range - b.weapon.range).toFixed(1)} Felder Reichweite – nur wertvoll, wenn du den Abstand hältst.`,
      good: true,
    });
  } else if (b.weapon.range - a.weapon.range >= 2) {
    reasons.push({
      title: "Reichweitenproblem",
      text: `${unitName(attacker)} muss erst ${(
        b.weapon.range - a.weapon.range
      ).toFixed(1)} Felder überbrücken.`,
      good: false,
    });
  }
  const costGap = unitCost(defender) - unitCost(attacker);
  if (settings.mode === "resources" && Math.abs(costGap) >= 45) {
    reasons.push({
      title: costGap > 0 ? "Mehr Körper fürs Budget" : "Teure Antwort",
      text:
        costGap > 0
          ? `Bei ${settings.budget} Ressourcen stehen ungefähr ${a.count.toFixed(1)} gegen ${b.count.toFixed(1)} Einheiten.`
          : `${unitName(attacker)} kostet deutlich mehr; jeder Verlust tut weh.`,
      good: costGap > 0,
    });
  }
  if (
    attacker.armor.melee + attacker.armor.ranged >=
    defender.armor.melee + defender.armor.ranged + 5
  ) {
    reasons.push({
      title: "Rüstungsvorteil",
      text: `${unitName(attacker)} kann Grundschaden besser abfangen.`,
      good: true,
    });
  }
  if (reasons.length < 2) {
    reasons.push({
      title: ratio > 1 ? "Besseres Gesamtpaket" : "Kein natürlicher Counter",
      text:
        ratio > 1
          ? "Schaden, Haltbarkeit und Kosten greifen in diesem Szenario besser ineinander."
          : "Ohne Klassenbonus entscheiden Support, Zahl, Position und Fokusfeuer.",
      good: ratio > 1,
    });
  }
  if (reasons.length < 3) {
    const terrainText = {
      offen: "Offenes Feld gibt mobilen Einheiten und Kiting mehr Raum.",
      engpass: "Im Engpass zählen Frontbreite und Flächenschaden stärker.",
      wald: "Waldwege verkürzen Sichtlinien und bremsen breite Formationen.",
    };
    reasons.push({
      title: "Gelände & Ausführung",
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

export function calculateMatchup(
  attacker,
  defender,
  settings = DEFAULT_SETTINGS,
) {
  if (!attacker || !defender) return null;
  if (domain(attacker) !== domain(defender)) {
    return {
      comparable: false,
      verdict: {
        key: "invalid",
        label: "Nicht vergleichbar",
        short: "Andere Domäne",
        tone: "neutral",
      },
      ratio: 1,
      confidence: 0,
      reasons: [
        {
          title: "Land und Wasser getrennt",
          text: "Marineeinheiten werden nur mit Marineeinheiten bewertet.",
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
  const ratio = a.value / Math.max(0.01, b.value);
  const resultVerdict = verdict(ratio, attacker.id === defender.id);
  return {
    comparable: true,
    verdict: resultVerdict,
    ratio,
    confidence: Math.min(96, Math.round(56 + Math.abs(Math.log2(ratio)) * 24)),
    attacker: a,
    defender: b,
    reasons: matchupReasons(attacker, defender, a, b, ratio, settings),
  };
}

export function getCounterCandidates(
  allUnits,
  target,
  settings = DEFAULT_SETTINGS,
  limit = 5,
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
        !FORMATION_IDS.has(unit.id),
    )
    .map((unit) => ({
      unit,
      result: calculateMatchup(unit, target, settings),
    }))
    .filter((entry) => entry.result.comparable)
    .sort((a, b) => b.result.ratio - a.result.ratio)
    .slice(0, limit);
}

export function getThreats(
  allUnits,
  unit,
  settings = DEFAULT_SETTINGS,
  limit = 4,
) {
  return getCounterCandidates(allUnits, unit, settings, limit);
}

export function getFavoredTargets(
  allUnits,
  unit,
  settings = DEFAULT_SETTINGS,
  limit = 4,
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
        !FORMATION_IDS.has(target.id),
    )
    .map((target) => ({
      unit: target,
      result: calculateMatchup(unit, target, settings),
    }))
    .filter((entry) => entry.result.comparable)
    .sort((a, b) => b.result.ratio - a.result.ratio)
    .slice(0, limit);
}

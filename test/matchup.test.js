import { describe, expect, it } from "vitest";
import { units } from "../src/data/units.generated.js";
import { EDGE_THRESHOLDS } from "../src/lib/matchup.config.js";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  formatRatio,
  getCounterCandidates,
  getFavoredTargets,
  getThreats,
  primaryWeapon,
  statsAt,
} from "../src/lib/matchup.js";

const byId = (id) => {
  const unit = units.find((u) => u.id === id);
  if (!unit) throw new Error(`Einheit fehlt im Datensatz: ${id}`);
  return unit;
};

// --- Synthetische Einheiten für kontrollierte Logik-Tests -------------------
let syntheticCounter = 0;
function makeWeapon(overrides = {}) {
  return {
    name: "Blade",
    type: "melee",
    damage: 10,
    speed: 1,
    range: 0,
    burst: false,
    modifiers: [],
    ...overrides,
  };
}
function makeUnit(overrides = {}) {
  syntheticCounter += 1;
  const base = {
    hp: 100,
    armor: { melee: 0, ranged: 0 },
    movement: 1,
    costs: {
      food: 100,
      wood: 0,
      gold: 0,
      stone: 0,
      oliveoil: 0,
      total: 100,
      popcap: 1,
      time: 10,
    },
    weapons: [makeWeapon()],
  };
  const merged = { ...base, ...overrides };
  return {
    id: `synthetic-${syntheticCounter}`,
    name: `Synthetic ${syntheticCounter}`,
    unique: false,
    civs: ["en"],
    minAge: 1,
    icon: "",
    description: "",
    displayClasses: [],
    classes: ["infantry", "melee", "military"],
    category: "infanterie",
    flags: { splash: false, antiInfantryMelee: false, formation: false },
    ...merged,
    ages: overrides.ages ?? {
      1: {
        hp: merged.hp,
        armor: merged.armor,
        movement: merged.movement,
        costs: merged.costs,
        weapons: merged.weapons,
      },
    },
  };
}

const COUNT = { ...DEFAULT_SETTINGS, mode: "count" };

describe("natürliche Kern-Counter (echte Daten, Ressourcen-Vergleich)", () => {
  const naturalCounters = [
    ["archer", "spearman"],
    ["spearman", "horseman"],
    ["spearman", "knight"],
    ["horseman", "archer"],
    ["horseman", "crossbowman"],
    ["crossbowman", "man-at-arms"],
    ["crossbowman", "knight"],
    ["springald", "mangonel"],
    ["camel-rider", "knight"],
  ];

  it.each(naturalCounters)("%s schlägt %s", (attackerId, defenderId) => {
    const result = calculateMatchup(byId(attackerId), byId(defenderId));
    expect(result.comparable).toBe(true);
    expect(result.ratio).toBeGreaterThan(1.2);
    expect(["hard", "soft"]).toContain(result.verdict.key);
  });

  it("Kern-Counter sind in jedem Zeitalter stabil", () => {
    for (const age of [2, 3, 4]) {
      for (const [a, b] of [
        ["spearman", "horseman"],
        ["horseman", "archer"],
        ["archer", "spearman"],
      ]) {
        const r = calculateMatchup(byId(a), byId(b), {
          ...DEFAULT_SETTINGS,
          age,
        });
        expect(r.ratio, `${a} vs ${b} in Zeitalter ${age}`).toBeGreaterThan(
          1.2,
        );
      }
    }
  });

  it("Ergebnis ist antisymmetrisch (edge(a,b) = -edge(b,a))", () => {
    const ab = calculateMatchup(byId("archer"), byId("spearman"));
    const ba = calculateMatchup(byId("spearman"), byId("archer"));
    expect(ab.edge).toBeCloseTo(-ba.edge, 6);
  });
});

describe("Zeitalter-Varianten", () => {
  it("statsAt liefert die passende Variante", () => {
    const archer = byId("archer");
    expect(statsAt(archer, 2).hp).toBe(70);
    expect(statsAt(archer, 4).hp).toBe(95);
    // Zwischen-Zeitalter ohne eigene Variante → höchste verfügbare darunter.
    const mangonel = byId("mangonel");
    expect(statsAt(mangonel, 4).age).toBe(3);
    // Unter dem Mindest-Zeitalter → früheste Variante (statt Absturz).
    expect(statsAt(byId("handcannoneer"), 1).age).toBe(3);
  });

  it("Basiswerte entsprechen der frühesten bewaffneten Variante", () => {
    for (const unit of units) {
      const keys = Object.keys(unit.ages)
        .map(Number)
        .sort((a, b) => a - b);
      if (!keys.length) continue;
      const baseAge =
        keys.find((age) => unit.ages[age].weapons.length) ?? keys[0];
      expect(unit.hp, unit.id).toBe(unit.ages[baseAge].hp);
      expect(statsAt(unit, baseAge).age).toBe(baseAge);
    }
  });

  it("primaryWeapon ignoriert Sturmangriffe", () => {
    const elephant = byId("war-elephant");
    expect(primaryWeapon(statsAt(elephant, 3)).burst).toBe(false);
  });
});

describe("Domänentrennung", () => {
  it("Land vs. Marine ist nicht vergleichbar", () => {
    const result = calculateMatchup(byId("spearman"), byId("galley"));
    expect(result.comparable).toBe(false);
    expect(result.edge).toBe(0);
  });

  it("gleiche Domäne ist vergleichbar", () => {
    const result = calculateMatchup(byId("spearman"), byId("archer"));
    expect(result.comparable).toBe(true);
  });
});

describe("verdict-Schwellen (synthetisch)", () => {
  const withDamage = (damage) =>
    makeUnit({ weapons: [makeWeapon({ damage })] });

  it("Spiegelmatchup bei identischer Einheit", () => {
    const u = makeUnit();
    expect(calculateMatchup(u, u, COUNT).verdict.key).toBe("mirror");
  });

  it("klarer Counter bei deutlich höherem Wert", () => {
    const r = calculateMatchup(withDamage(10), withDamage(3), COUNT);
    expect(r.edge).toBeGreaterThanOrEqual(EDGE_THRESHOLDS.hard);
    expect(r.verdict.key).toBe("hard");
  });

  it("leichter Vorteil im Zwischenbereich", () => {
    const r = calculateMatchup(withDamage(10), withDamage(6), COUNT);
    expect(r.verdict.key).toBe("soft");
  });

  it("neutrales Skill-Matchup bei ähnlichem Wert", () => {
    const r = calculateMatchup(withDamage(10), withDamage(9), COUNT);
    expect(r.verdict.key).toBe("skill");
  });

  it("harter Nachteil bei deutlich niedrigerem Wert", () => {
    const r = calculateMatchup(withDamage(3), withDamage(10), COUNT);
    expect(r.verdict.key).toBe("hard-loss");
  });

  it("Ratio-Format ist lesbar", () => {
    expect(formatRatio(2.49, "en")).toBe("2.5 : 1");
    expect(formatRatio(0.5, "en")).toBe("1 : 2");
    expect(formatRatio(500, "en")).toBe("99 : 1");
  });
});

describe("Waffenprofil: Bonusschaden, Rüstung, Belagerung, Sturmangriff", () => {
  it("passender Klassenbonus erhöht den Vorteil", () => {
    const target = makeUnit({ classes: ["infantry", "military"] });
    const plain = makeUnit();
    const withBonus = makeUnit({
      weapons: [
        makeWeapon({ modifiers: [{ value: 10, groups: [["infantry"]] }] }),
      ],
    });
    const plainRatio = calculateMatchup(plain, target, COUNT).ratio;
    const bonusRatio = calculateMatchup(withBonus, target, COUNT).ratio;
    expect(bonusRatio).toBeGreaterThan(plainRatio);
  });

  it("Mehrwort-Bonusgruppen treffen Verbund-Klassen", () => {
    const target = makeUnit({ classes: ["light_melee_infantry", "military"] });
    const archer = makeUnit({
      weapons: [
        makeWeapon({
          type: "ranged",
          modifiers: [{ value: 10, groups: [["light", "melee", "infantry"]] }],
        }),
      ],
    });
    expect(calculateMatchup(archer, target, COUNT).attacker.weapon.bonus).toBe(
      10,
    );
  });

  it("Rüstung des Ziels senkt den effektiven Schaden", () => {
    const soft = makeUnit({ armor: { melee: 0, ranged: 0 } });
    const armored = makeUnit({ armor: { melee: 5, ranged: 0 } });
    const attacker = makeUnit();
    const vsSoft = calculateMatchup(attacker, soft, COUNT).ratio;
    const vsArmored = calculateMatchup(attacker, armored, COUNT).ratio;
    expect(vsArmored).toBeLessThan(vsSoft);
  });

  it("Belagerungsschaden ignoriert Rüstung", () => {
    const armored = makeUnit({ armor: { melee: 8, ranged: 8 } });
    const siege = makeUnit({
      weapons: [makeWeapon({ type: "siege", damage: 10 })],
    });
    const ranged = makeUnit({
      weapons: [makeWeapon({ type: "ranged", damage: 10 })],
    });
    const siegeHit = calculateMatchup(siege, armored, COUNT).attacker.weapon;
    const rangedHit = calculateMatchup(ranged, armored, COUNT).attacker.weapon;
    expect(siegeHit.armor).toBe(0);
    expect(siegeHit.hit).toBe(10);
    expect(rangedHit.hit).toBe(2);
  });

  it("Grundschaden fällt nie unter 1", () => {
    const heavilyArmored = makeUnit({ armor: { melee: 999, ranged: 0 } });
    const attacker = makeUnit();
    const r = calculateMatchup(attacker, heavilyArmored, COUNT);
    expect(r.attacker.weapon.hit).toBe(1);
    expect(Number.isFinite(r.ratio)).toBe(true);
    expect(r.ratio).toBeGreaterThan(0);
  });

  it("Sturmangriff zählt als Eröffnungsschaden, nicht als DPS", () => {
    const target = makeUnit();
    const charger = makeUnit({
      weapons: [
        makeWeapon({ damage: 10 }),
        makeWeapon({ name: "Charge", damage: 60, speed: 0.5, burst: true }),
      ],
    });
    const plain = makeUnit({ weapons: [makeWeapon({ damage: 10 })] });
    const withCharge = calculateMatchup(charger, target, COUNT);
    const without = calculateMatchup(plain, target, COUNT);
    expect(withCharge.attacker.weapon.dps).toBeCloseTo(
      without.attacker.weapon.dps,
      6,
    );
    expect(withCharge.attacker.weapon.burstHit).toBe(60);
    expect(withCharge.ratio).toBeGreaterThan(without.ratio);
  });
});

describe("Anlaufen, Gelände, Micro, Splash, Upgrades", () => {
  const rangedUnit = (range) =>
    makeUnit({
      classes: ["ranged", "military"],
      category: "fernkampf",
      weapons: [makeWeapon({ type: "ranged", damage: 8, range })],
    });

  it("Reichweitenvorsprung erzeugt freien Schaden proportional zur Anlaufzeit", () => {
    const slowTarget = makeUnit({ movement: 1 });
    const fastTarget = makeUnit({ movement: 2 });
    const archer = rangedUnit(6);
    const vsSlow = calculateMatchup(archer, slowTarget, COUNT).attacker.opening;
    const vsFast = calculateMatchup(archer, fastTarget, COUNT).attacker.opening;
    expect(vsSlow.approachTime).toBeCloseTo(6, 6);
    expect(vsFast.approachTime).toBeCloseTo(3, 6);
    expect(vsSlow.freeDamage).toBeGreaterThan(vsFast.freeDamage);
    expect(calculateMatchup(archer, slowTarget, COUNT).ratio).toBeGreaterThan(
      calculateMatchup(archer, fastTarget, COUNT).ratio,
    );
  });

  it("A-Move verschenkt den Großteil des freien Schadens", () => {
    const target = makeUnit();
    const archer = rangedUnit(6);
    const strong = calculateMatchup(archer, target, {
      ...COUNT,
      micro: "stark",
    });
    const amove = calculateMatchup(archer, target, {
      ...COUNT,
      micro: "amove",
    });
    expect(strong.attacker.opening.freeDamage).toBeGreaterThan(
      amove.attacker.opening.freeDamage * 2,
    );
    expect(strong.ratio).toBeGreaterThan(amove.ratio);
  });

  it("offenes Feld begünstigt Kavallerie gegenüber Engpass", () => {
    const cav = makeUnit({
      classes: ["cavalry", "melee", "military"],
      category: "kavallerie",
    });
    const target = makeUnit();
    const open = calculateMatchup(cav, target, { ...COUNT, terrain: "offen" });
    const choke = calculateMatchup(cav, target, {
      ...COUNT,
      terrain: "engpass",
    });
    expect(open.ratio).toBeGreaterThan(choke.ratio);
  });

  it("Splash-Flag hilft nur im Ressourcen-Vergleich gegen Infanterie", () => {
    const splashy = makeUnit({
      category: "belagerung",
      classes: ["siege", "military"],
      flags: { splash: true, antiInfantryMelee: false, formation: false },
    });
    const plain = makeUnit({
      category: "belagerung",
      classes: ["siege", "military"],
    });
    const target = makeUnit({ classes: ["infantry", "military"] });
    const resources = { ...DEFAULT_SETTINGS, mode: "resources" };
    expect(calculateMatchup(splashy, target, resources).ratio).toBeGreaterThan(
      calculateMatchup(plain, target, resources).ratio,
    );
    expect(calculateMatchup(splashy, target, COUNT).ratio).toBeCloseTo(
      calculateMatchup(plain, target, COUNT).ratio,
      6,
    );
  });

  it("Upgrade-Vorteil erhöht den Score sichtbar", () => {
    const up = calculateMatchup(byId("crossbowman"), byId("man-at-arms"), {
      ...DEFAULT_SETTINGS,
      upgrades: 2,
    });
    const down = calculateMatchup(byId("crossbowman"), byId("man-at-arms"), {
      ...DEFAULT_SETTINGS,
      upgrades: -2,
    });
    expect(up.ratio).toBeGreaterThan(down.ratio);
  });

  it("Ressourcen-Vergleich belohnt günstige Masse", () => {
    const cheap = makeUnit({
      costs: { ...makeUnit().costs, total: 50 },
    });
    const pricey = makeUnit({
      costs: { ...makeUnit().costs, total: 200 },
    });
    const resources = { ...DEFAULT_SETTINGS, mode: "resources", budget: 600 };
    const r = calculateMatchup(cheap, pricey, resources);
    expect(r.attacker.count).toBeCloseTo(12, 6);
    expect(r.defender.count).toBeCloseTo(3, 6);
    expect(r.ratio).toBeCloseTo(4, 6);
  });
});

describe("Settings-Guard", () => {
  it("füllt fehlende Felder mit Defaults (kein NaN)", () => {
    const r = calculateMatchup(byId("archer"), byId("spearman"), {
      upgrades: 1,
    });
    expect(Number.isFinite(r.ratio)).toBe(true);
    expect(Number.isFinite(r.edge)).toBe(true);
    expect(r.confidence).toBeGreaterThanOrEqual(50);
    expect(r.confidence).toBeLessThanOrEqual(95);
  });

  it("jedes Paar liefert endliche Werte und maximal drei Gründe", () => {
    const sample = units.filter((_, index) => index % 7 === 0);
    for (const a of sample) {
      for (const b of sample) {
        const r = calculateMatchup(a, b);
        expect(Number.isFinite(r.ratio), `${a.id} vs ${b.id}`).toBe(true);
        expect(r.reasons.length).toBeLessThanOrEqual(3);
        expect(r.reasons.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Counter-Kandidaten", () => {
  it("liefert die angeforderte Anzahl, absteigend sortiert, ohne Support/Helden", () => {
    const candidates = getCounterCandidates(
      units,
      byId("man-at-arms"),
      DEFAULT_SETTINGS,
      8,
    );
    expect(candidates).toHaveLength(8);
    expect(candidates.every((c) => c.unit.category !== "support")).toBe(true);
    expect(candidates.every((c) => !c.unit.flags.formation)).toBe(true);
    expect(
      candidates.every(
        (c) =>
          !c.unit.classes.includes("leader") &&
          !c.unit.classes.includes("khan"),
      ),
    ).toBe(true);
    for (let i = 1; i < candidates.length; i += 1) {
      expect(candidates[i - 1].result.ratio).toBeGreaterThanOrEqual(
        candidates[i].result.ratio,
      );
    }
  });

  it("Civ-Filter beschränkt Vorschläge auf baubare Einheiten", () => {
    const english = getCounterCandidates(
      units,
      byId("knight"),
      { ...DEFAULT_SETTINGS, civ: "en" },
      6,
    );
    expect(english.length).toBeGreaterThan(0);
    expect(english.every((c) => c.unit.civs.includes("en"))).toBe(true);
  });

  it("Zeitalter-Filter schließt spätere Einheiten aus", () => {
    const feudal = getCounterCandidates(
      units,
      byId("archer"),
      { ...DEFAULT_SETTINGS, age: 2 },
      20,
    );
    expect(feudal.every((c) => c.unit.minAge <= 2)).toBe(true);
  });

  it("getThreats und getFavoredTargets liefern vergleichbare Ergebnisse", () => {
    const threats = getThreats(units, byId("archer"), DEFAULT_SETTINGS, 4);
    const favored = getFavoredTargets(
      units,
      byId("archer"),
      DEFAULT_SETTINGS,
      4,
    );
    expect(threats.length).toBeGreaterThan(0);
    expect(favored.length).toBeGreaterThan(0);
    expect(threats.every((t) => t.result.comparable)).toBe(true);
    expect(favored.every((t) => t.result.comparable)).toBe(true);
  });
});

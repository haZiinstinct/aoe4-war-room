import { describe, expect, it } from "vitest";
import { units } from "../src/data/units.generated.js";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  getCounterCandidates,
  getFavoredTargets,
  getThreats,
} from "../src/lib/matchup.js";

const byId = (id) => {
  const unit = units.find((u) => u.id === id);
  if (!unit) throw new Error(`Einheit fehlt im Datensatz: ${id}`);
  return unit;
};

// --- Synthetische Einheiten für kontrollierte Logik-Tests -------------------
let syntheticCounter = 0;
function makeUnit(overrides = {}) {
  syntheticCounter += 1;
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
    weapons: [
      {
        name: "Blade",
        type: "melee",
        damage: 10,
        speed: 1,
        range: 0,
        modifiers: [],
      },
    ],
    flags: { splash: false, antiInfantryMelee: false, formation: false },
    ...overrides,
  };
}

const COUNT = { ...DEFAULT_SETTINGS, mode: "count" };

describe("natürliche Kern-Counter (echte Daten)", () => {
  const naturalCounters = [
    ["archer", "spearman"],
    ["spearman", "horseman"],
    ["horseman", "archer"],
    ["crossbowman", "man-at-arms"],
  ];

  it.each(naturalCounters)("%s schlägt %s", (attackerId, defenderId) => {
    const result = calculateMatchup(byId(attackerId), byId(defenderId));
    expect(result.comparable).toBe(true);
    expect(result.ratio).toBeGreaterThan(1.15);
  });
});

describe("Domänentrennung", () => {
  it("Land vs. Marine ist nicht vergleichbar", () => {
    const result = calculateMatchup(byId("spearman"), byId("galley"));
    expect(result.comparable).toBe(false);
  });

  it("gleiche Domäne ist vergleichbar", () => {
    const result = calculateMatchup(byId("spearman"), byId("archer"));
    expect(result.comparable).toBe(true);
  });
});

describe("verdict-Schwellen (synthetisch)", () => {
  const base = () => makeUnit();
  const withDamage = (damage) =>
    makeUnit({
      weapons: [
        { name: "B", type: "melee", damage, speed: 1, range: 0, modifiers: [] },
      ],
    });

  it("Spiegelmatchup bei identischer Einheit", () => {
    const u = base();
    expect(calculateMatchup(u, u, COUNT).verdict.key).toBe("mirror");
  });

  it("klarer Counter bei deutlich höherem Wert", () => {
    const r = calculateMatchup(withDamage(10), withDamage(4), COUNT);
    expect(r.ratio).toBeGreaterThanOrEqual(1.52);
    expect(r.verdict.key).toBe("hard");
  });

  it("leichter Vorteil im Zwischenbereich", () => {
    const r = calculateMatchup(withDamage(10), withDamage(7), COUNT);
    expect(r.verdict.key).toBe("soft");
  });

  it("neutrales Skill-Matchup bei ähnlichem Wert", () => {
    const r = calculateMatchup(withDamage(10), withDamage(9), COUNT);
    expect(r.verdict.key).toBe("skill");
  });

  it("harter Nachteil bei deutlich niedrigerem Wert", () => {
    const r = calculateMatchup(withDamage(4), withDamage(10), COUNT);
    expect(r.verdict.key).toBe("hard-loss");
  });
});

describe("Waffenprofil: Bonusschaden & Rüstung", () => {
  it("passender Klassenbonus erhöht den Vorteil", () => {
    const target = makeUnit({ classes: ["infantry", "military"] });
    const plain = makeUnit();
    const withBonus = makeUnit({
      weapons: [
        {
          name: "B",
          type: "melee",
          damage: 10,
          speed: 1,
          range: 0,
          modifiers: [{ value: 10, groups: [["infantry"]] }],
        },
      ],
    });
    const plainRatio = calculateMatchup(plain, target, COUNT).ratio;
    const bonusRatio = calculateMatchup(withBonus, target, COUNT).ratio;
    expect(bonusRatio).toBeGreaterThan(plainRatio);
  });

  it("Rüstung des Ziels senkt den effektiven Schaden", () => {
    const soft = makeUnit({ armor: { melee: 0, ranged: 0 } });
    const armored = makeUnit({ armor: { melee: 5, ranged: 0 } });
    const attacker = makeUnit();
    const vsSoft = calculateMatchup(attacker, soft, COUNT).ratio;
    const vsArmored = calculateMatchup(attacker, armored, COUNT).ratio;
    expect(vsArmored).toBeLessThan(vsSoft);
  });

  it("Grundschaden fällt nie unter 1", () => {
    const heavilyArmored = makeUnit({ armor: { melee: 999, ranged: 0 } });
    const attacker = makeUnit();
    const r = calculateMatchup(attacker, heavilyArmored, COUNT);
    expect(Number.isFinite(r.ratio)).toBe(true);
    expect(r.ratio).toBeGreaterThan(0);
  });
});

describe("Gelände-, Micro- und Splash-Effekte", () => {
  it("offenes Feld begünstigt Kavallerie gegenüber Engpass", () => {
    const cav = makeUnit({
      classes: ["cavalry", "melee", "military"],
      category: "kavallerie",
    });
    const target = makeUnit();
    const open = calculateMatchup(cav, target, {
      ...COUNT,
      terrain: "offen",
    }).ratio;
    const choke = calculateMatchup(cav, target, {
      ...COUNT,
      terrain: "engpass",
    }).ratio;
    expect(open).toBeGreaterThan(choke);
  });

  it("starkes Micro hebt Fernkampf gegenüber A-Move", () => {
    const ranged = makeUnit({
      classes: ["ranged", "military"],
      category: "fernkampf",
      weapons: [
        {
          name: "Bow",
          type: "ranged",
          damage: 8,
          speed: 1,
          range: 5,
          modifiers: [],
        },
      ],
    });
    const target = makeUnit();
    const strong = calculateMatchup(ranged, target, {
      ...COUNT,
      micro: "stark",
    }).ratio;
    const amove = calculateMatchup(ranged, target, {
      ...COUNT,
      micro: "amove",
    }).ratio;
    expect(strong).toBeGreaterThan(amove);
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
    const withSplash = calculateMatchup(splashy, target, resources).ratio;
    const withoutSplash = calculateMatchup(plain, target, resources).ratio;
    expect(withSplash).toBeGreaterThan(withoutSplash);
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
});

describe("Settings-Guard", () => {
  it("füllt fehlende Felder mit Defaults (kein NaN)", () => {
    const r = calculateMatchup(byId("archer"), byId("spearman"), {
      upgrades: 1,
    });
    expect(Number.isFinite(r.ratio)).toBe(true);
  });
});

describe("Counter-Kandidaten", () => {
  it("liefert die angeforderte Anzahl, absteigend sortiert, ohne Support", () => {
    const candidates = getCounterCandidates(
      units,
      byId("man-at-arms"),
      DEFAULT_SETTINGS,
      8,
    );
    expect(candidates).toHaveLength(8);
    expect(candidates.every((c) => c.unit.category !== "support")).toBe(true);
    expect(candidates.every((c) => !c.unit.flags.formation)).toBe(true);
    for (let i = 1; i < candidates.length; i += 1) {
      expect(candidates[i - 1].result.ratio).toBeGreaterThanOrEqual(
        candidates[i].result.ratio,
      );
    }
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

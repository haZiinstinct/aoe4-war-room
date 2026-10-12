import { describe, expect, it } from "vitest";
import { civilizations, units } from "../src/data/units.generated.js";

const CATEGORIES = new Set([
  "infanterie",
  "kavallerie",
  "fernkampf",
  "belagerung",
  "marine",
  "support",
  "sonstige",
]);

describe("Datensatz-Integrität", () => {
  it("erwartete Kardinalität", () => {
    expect(units.length).toBe(205);
    expect(civilizations.length).toBe(23);
  });

  it("jede Einheit hat konsistente Flags", () => {
    for (const unit of units) {
      expect(unit.flags, `flags fehlen bei ${unit.id}`).toBeTruthy();
      expect(typeof unit.flags.splash).toBe("boolean");
      expect(typeof unit.flags.antiInfantryMelee).toBe("boolean");
      expect(typeof unit.flags.formation).toBe("boolean");
    }
  });

  it("jede Einheit hat eine bekannte Kategorie", () => {
    for (const unit of units) {
      expect(
        CATEGORIES.has(unit.category),
        `${unit.id}: ${unit.category}`,
      ).toBe(true);
    }
  });

  it("waffenlose Einheiten sind nur Support, Formation oder Belagerung", () => {
    // Kampfeinheiten (Infanterie/Kavallerie/Fernkampf) müssen bewaffnet sein.
    // Waffenlos sind legitim: Support, Formations-Einheiten und Siege-Geräte
    // ohne Angriff (z. B. siege-tower als Transport).
    for (const unit of units) {
      const armed = unit.weapons.length > 0;
      const excused =
        unit.category === "support" ||
        unit.category === "belagerung" ||
        unit.flags.formation;
      expect(armed || excused, `${unit.id} (${unit.category}) waffenlos`).toBe(
        true,
      );
    }
  });

  it("jede Einheit hat Zeitalter-Varianten mit konsistenter Form", () => {
    for (const unit of units) {
      const ages = Object.keys(unit.ages ?? {}).map(Number);
      expect(ages.length, `${unit.id} ohne Zeitalter-Variante`).toBeGreaterThan(
        0,
      );
      for (const age of ages) {
        const variant = unit.ages[age];
        expect(age).toBeGreaterThanOrEqual(1);
        expect(age).toBeLessThanOrEqual(4);
        expect(Number.isFinite(variant.hp)).toBe(true);
        expect(typeof variant.armor.melee).toBe("number");
        expect(typeof variant.armor.ranged).toBe("number");
        expect(Array.isArray(variant.weapons)).toBe(true);
        for (const weapon of variant.weapons) {
          expect(typeof weapon.burst).toBe("boolean");
          expect(weapon.damage).toBeGreaterThan(0);
          expect(weapon.speed).toBeGreaterThan(0);
        }
      }
    }
  });

  it("Rammböcke und Platzhalter haben keine Anti-Einheiten-Waffe", () => {
    expect(units.find((u) => u.id === "battering-ram").weapons).toHaveLength(0);
    for (const unit of units) {
      for (const weapon of unit.weapons) {
        expect(weapon.name).not.toMatch(/translation not found/);
      }
    }
  });

  it("Kernwerte sind endliche, nicht-negative Zahlen", () => {
    for (const unit of units) {
      expect(Number.isFinite(unit.hp)).toBe(true);
      expect(unit.hp).toBeGreaterThanOrEqual(0);
      expect(Number.isFinite(unit.costs.total)).toBe(true);
      expect(unit.armor.melee).toBeGreaterThanOrEqual(0);
      expect(unit.armor.ranged).toBeGreaterThanOrEqual(0);
    }
  });
});

import { describe, expect, it } from "vitest";
import { parseStored } from "../src/hooks/usePersistedState.js";

const initial = { answered: 0, correct: 0, streak: 0 };
const isDrillStats = (v) =>
  v !== null &&
  typeof v === "object" &&
  typeof v.answered === "number" &&
  typeof v.correct === "number" &&
  typeof v.streak === "number";

describe("parseStored", () => {
  it("liefert initialValue, wenn nichts gespeichert ist", () => {
    expect(parseStored(null, initial)).toBe(initial);
  });

  it("gibt gültige gespeicherte Daten zurück", () => {
    const stored = JSON.stringify({ answered: 3, correct: 2, streak: 1 });
    expect(parseStored(stored, initial, isDrillStats)).toEqual({
      answered: 3,
      correct: 2,
      streak: 1,
    });
  });

  it("verwirft kaputtes JSON", () => {
    expect(parseStored("{nicht valide", initial, isDrillStats)).toBe(initial);
  });

  it("verwirft Daten mit falschem Schema", () => {
    const stored = JSON.stringify({ answered: "viele" });
    expect(parseStored(stored, initial, isDrillStats)).toBe(initial);
  });

  it("ohne Validator wird jeder parsebare Wert übernommen", () => {
    expect(parseStored(JSON.stringify(42), initial)).toBe(42);
  });
});

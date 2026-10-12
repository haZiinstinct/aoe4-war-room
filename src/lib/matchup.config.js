// Tuning-Konstanten des Matchup-Lernmodells (v2).
//
// Das Modell ist ein erklärbares Lernwerkzeug, kein frame-genauer Kampf-
// simulator. Grundlage ist Lanchesters Quadratgesetz: Die Kampfkraft einer
// Gruppe wächst mit der Anzahl N und mit √(Schaden/s · Trefferpunkte) je
// Einheit. Das Ergebnis-Ratio (Angreifer / Verteidiger) ist damit linear in der
// Einheitenzahl und in der Wurzel aus DPS × LP. Darauf sitzen wenige, benannte
// und physikalisch begründete Faktoren: freier Schaden beim Anlaufen,
// Sturmangriff beim Kontakt, Gelände, Micro, Flächenschaden und Upgrades.

/** Grenzwerte auf log2(Ratio) — symmetrisch um 0. */
export const EDGE_THRESHOLDS = {
  hard: 0.78, // ≥ Ratio 1,72 : klarer Counter
  soft: 0.3, // ≥ Ratio 1,23 : leichter Vorteil
  // |edge| < soft: Skill-Matchup; darunter spiegelbildlich leichter / harter
  // Nachteil.
};

/** Anzeigebereich der Vorteilsskala (log2, wird in der UI geklemmt). */
export const EDGE_DISPLAY_LIMIT = 3;

/** Geländefaktoren je Terrain und Einheitentyp (multiplikativ auf Taktik). */
export const TERRAIN_MULTIPLIERS = {
  engpass: { belagerung: 1.12, ranged: 1.06, cavalry: 0.86 },
  offen: { cavalry: 1.08, ranged: 1.03 },
  wald: { ranged: 0.92, infantry: 1.05, cavalry: 0.96 },
};

/** Micro-Boni je Einheitentyp und Micro-Niveau (additiv auf den Faktor 1). */
export const MICRO_BONUSES = {
  ranged: { stark: 0.12, solide: 0.05 },
  cavalry: { stark: 0.08, solide: 0.04 },
  // Kiting: schnellere Fernkampfeinheit gegen langsameren Nicht-Fernkämpfer
  // kann den Abstand theoretisch unbegrenzt halten.
  kite: { stark: 0.18, solide: 0.08 },
};

/**
 * Wie viel des theoretisch freien Schadens beim Anlaufen tatsächlich
 * ankommt: A-Move verschenkt den Großteil, starkes Micro holt ihn voll ab.
 */
export const MICRO_RANGE_SCALE = { stark: 1.15, solide: 0.85, amove: 0.4 };

/** Flächenschaden-/Spezialfaktoren (nur im Ressourcen-Vergleich: Gruppen). */
export const SPLASH = {
  siegeVsSoft: 2.1, // Mangonel & Co. treffen mehrere gruppierte Ziele je Schuss
  antiInfantryMelee: 1.45, // Cleave-Nahkämpfer gegen Infanterie-Blöcke
};

export const TUNING = {
  hpFloor: 20, // Mindest-LP, verhindert entartete Werte
  fallbackHp: 75, // LP-Ersatz, falls Datensatz keine liefert
  dpsFloor: 0.05, // Mindest-DPS im geometrischen Mittel
  speedFloor: 0.5, // langsamste anrechenbare Angriffszeit (s)
  emptyWeaponDps: 0.05, // Ersatz-DPS für waffenlose Einheiten
  countFloor: 0.35, // min. Einheitenzahl im Ressourcenvergleich (teure Units)
  costFallback: 180, // Ersatzkosten, falls costs.total = 0
  minRangeLead: 0.6, // Reichweitenvorsprung in Feldern, ab dem Anlaufen zählt
  approachSpeedFloor: 0.4, // langsamste anrechenbare Laufgeschwindigkeit
  approachWeight: 1, // 1 = freier Schaden zählt 1:1 relativ zu den Gegner-LP
  approachCap: 0.9, // Deckel: mehr als ~90 % der Gegner-LP vorab zählt nicht
  burstWeight: 0.6, // Sturmangriff trifft nicht jede Einheit sauber
  // Klassenbonus wirkt über die reine DPS hinaus: Er definiert die
  // Produktionsantwort und skaliert mit Fokusfeuer auf das richtige Ziel.
  bonusWeight: 0.7, // Gewicht von Bonus / Grundschaden
  bonusCap: 0.75, // Deckel des Fokus-Faktors
  upgradeStep: 0.08, // Taktikbonus je Upgrade-Stufe Vorsprung
  ratioFloor: 0.01, // Divisions-Schutz beim Ratio
  confidenceBase: 52, // Basis-Konfidenz in %
  confidenceScale: 20, // Konfidenz-Zuwachs je |log2(ratio)|
  confidenceCap: 95, // maximale Konfidenz in %
};

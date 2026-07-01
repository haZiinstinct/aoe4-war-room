// Tuning-Konstanten des Matchup-Lernmodells. Zuvor lagen diese Zahlen als
// Magic-Numbers in matchup.js. Werte sind unverändert übernommen — diese Datei
// ist damit zugleich die (überfällige) Dokumentation des Modells.
//
// Wichtig: Das Modell ist ein erklärbares Lernwerkzeug, kein frame-genauer
// Kampfsimulator. Die Faktoren sind empirisch auf „natürliche Counter bleiben
// sichtbar“ getrimmt, nicht aus Engine-Daten abgeleitet.

/** Grenzwerte des Ergebnis-Ratios (Stärke Angreifer / Stärke Verteidiger). */
export const VERDICT_THRESHOLDS = {
  hard: 1.52, // klarer Counter
  soft: 1.16, // leichter Vorteil
  skill: 0.86, // darüber: neutrales Skill-Matchup
  softLoss: 0.66, // darüber: leichter Nachteil; darunter: harter Nachteil
};

/** Geländefaktoren je Terrain und Einheitentyp (multiplikativ auf Taktik). */
export const TERRAIN_MULTIPLIERS = {
  engpass: { belagerung: 1.12, ranged: 1.08, cavalry: 0.88 },
  offen: { cavalry: 1.08, ranged: 1.04 },
  wald: { ranged: 0.93, infantry: 1.05 },
};

/** Micro-Boni je Einheitentyp und Micro-Niveau (additiv auf den Faktor 1). */
export const MICRO_BONUSES = {
  ranged: { stark: 0.14, solide: 0.07 },
  cavalry: { stark: 0.08, solide: 0.04 },
  // Kiting-Bonus: schnellere Fernkampfeinheit gegen langsameren Nicht-Fernkampf.
  kite: { stark: 0.1, solide: 0.04 },
};

/** Wie stark Micro einen Reichweitenvorsprung überhaupt zur Geltung bringt. */
export const MICRO_RANGE_SCALE = { stark: 1.25, solide: 1, amove: 0.45 };

/** Flächenschaden-/Spezialfaktoren (nur im Ressourcen-Vergleich). */
export const SPLASH = {
  siegeVsSoft: 1.22, // Belagerung/Splash gegen gruppierte Infanterie/Fernkampf
  antiInfantryMelee: 1.8, // Nahkampf-Spezialist gegen Infanterie (Fokus/Cleave)
};

export const TUNING = {
  hpFloor: 20, // Mindest-HP, verhindert entartete Werte
  fallbackHp: 75, // HP-Ersatz, falls Datensatz keine liefert
  dpsFloor: 0.05, // Mindest-DPS im geometrischen Mittel
  speedFloor: 0.5, // langsamste anrechenbare Angriffszeit (s)
  emptyWeaponDps: 0.05, // Ersatz-DPS für waffenlose Einheiten
  countFloor: 0.35, // min. Einheitenzahl im Ressourcenvergleich (teure Units)
  costFallback: 180, // Ersatzkosten, falls costs.total = 0
  bonusWeight: 1.4, // Gewicht des Bonusschaden-Anteils
  bonusCap: 1.6, // Deckel des Bonusschaden-Multiplikators
  rangeRate: 0.025, // Vorteil je Feld Reichweitenvorsprung
  rangeCap: 0.22, // Deckel des Reichweitenvorteils
  upgradeStep: 0.075, // Taktikbonus je Upgrade-Stufe
  ratioFloor: 0.01, // Divisions-Schutz beim Ratio
  confidenceBase: 56, // Basis-Konfidenz in %
  confidenceScale: 24, // Konfidenz-Zuwachs je |log2(ratio)|
  confidenceCap: 96, // maximale Konfidenz in %
};

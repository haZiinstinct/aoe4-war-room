export const UNIT_NAMES = {
  archer: "Bogenschütze",
  "battering-ram": "Rammbock",
  bombard: "Bombarde",
  "camel-archer": "Kamelbogenschütze",
  "camel-rider": "Kamelreiter",
  cannon: "Kanone",
  carrack: "Karacke",
  "counterweight-trebuchet": "Gegengewichtstrebuchet",
  crossbowman: "Armbrustschütze",
  culverin: "Feldschlange",
  "demolition-ship": "Sprengschiff",
  "fishing-boat": "Fischerboot",
  galley: "Galeere",
  handcannoneer: "Handkanonier",
  horseman: "Reiter",
  knight: "Ritter",
  lancer: "Lanzenreiter",
  "man-at-arms": "Men-at-Arms",
  monk: "Mönch",
  scout: "Späher",
  "siege-tower": "Belagerungsturm",
  spearman: "Speerträger",
  "trade-ship": "Handelsschiff",
  "transport-ship": "Transportschiff",
  "war-elephant": "Kriegselefant",
};

export const CIV_NAMES = {
  ab: "Abbasiden-Dynastie",
  ay: "Ayyubiden",
  by: "Byzantiner",
  ch: "Chinesen",
  de: "Sultanat von Delhi",
  en: "Engländer",
  fr: "Franzosen",
  gol: "Goldene Horde",
  hr: "Heiliges Römisches Reich",
  hl: "Haus Lancaster",
  ja: "Japaner",
  je: "Jeanne d’Arc",
  jin: "Jin-Dynastie",
  kt: "Tempelritter",
  mac: "Makedonische Dynastie",
  ma: "Malier",
  mo: "Mongolen",
  od: "Orden des Drachen",
  ot: "Osmanen",
  ru: "Rus",
  sen: "Sengoku Daimyo",
  tug: "Tughlaq-Dynastie",
  zx: "Zhu Xis Vermächtnis",
};

export const CATEGORY_LABELS = {
  alle: "Alle Einheiten",
  infanterie: "Infanterie",
  fernkampf: "Fernkampf",
  kavallerie: "Kavallerie",
  belagerung: "Belagerung",
  marine: "Marine",
  support: "Support",
  sonstige: "Spezial",
};

// Einmalige Dev-Warnung für fehlende Übersetzungen. Im Produktions-Build
// (import.meta.env.DEV === false) und in Node/Tests (env undefined) still.
const warnedKeys = new Set();
function devWarnOnce(key, message) {
  if (!import.meta.env?.DEV || warnedKeys.has(key)) return;
  warnedKeys.add(key);
  console.warn(message);
}

/**
 * Deutscher Einheitenname mit englischem Fallback. Bewusst nicht alle Einheiten
 * übersetzt (viele sind Eigennamen) — fehlende werden im Dev-Modus gemeldet,
 * damit UNIT_NAMES gezielt gefüllt werden kann.
 * @param {import("../types.js").Unit} unit
 * @returns {string}
 */
export function unitName(unit) {
  const name = UNIT_NAMES[unit.id];
  if (name) return name;
  devWarnOnce(
    `name:${unit.id}`,
    `[i18n] Kein deutscher Name für "${unit.id}" – Fallback "${unit.name}".`,
  );
  return unit.name;
}

export function civName(code) {
  return CIV_NAMES[code] ?? code.toUpperCase();
}

export function ageLabel(age) {
  return `Zeitalter ${["I", "II", "III", "IV"][Math.max(0, age - 1)] ?? age}`;
}

export function roleLabel(unit) {
  const classes = new Set(unit.classes);
  if (unit.category === "marine") return "Marineeinheit";
  if (unit.category === "belagerung") return "Belagerung";
  if (unit.category === "support") return "Unterstützung";
  if (classes.has("heavy") && classes.has("cavalry"))
    return "Schwere Kavallerie";
  if (classes.has("cavalry_archer")) return "Berittene Fernkampfeinheit";
  if (classes.has("cavalry")) return "Leichte Kavallerie";
  if (classes.has("heavy") && classes.has("infantry"))
    return "Schwere Infanterie";
  if (classes.has("gunpowder") && classes.has("ranged"))
    return "Schießpulver-Fernkampf";
  if (classes.has("ranged")) return "Fernkampfinfanterie";
  if (classes.has("light_melee_infantry")) return "Leichte Nahkampfinfanterie";
  const fallback = unit.displayClasses[0] ?? "Spezialeinheit";
  const translated = ROLE_FALLBACKS[fallback];
  if (!translated && fallback !== "Spezialeinheit") {
    devWarnOnce(
      `role:${fallback}`,
      `[i18n] Keine Rollen-Übersetzung für Klasse "${fallback}" (z. B. ${unit.id}).`,
    );
  }
  return translated ?? fallback;
}

// Englische displayClasses ohne passenden Klassen-Zweig oben → deutsche Rolle.
const ROLE_FALLBACKS = {
  "Heavy Melee Infantry": "Schwere Nahkampfinfanterie",
  "Heavy Infantry": "Schwere Infanterie",
  "Light Melee Infantry": "Leichte Nahkampfinfanterie",
  "Light Infantry": "Leichte Infanterie",
  "Melee Infantry": "Nahkampfinfanterie",
  "Ranged Infantry": "Fernkampfinfanterie",
  "Heavy Cavalry": "Schwere Kavallerie",
  "Light Cavalry": "Leichte Kavallerie",
  "Ranged Cavalry": "Berittene Fernkampfeinheit",
  "Mixed Force Army": "Gemischte Armee",
  Worker: "Arbeiter",
  "Battle Monk": "Kampfmönch",
};

export function shortDescription(unit) {
  const classes = new Set(unit.classes);
  if (unit.category === "support")
    return "Gewinnt Kämpfe durch Heilung, Inspiration oder Kontrolle – nicht durch direkten Schaden.";
  if (unit.category === "marine")
    return "Für Wasserkarten. Nur mit anderen Marineeinheiten sinnvoll vergleichbar.";
  if (unit.category === "belagerung") {
    if (classes.has("ranged"))
      return "Distanz-Belagerung mit klarer Zielrolle. Ohne Schutz leicht auszuschalten.";
    return "Langsame Belagerungseinheit: Positionierung und Begleitschutz entscheiden.";
  }
  if (classes.has("heavy") && classes.has("ranged"))
    return "Teure, robuste Fernkampfeinheit für hochwertige Ziele.";
  if (classes.has("heavy"))
    return "Rüstungsstarke Frontlinie. Bonus-Schaden gegen schwere Einheiten ist die größte Gefahr.";
  if (classes.has("cavalry") && classes.has("ranged"))
    return "Mobile Fernkampfeinheit: stark durch Kiten, schwach wenn sie festgenagelt wird.";
  if (classes.has("cavalry"))
    return "Mobile Einheit für Flanken, Fernkampf-Jagd und Tempo auf der Karte.";
  if (classes.has("ranged"))
    return "Verursacht Schaden aus sicherer Distanz, braucht aber eine Frontlinie.";
  return "Nahkampfeinheit, deren Wert von Zielwahl, Formation und Kontaktzeit lebt.";
}

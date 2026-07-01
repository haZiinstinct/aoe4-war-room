import { civilizations } from "./units.generated.js";

// Deutsche Namen für generische Einheitentypen. Zivilisations-eigene Einheiten
// (Eigennamen wie „Ghulam", „Landsknecht") behalten bewusst ihren Originalnamen.
export const UNIT_NAMES_DE = {
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
  "man-at-arms": "Man-at-Arms",
  monk: "Mönch",
  scout: "Späher",
  "siege-tower": "Belagerungsturm",
  spearman: "Speerträger",
  "trade-ship": "Handelsschiff",
  "transport-ship": "Transportschiff",
  "war-elephant": "Kriegselefant",
};

// Englische Zivilisationsnamen direkt aus den echten Quelldaten (keine
// handgeschriebene Liste → keine Abweichungen/Erfindungen).
const CIV_NAMES_EN = Object.fromEntries(
  civilizations.map((civ) => [civ.code, civ.name]),
);

const CIV_NAMES_DE = {
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

// Römische Zeitalter-Ziffern (sprachneutral) – an einem Ort statt mehrfach inline.
const ROMAN_NUMERALS = ["I", "II", "III", "IV"];

/**
 * Bare römische Zeitalter-Ziffer (ohne „Zeitalter"/„Age"-Präfix).
 * @param {number} age
 * @returns {string}
 */
export function romanAge(age) {
  return ROMAN_NUMERALS[Math.max(0, age - 1)] ?? String(age);
}

// Stabile Reihenfolge der Kategorien für Filter-Listen (sprachneutral).
export const CATEGORY_ORDER = [
  "alle",
  "infanterie",
  "fernkampf",
  "kavallerie",
  "belagerung",
  "marine",
  "support",
  "sonstige",
];

export const CATEGORY_LABELS = {
  de: {
    alle: "Alle Einheiten",
    infanterie: "Infanterie",
    fernkampf: "Fernkampf",
    kavallerie: "Kavallerie",
    belagerung: "Belagerung",
    marine: "Marine",
    support: "Support",
    sonstige: "Spezial",
  },
  en: {
    alle: "All units",
    infanterie: "Infantry",
    fernkampf: "Ranged",
    kavallerie: "Cavalry",
    belagerung: "Siege",
    marine: "Naval",
    support: "Support",
    sonstige: "Special",
  },
};

const ROLE_LABELS = {
  marine: { de: "Marineeinheit", en: "Naval unit" },
  siege: { de: "Belagerung", en: "Siege" },
  support: { de: "Unterstützung", en: "Support" },
  heavyCav: { de: "Schwere Kavallerie", en: "Heavy cavalry" },
  mountedRanged: { de: "Berittene Fernkampfeinheit", en: "Mounted ranged" },
  lightCav: { de: "Leichte Kavallerie", en: "Light cavalry" },
  heavyInf: { de: "Schwere Infanterie", en: "Heavy infantry" },
  gunpowder: { de: "Schießpulver-Fernkampf", en: "Gunpowder ranged" },
  rangedInf: { de: "Fernkampfinfanterie", en: "Ranged infantry" },
  lightMeleeInf: {
    de: "Leichte Nahkampfinfanterie",
    en: "Light melee infantry",
  },
  special: { de: "Spezialeinheit", en: "Special unit" },
};

// Deutsche Übersetzung englischer displayClasses, die kein Klassen-Zweig oben
// abdeckt. Im Englisch-Modus wird die Original-displayClass direkt genutzt.
const ROLE_FALLBACKS_DE = {
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

const SHORT_DESCRIPTIONS = {
  support: {
    de: "Gewinnt Kämpfe durch Heilung, Inspiration oder Kontrolle – nicht durch direkten Schaden.",
    en: "Wins fights through healing, inspiration or control – not through direct damage.",
  },
  marine: {
    de: "Für Wasserkarten. Nur mit anderen Marineeinheiten sinnvoll vergleichbar.",
    en: "For water maps. Only meaningfully compared with other naval units.",
  },
  siegeRanged: {
    de: "Distanz-Belagerung mit klarer Zielrolle. Ohne Schutz leicht auszuschalten.",
    en: "Ranged siege with a clear target role. Easily picked off without an escort.",
  },
  siegeMelee: {
    de: "Langsame Belagerungseinheit: Positionierung und Begleitschutz entscheiden.",
    en: "Slow siege unit: positioning and escort decide its value.",
  },
  heavyRanged: {
    de: "Teure, robuste Fernkampfeinheit für hochwertige Ziele.",
    en: "Expensive, sturdy ranged unit for high-value targets.",
  },
  heavy: {
    de: "Rüstungsstarke Frontlinie. Bonus-Schaden gegen schwere Einheiten ist die größte Gefahr.",
    en: "Armoured front line. Bonus damage against heavy units is the biggest threat.",
  },
  cavalryRanged: {
    de: "Mobile Fernkampfeinheit: stark durch Kiten, schwach wenn sie festgenagelt wird.",
    en: "Mobile ranged unit: strong when kiting, weak once pinned down.",
  },
  cavalry: {
    de: "Mobile Einheit für Flanken, Fernkampf-Jagd und Tempo auf der Karte.",
    en: "Mobile unit for flanks, hunting ranged units and map tempo.",
  },
  ranged: {
    de: "Verursacht Schaden aus sicherer Distanz, braucht aber eine Frontlinie.",
    en: "Deals damage from a safe distance but needs a front line.",
  },
  melee: {
    de: "Nahkampfeinheit, deren Wert von Zielwahl, Formation und Kontaktzeit lebt.",
    en: "Melee unit whose value depends on target choice, formation and time in contact.",
  },
};

// Opt-in-Warnung für fehlende deutsche Generik-Namen (VITE_I18N_DEBUG=true).
const I18N_DEBUG = import.meta.env?.VITE_I18N_DEBUG === "true";
const warnedKeys = new Set();
function devWarnOnce(key, message) {
  if (!I18N_DEBUG || warnedKeys.has(key)) return;
  warnedKeys.add(key);
  console.warn(message);
}

/**
 * Einheitenname in der gewählten Sprache. Englisch nutzt den Originalnamen;
 * Deutsch übersetzt generische Typen und behält Eigennamen bei.
 * @param {import("../types.js").Unit} unit
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function unitName(unit, lang = "de") {
  if (lang === "en") return unit.name;
  const name = UNIT_NAMES_DE[unit.id];
  if (name) return name;
  devWarnOnce(
    `name:${unit.id}`,
    `[i18n] Kein deutscher Name für "${unit.id}" – Fallback "${unit.name}".`,
  );
  return unit.name;
}

/**
 * @param {string} code
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function civName(code, lang = "de") {
  const map = lang === "en" ? CIV_NAMES_EN : CIV_NAMES_DE;
  return map[code] ?? code.toUpperCase();
}

/**
 * @param {number} age
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function ageLabel(age, lang = "de") {
  const roman = romanAge(age);
  return lang === "en" ? `Age ${roman}` : `Zeitalter ${roman}`;
}

/**
 * @param {string} category
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function categoryLabel(category, lang = "de") {
  return CATEGORY_LABELS[lang]?.[category] ?? category;
}

function roleKey(unit) {
  const classes = new Set(unit.classes);
  if (unit.category === "marine") return "marine";
  if (unit.category === "belagerung") return "siege";
  if (unit.category === "support") return "support";
  if (classes.has("heavy") && classes.has("cavalry")) return "heavyCav";
  if (classes.has("cavalry_archer")) return "mountedRanged";
  if (classes.has("cavalry")) return "lightCav";
  if (classes.has("heavy") && classes.has("infantry")) return "heavyInf";
  if (classes.has("gunpowder") && classes.has("ranged")) return "gunpowder";
  if (classes.has("ranged")) return "rangedInf";
  if (classes.has("light_melee_infantry")) return "lightMeleeInf";
  return null;
}

/**
 * @param {import("../types.js").Unit} unit
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function roleLabel(unit, lang = "de") {
  const key = roleKey(unit);
  if (key) return ROLE_LABELS[key][lang];
  const fallback = unit.displayClasses[0];
  if (!fallback) return ROLE_LABELS.special[lang];
  if (lang === "en") return fallback;
  const translated = ROLE_FALLBACKS_DE[fallback];
  if (!translated) {
    devWarnOnce(
      `role:${fallback}`,
      `[i18n] Keine deutsche Rollen-Übersetzung für "${fallback}" (z. B. ${unit.id}).`,
    );
  }
  return translated ?? fallback;
}

function descriptionKey(unit) {
  const classes = new Set(unit.classes);
  if (unit.category === "support") return "support";
  if (unit.category === "marine") return "marine";
  if (unit.category === "belagerung") {
    return classes.has("ranged") ? "siegeRanged" : "siegeMelee";
  }
  if (classes.has("heavy") && classes.has("ranged")) return "heavyRanged";
  if (classes.has("heavy")) return "heavy";
  if (classes.has("cavalry") && classes.has("ranged")) return "cavalryRanged";
  if (classes.has("cavalry")) return "cavalry";
  if (classes.has("ranged")) return "ranged";
  return "melee";
}

/**
 * @param {import("../types.js").Unit} unit
 * @param {"de"|"en"} [lang]
 * @returns {string}
 */
export function shortDescription(unit, lang = "de") {
  return SHORT_DESCRIPTIONS[descriptionKey(unit)][lang];
}

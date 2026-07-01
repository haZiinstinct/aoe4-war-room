import { createContext, useContext, useEffect, useMemo } from "react";
import { usePersistedState } from "../hooks/usePersistedState.js";
import {
  ageLabel,
  categoryLabel,
  civName,
  roleLabel,
  shortDescription,
  unitName,
} from "../data/localization.js";
import { STRINGS } from "./strings.js";

/** @typedef {"de"|"en"} Lang */

const LanguageContext = createContext(
  /** @type {null | ReturnType<typeof buildValue>} */ (null),
);

const isLang = (value) => value === "de" || value === "en";

function buildValue(lang, setLang) {
  /**
   * Übersetzt einen Schlüssel in die aktuelle Sprache. Werte können reine
   * Strings oder Funktionen (für Interpolation) sein. Fällt auf Deutsch und
   * zuletzt auf den Schlüssel selbst zurück.
   * @param {string} key
   * @param {Record<string, any>} [params]
   * @returns {string}
   */
  const t = (key, params) => {
    const entry = STRINGS[lang]?.[key] ?? STRINGS.de[key] ?? key;
    return typeof entry === "function" ? entry(params ?? {}) : entry;
  };
  return {
    lang,
    setLang,
    t,
    // An die aktuelle Sprache gebundene Daten-Helfer (bequem in Komponenten).
    unitName: (unit) => unitName(unit, lang),
    roleLabel: (unit) => roleLabel(unit, lang),
    civName: (code) => civName(code, lang),
    ageLabel: (age) => ageLabel(age, lang),
    categoryLabel: (category) => categoryLabel(category, lang),
    shortDescription: (unit) => shortDescription(unit, lang),
  };
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = usePersistedState("war-room-lang-v1", "de", isLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => buildValue(lang, setLang), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useI18n muss innerhalb von LanguageProvider genutzt werden",
    );
  }
  return ctx;
}

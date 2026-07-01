import { useEffect, useState } from "react";

/**
 * Pure Lade-Logik (ohne DOM, damit testbar): parst den Rohwert und verwirft
 * ihn bei kaputtem JSON oder fehlgeschlagener Validierung.
 * @template T
 * @param {string | null} raw
 * @param {T} initialValue
 * @param {(value: any) => boolean} [validate]
 * @returns {T}
 */
export function parseStored(raw, initialValue, validate) {
  if (raw == null) return initialValue;
  try {
    const parsed = JSON.parse(raw);
    if (validate && !validate(parsed)) return initialValue;
    return parsed;
  } catch {
    return initialValue;
  }
}

/**
 * State, der in localStorage gespiegelt wird — abgesichert gegen restriktive
 * Browser (z. B. file://) und gegen veraltete/kaputte gespeicherte Daten.
 *
 * @template T
 * @param {string} key localStorage-Schlüssel (Konvention: Suffix `-vN` je
 *   Schema-Version, damit ein Schemawechsel alte Daten verwerfen kann).
 * @param {T} initialValue
 * @param {(value: any) => boolean} [validate] optionaler Shape-Check; schlägt er
 *   fehl, wird der gespeicherte Wert verworfen und initialValue genutzt.
 * @returns {[T, import("react").Dispatch<import("react").SetStateAction<T>>]}
 */
export function usePersistedState(key, initialValue, validate) {
  const [value, setValue] = useState(() => {
    try {
      return parseStored(
        window.localStorage.getItem(key),
        initialValue,
        validate,
      );
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Manche Browser sperren Storage für lokale Datei-URLs. App bleibt nutzbar.
    }
  }, [key, value]);

  return [value, setValue];
}

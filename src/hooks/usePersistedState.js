import { useEffect, useState } from "react";

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
      const stored = window.localStorage.getItem(key);
      if (!stored) return initialValue;
      const parsed = JSON.parse(stored);
      if (validate && !validate(parsed)) return initialValue;
      return parsed;
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

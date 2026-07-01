import { useEffect, useState } from "react";

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Some browsers restrict storage for local file URLs. The app remains usable.
    }
  }, [key, value]);

  return [value, setValue];
}

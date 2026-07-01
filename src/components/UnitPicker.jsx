import {
  Anchor,
  Castle,
  ChevronRight,
  Cross,
  Search,
  Shield,
  Sparkles,
  Sword,
  Target,
} from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import {
  CATEGORY_LABELS,
  civName,
  roleLabel,
  unitName,
} from "../data/localization";
import UnitAvatar from "./UnitAvatar";

const CATEGORY_ICONS = {
  alle: Sparkles,
  infanterie: Shield,
  fernkampf: Target,
  kavallerie: Sword,
  belagerung: Castle,
  marine: Anchor,
  support: Cross,
  sonstige: Sparkles,
};

export default function UnitPicker({
  units,
  civilizations,
  selected,
  onSelect,
  compact = false,
  initialCategory = "alle",
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [category, setCategory] = useState(initialCategory);
  const [civ, setCiv] = useState("all");

  const categoryCounts = useMemo(() => {
    const counts = { alle: units.length };
    for (const unit of units) {
      counts[unit.category] = (counts[unit.category] ?? 0) + 1;
    }
    return counts;
  }, [units]);

  const filtered = useMemo(() => {
    const needle = deferredQuery.trim().toLocaleLowerCase("de");
    return units.filter((unit) => {
      if (category !== "alle" && unit.category !== category) return false;
      if (civ !== "all" && !unit.civs.includes(civ)) return false;
      if (!needle) return true;
      return `${unitName(unit)} ${unit.name} ${unit.id}`
        .toLocaleLowerCase("de")
        .includes(needle);
    });
  }, [category, civ, deferredQuery, units]);

  return (
    <aside className={`unit-picker ${compact ? "unit-picker--compact" : ""}`}>
      <div className="unit-picker__controls">
        <label
          className="field-label"
          htmlFor={`civ-${compact ? "compact" : "full"}`}
        >
          Zivilisation
        </label>
        <select
          id={`civ-${compact ? "compact" : "full"}`}
          name={`civilization-${compact ? "compact" : "full"}`}
          value={civ}
          onChange={(event) => setCiv(event.target.value)}
        >
          <option value="all">Alle Zivilisationen</option>
          {civilizations.map((civilization) => (
            <option key={civilization.code} value={civilization.code}>
              {civName(civilization.code)}
            </option>
          ))}
        </select>
        <label className="search-field">
          <Search size={15} />
          <span className="sr-only">Einheit suchen</span>
          <input
            type="search"
            name={`unit-search-${compact ? "compact" : "full"}`}
            autoComplete="off"
            spellCheck={false}
            value={query}
            placeholder="Einheit suchen …"
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </label>
      </div>

      <div className="category-list" aria-label="Einheitenkategorien">
        {Object.entries(CATEGORY_LABELS).map(([id, label]) => {
          if (!categoryCounts[id]) return null;
          const Icon = CATEGORY_ICONS[id];
          return (
            <button
              type="button"
              key={id}
              className={category === id ? "is-active" : ""}
              onClick={() => setCategory(id)}
            >
              <Icon size={15} />
              <span>{label}</span>
              <small>{categoryCounts[id]}</small>
            </button>
          );
        })}
      </div>

      <div className="picker-results">
        <div className="picker-results__head" aria-live="polite">
          <span>{filtered.length} Einheiten</span>
          <span>
            {category === "alle" ? "Alle Rollen" : CATEGORY_LABELS[category]}
          </span>
        </div>
        <div className="picker-results__scroll">
          {filtered.map((unit) => (
            <button
              type="button"
              key={unit.id}
              className={`unit-row ${selected?.id === unit.id ? "is-selected" : ""}`}
              onClick={() => onSelect(unit)}
            >
              <UnitAvatar unit={unit} size="small" />
              <span className="unit-row__copy">
                <strong>{unitName(unit)}</strong>
                <small>{roleLabel(unit)}</small>
              </span>
              {unit.unique ? <i>U</i> : null}
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          ))}
          {!filtered.length ? (
            <div className="empty-list">
              Keine Einheit passt zu diesen Filtern.
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

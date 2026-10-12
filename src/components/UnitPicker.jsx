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
import { CATEGORY_ORDER, romanAge } from "../data/localization";
import { useI18n } from "../i18n/LanguageProvider.jsx";
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
  initialCategory = "alle",
}) {
  const { t, lang, unitName, roleLabel, civName, categoryLabel } = useI18n();
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
    const needle = deferredQuery.trim().toLocaleLowerCase(lang);
    return units.filter((unit) => {
      if (category !== "alle" && unit.category !== category) return false;
      if (civ !== "all" && !unit.civs.includes(civ)) return false;
      if (!needle) return true;
      return `${unitName(unit)} ${unit.name} ${unit.id}`
        .toLocaleLowerCase(lang)
        .includes(needle);
    });
  }, [category, civ, deferredQuery, units, unitName, lang]);

  return (
    <aside className="unit-picker">
      <div className="unit-picker__controls">
        <label className="field-label" htmlFor="picker-civilization">
          {t("picker.civ")}
        </label>
        <select
          id="picker-civilization"
          name="picker-civilization"
          value={civ}
          onChange={(event) => setCiv(event.target.value)}
        >
          <option value="all">{t("picker.allCivs")}</option>
          {civilizations.map((civilization) => (
            <option key={civilization.code} value={civilization.code}>
              {civName(civilization.code)}
            </option>
          ))}
        </select>
        <label className="search-field">
          <Search size={15} aria-hidden="true" />
          <span className="sr-only">{t("picker.searchUnit")}</span>
          <input
            type="search"
            name="picker-unit-search"
            data-search-input
            autoComplete="off"
            spellCheck={false}
            value={query}
            placeholder={t("picker.searchPlaceholder")}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd aria-hidden="true">⌘&nbsp;K</kbd>
        </label>
      </div>

      <div
        className="category-list"
        role="group"
        aria-label={t("picker.categories")}
      >
        {CATEGORY_ORDER.map((id) => {
          if (!categoryCounts[id]) return null;
          const Icon = CATEGORY_ICONS[id];
          return (
            <button
              type="button"
              key={id}
              className={category === id ? "is-active" : ""}
              aria-pressed={category === id}
              onClick={() => setCategory(id)}
            >
              <Icon size={15} aria-hidden="true" />
              <span>{categoryLabel(id)}</span>
              <small>{categoryCounts[id]}</small>
            </button>
          );
        })}
      </div>

      <div className="picker-results">
        <div className="picker-results__head" aria-live="polite">
          <span>{t("picker.unitsCount", { n: filtered.length })}</span>
          <span>
            {category === "alle"
              ? t("picker.allRoles")
              : categoryLabel(category)}
          </span>
        </div>
        <div className="picker-results__scroll">
          {filtered.map((unit) => (
            <button
              type="button"
              key={unit.id}
              className={`unit-row ${selected?.id === unit.id ? "is-selected" : ""}`}
              aria-pressed={selected?.id === unit.id}
              onClick={() => onSelect(unit)}
            >
              <UnitAvatar unit={unit} size="small" decorative />
              <span className="unit-row__copy">
                <strong>{unitName(unit)}</strong>
                <small>{roleLabel(unit)}</small>
              </span>
              <i className="unit-row__age" aria-hidden="true">
                {romanAge(unit.minAge)}
              </i>
              {unit.unique ? (
                <i className="unit-row__unique" title={t("explorer.unique")}>
                  U
                </i>
              ) : null}
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          ))}
          {!filtered.length ? (
            <div className="empty-list">{t("picker.empty")}</div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

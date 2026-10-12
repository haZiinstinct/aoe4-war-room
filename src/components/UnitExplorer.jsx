import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  Coins,
  Crosshair,
  Filter,
  Footprints,
  Heart,
  ListFilter,
  Search,
  Shield,
  Sparkles,
  Swords,
  Target,
  Zap,
} from "lucide-react";
import { memo, useDeferredValue, useMemo, useState } from "react";
import {
  bonusGroupLabel,
  CATEGORY_ORDER,
  romanAge,
} from "../data/localization";
import { useI18n } from "../i18n/LanguageProvider.jsx";
import { EDGE_DISPLAY_LIMIT } from "../lib/matchup.config";
import {
  DEFAULT_SETTINGS,
  formatRatio,
  getFavoredTargets,
  getThreats,
  primaryWeapon,
  statsAt,
} from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";

const Stat = memo(
  /**
   * @param {{ icon: import("lucide-react").LucideIcon, label: string, value: import("react").ReactNode }} props
   */
  function Stat({ icon: Icon, label, value }) {
    return (
      <div className="dossier-stat">
        <Icon size={16} aria-hidden="true" />
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    );
  },
);

const MatchupRow = memo(
  /**
   * @param {{ entry: import("../types.js").CounterCandidate, type: string, onOpen: (unit: import("../types.js").Unit) => void }} props
   */
  function MatchupRow({ entry, type, onOpen }) {
    const { t, unitName, roleLabel, lang } = useI18n();
    const isStrong = type === "strong";
    const meter = Math.min(
      100,
      Math.round(
        (Math.abs(entry.result.edgeClamped ?? 0) / EDGE_DISPLAY_LIMIT) * 100,
      ),
    );
    return (
      <button
        type="button"
        className="dossier-matchup-row"
        onClick={() => onOpen(entry.unit)}
      >
        <UnitAvatar unit={entry.unit} size="small" decorative />
        <span className="dossier-matchup-row__name">
          <strong>{unitName(entry.unit)}</strong>
          <small>{roleLabel(entry.unit)}</small>
        </span>
        <span
          className={`effect-meter ${
            isStrong ? "effect-meter--good" : "effect-meter--bad"
          }`}
          title={t("explorer.ratioLabel", {
            value: formatRatio(entry.result.ratio, lang),
          })}
        >
          <i>
            <b style={{ width: `${meter}%` }} />
          </i>
          <small>{formatRatio(entry.result.ratio, lang)}</small>
        </span>
        <span className="dossier-matchup-row__reason">
          {entry.result.reasons[0]?.text}
        </span>
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    );
  },
);

export default function UnitExplorer({
  units,
  civilizations,
  selected,
  onSelect,
  onOpenLab,
}) {
  const {
    t,
    lang,
    unitName,
    roleLabel,
    civName,
    ageLabel,
    shortDescription,
    categoryLabel,
    formatNumber,
  } = useI18n();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [civ, setCiv] = useState("all");
  const [category, setCategory] = useState("alle");
  const [age, setAge] = useState("all");
  const [uniqueOnly, setUniqueOnly] = useState(false);
  const [tab, setTab] = useState("matchups");
  const [statsAge, setStatsAge] = useState(DEFAULT_SETTINGS.age);

  const filtered = useMemo(() => {
    const needle = deferredQuery.toLocaleLowerCase(lang).trim();
    return units.filter((unit) => {
      if (civ !== "all" && !unit.civs.includes(civ)) return false;
      if (category !== "alle" && unit.category !== category) return false;
      if (age !== "all" && unit.minAge !== Number(age)) return false;
      if (uniqueOnly && !unit.unique) return false;
      if (!needle) return true;
      return `${unitName(unit)} ${unit.name} ${roleLabel(unit)}`
        .toLocaleLowerCase(lang)
        .includes(needle);
    });
  }, [
    age,
    category,
    civ,
    deferredQuery,
    uniqueOnly,
    units,
    unitName,
    roleLabel,
    lang,
  ]);

  const matchupSettings = useMemo(
    () => ({ ...DEFAULT_SETTINGS, age: statsAge }),
    [statsAge],
  );
  const favored = useMemo(
    () => getFavoredTargets(units, selected, matchupSettings, 5, lang),
    [matchupSettings, selected, units, lang],
  );
  const threats = useMemo(
    () => getThreats(units, selected, matchupSettings, 5, lang),
    [matchupSettings, selected, units, lang],
  );

  const stats = statsAt(selected, statsAge);
  const mainWeapon = primaryWeapon(stats);
  const availableAges = Object.keys(selected.ages ?? {}).map(Number);
  const civsText =
    selected.civs.length > 3
      ? t("explorer.civsCount", { n: selected.civs.length })
      : selected.civs.map((code) => civName(code)).join(", ") ||
        t("explorer.specialFormation");
  const fmt = (value, digits = 2) =>
    formatNumber(Number(Number(value).toFixed(digits)));

  return (
    <div className="explorer-page">
      <section className="explorer-browser">
        <header className="section-header">
          <div>
            <h1>{t("nav.units")}</h1>
            <p>
              {t("explorer.subtitle", {
                units: units.length,
                civs: civilizations.length,
              })}
            </p>
          </div>
          <ListFilter size={20} aria-hidden="true" />
        </header>

        <div className="explorer-filters">
          <label className="search-field search-field--large">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">{t("picker.searchUnit")}</span>
            <input
              value={query}
              type="search"
              name="explorer-unit-search"
              data-search-input
              autoComplete="off"
              spellCheck={false}
              placeholder={t("picker.searchPlaceholder")}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="filter-row">
            <label>
              <span className="sr-only">{t("picker.civ")}</span>
              <select
                name="explorer-civilization"
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
            </label>
            <label>
              <span className="sr-only">{t("explorer.category")}</span>
              <select
                name="explorer-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {CATEGORY_ORDER.map((value) => (
                  <option key={value} value={value}>
                    {categoryLabel(value)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">{t("lab.age")}</span>
              <select
                name="explorer-age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              >
                <option value="all">{t("explorer.allAges")}</option>
                {[1, 2, 3, 4].map((value) => (
                  <option value={value} key={value}>
                    {ageLabel(value)}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className={
                uniqueOnly ? "toggle-button is-active" : "toggle-button"
              }
              aria-pressed={uniqueOnly}
              onClick={() => setUniqueOnly((value) => !value)}
            >
              <Sparkles size={14} aria-hidden="true" />{" "}
              {t("explorer.uniqueOnly")}
            </button>
          </div>
        </div>

        <div className="unit-table">
          <div className="unit-table__head">
            <span>{t("explorer.colUnit")}</span>
            <span>{t("explorer.colRole")}</span>
            <span>{t("explorer.colAge")}</span>
          </div>
          <div className="unit-table__body">
            {filtered.map((unit) => (
              <button
                type="button"
                key={unit.id}
                className={selected.id === unit.id ? "is-selected" : ""}
                aria-pressed={selected.id === unit.id}
                onClick={() => onSelect(unit)}
              >
                <UnitAvatar unit={unit} size="small" decorative />
                <span>
                  <strong>{unitName(unit)}</strong>
                  <small>
                    {unit.unique && unit.civs[0]
                      ? civName(unit.civs[0])
                      : unit.unique
                        ? t("explorer.unique")
                        : t("explorer.standard")}
                  </small>
                </span>
                <span>{roleLabel(unit)}</span>
                <span>{romanAge(unit.minAge)}</span>
                <ChevronRight size={14} aria-hidden="true" />
              </button>
            ))}
          </div>
          <footer aria-live="polite">
            <span>{t("explorer.results", { n: filtered.length })}</span>
            <span>
              <Filter size={13} aria-hidden="true" />{" "}
              {t("explorer.filtersInstant")}
            </span>
          </footer>
        </div>
      </section>

      <section className="unit-dossier">
        <div className="unit-dossier__hero">
          <div className="dossier-portrait">
            <UnitAvatar unit={selected} size="dossier" decorative />
            {selected.unique ? <span>{t("explorer.uniqueUnit")}</span> : null}
          </div>
          <div className="dossier-summary">
            <span className="dossier-summary__meta">
              {civsText} · {ageLabel(selected.minAge)}
            </span>
            <h2>{unitName(selected)}</h2>
            <strong>{roleLabel(selected)}</strong>
            <p>{shortDescription(selected)}</p>
            <div className="dossier-age">
              <span>{t("explorer.valuesFor")}</span>
              <div
                className="age-switcher"
                role="group"
                aria-label={t("lab.age")}
              >
                {[1, 2, 3, 4].map((value) => {
                  const available = availableAges.includes(value);
                  return (
                    <button
                      type="button"
                      key={value}
                      className={statsAge === value ? "is-active" : ""}
                      aria-pressed={statsAge === value}
                      disabled={!available && value < selected.minAge}
                      onClick={() => setStatsAge(value)}
                    >
                      {romanAge(value)}
                    </button>
                  );
                })}
              </div>
              <small>
                {stats.age !== statsAge
                  ? t("explorer.heroAge", { age: romanAge(stats.age) })
                  : null}
              </small>
            </div>
            <div className="dossier-stats">
              <Stat
                icon={Heart}
                label={t("stat.life")}
                value={stats.hp || "–"}
              />
              <Stat
                icon={Swords}
                label={t("stat.attack")}
                value={mainWeapon?.damage || "–"}
              />
              <Stat
                icon={Zap}
                label={t("explorer.dps")}
                value={
                  mainWeapon
                    ? fmt(
                        mainWeapon.damage / Math.max(0.5, mainWeapon.speed),
                        1,
                      )
                    : "–"
                }
              />
              <Stat
                icon={Shield}
                label={t("stat.armor")}
                value={`${stats.armor.melee}/${stats.armor.ranged}`}
              />
              <Stat
                icon={Footprints}
                label={t("stat.speed")}
                value={stats.movement ? fmt(stats.movement, 2) : "–"}
              />
              <Stat
                icon={Coins}
                label={t("stat.cost")}
                value={stats.costs.total || t("lab.special")}
              />
            </div>
            <button
              className="primary-button"
              type="button"
              onClick={() => onOpenLab(selected)}
            >
              {t("explorer.openInLab")}{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="effect-triangle">
            <span>{t("explorer.effectLogic")}</span>
            <div>
              <i className="effect-triangle__strong">
                <ArrowUpRight aria-hidden="true" />
                <b>{t("explorer.strongAgainst")}</b>
              </i>
              <Swords aria-hidden="true" />
              <i className="effect-triangle__weak">
                <ArrowDownRight aria-hidden="true" />
                <b>{t("explorer.weakAgainst")}</b>
              </i>
            </div>
            <p>{t("explorer.effectNote")}</p>
          </div>
        </div>

        <div className="dossier-tabs" role="tablist">
          {
            /** @type {[string, string, import("lucide-react").LucideIcon][]} */ ([
              ["matchups", t("explorer.tabMatchups"), Target],
              ["stats", t("explorer.tabStats"), BarChart3],
              ["usage", t("explorer.tabUsage"), Crosshair],
            ]).map(([id, label, Icon]) => (
              <button
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={tab === id ? "is-active" : ""}
                key={id}
                onClick={() => setTab(id)}
              >
                <Icon size={15} aria-hidden="true" /> {label}
              </button>
            ))
          }
        </div>

        {tab === "matchups" ? (
          <div className="dossier-matchups">
            <div className="dossier-matchups__section">
              <header>
                <span>{t("explorer.strongAgainst")}</span>
                <small>{t("explorer.strongHint")}</small>
              </header>
              {favored.map((entry) => (
                <MatchupRow
                  key={entry.unit.id}
                  entry={entry}
                  type="strong"
                  onOpen={(target) => onOpenLab(selected, target)}
                />
              ))}
            </div>
            <div className="dossier-matchups__section">
              <header>
                <span>{t("explorer.weakAgainst")}</span>
                <small>{t("explorer.weakHint")}</small>
              </header>
              {threats.map((entry) => (
                <MatchupRow
                  key={entry.unit.id}
                  entry={entry}
                  type="weak"
                  onOpen={(threat) => onOpenLab(threat, selected)}
                />
              ))}
            </div>
          </div>
        ) : null}

        {tab === "stats" ? (
          <div className="stats-sheet">
            <div>
              <span>{t("explorer.baseStats")}</span>
              <dl>
                <dt>{t("explorer.hp")}</dt>
                <dd>{stats.hp || "–"}</dd>
                <dt>{t("explorer.meleeArmor")}</dt>
                <dd>{stats.armor.melee}</dd>
                <dt>{t("explorer.rangedArmor")}</dt>
                <dd>{stats.armor.ranged}</dd>
                <dt>{t("explorer.movement")}</dt>
                <dd>
                  {stats.movement ? fmt(stats.movement, 3) : "–"}{" "}
                  {t("explorer.tilesPerSec")}
                </dd>
                <dt>{t("explorer.population")}</dt>
                <dd>{stats.costs.popcap || "–"}</dd>
              </dl>
            </div>
            <div>
              <span>{t("explorer.weapons")}</span>
              {stats.weapons.length ? (
                stats.weapons.map((weapon) => (
                  <dl key={`${weapon.name}-${weapon.type}-${weapon.damage}`}>
                    <dt className="weapon-name">
                      {weapon.name}
                      {weapon.burst ? (
                        <small>{t("explorer.burstWeapon")}</small>
                      ) : weapon.type === "siege" ? (
                        <small>{t("explorer.siegeDamage")}</small>
                      ) : null}
                    </dt>
                    <dd>{t("explorer.damage", { d: weapon.damage })}</dd>
                    <dt>{t("explorer.attackSpeed")}</dt>
                    <dd>{fmt(weapon.speed, 2)} s</dd>
                    {!weapon.burst ? (
                      <>
                        <dt>{t("explorer.dps")}</dt>
                        <dd>
                          {fmt(weapon.damage / Math.max(0.5, weapon.speed), 2)}
                        </dd>
                      </>
                    ) : null}
                    <dt>{t("explorer.range")}</dt>
                    <dd>{fmt(weapon.range, 1)}</dd>
                    <dt>{t("explorer.bonusGroups")}</dt>
                    <dd className="bonus-list">
                      {weapon.modifiers.length
                        ? weapon.modifiers.map((modifier, index) => (
                            <span key={index}>
                              {t("explorer.bonusVs", {
                                value: modifier.value,
                                target: modifier.groups
                                  .map((group) => bonusGroupLabel(group, lang))
                                  .join(" / "),
                              })}
                            </span>
                          ))
                        : t("explorer.none")}
                    </dd>
                  </dl>
                ))
              ) : (
                <p>{t("explorer.noWeapon")}</p>
              )}
            </div>
            <div>
              <span>{t("lab.resources")}</span>
              <dl>
                {Object.entries(stats.costs)
                  .filter(
                    ([key, value]) =>
                      value && !["total", "popcap", "time"].includes(key),
                  )
                  .map(([key, value]) => (
                    <span key={key}>
                      <dt>{t(`res.${key}`)}</dt>
                      <dd>{value}</dd>
                    </span>
                  ))}
                <dt>{t("explorer.totalValue")}</dt>
                <dd>{stats.costs.total || t("lab.special")}</dd>
                <dt>{t("explorer.productionTime")}</dt>
                <dd>{stats.costs.time || "–"} s</dd>
              </dl>
            </div>
          </div>
        ) : null}

        {tab === "usage" ? (
          <div className="usage-sheet">
            <article>
              <span>01</span>
              <div>
                <h3>{t("explorer.usageTarget")}</h3>
                <p>{t("explorer.usageTargetBody")}</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>{t("explorer.usageFormation")}</h3>
                <p>
                  {selected.category === "fernkampf"
                    ? t("explorer.formRanged")
                    : selected.category === "kavallerie"
                      ? t("explorer.formCav")
                      : selected.category === "belagerung"
                        ? t("explorer.formSiege")
                        : t("explorer.formMelee")}
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>{t("explorer.usageBail")}</h3>
                <p>{t("explorer.usageBailBody")}</p>
              </div>
            </article>
          </div>
        ) : null}
      </section>
    </div>
  );
}

import {
  Anchor,
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
} from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import {
  CATEGORY_LABELS,
  ageLabel,
  civName,
  roleLabel,
  shortDescription,
  unitName,
} from "../data/localization";
import {
  DEFAULT_SETTINGS,
  getFavoredTargets,
  getThreats,
} from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="dossier-stat">
      <Icon size={16} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function MatchupRow({ entry, type, onOpen }) {
  const isStrong = type === "strong";
  const ratio = isStrong ? entry.result.ratio : entry.result.ratio;
  const meter = Math.min(100, Math.round((Math.abs(Math.log2(ratio)) + 0.2) * 52));
  return (
    <button
      type="button"
      className="dossier-matchup-row"
      onClick={() => onOpen(entry.unit)}
    >
      <UnitAvatar unit={entry.unit} size="small" />
      <span className="dossier-matchup-row__name">
        <strong>{unitName(entry.unit)}</strong>
        <small>{roleLabel(entry.unit)}</small>
      </span>
      <span
        className={`effect-meter ${
          isStrong ? "effect-meter--good" : "effect-meter--bad"
        }`}
      >
        <i>
          <b style={{ width: `${meter}%` }} />
        </i>
        <small>{isStrong ? "Gutes Ziel" : "Gefahr"}</small>
      </span>
      <span className="dossier-matchup-row__reason">
        {entry.result.reasons[0]?.text}
      </span>
      <ChevronRight size={16} />
    </button>
  );
}

export default function UnitExplorer({
  units,
  civilizations,
  selected,
  onSelect,
  onOpenLab,
}) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [civ, setCiv] = useState("all");
  const [category, setCategory] = useState("alle");
  const [age, setAge] = useState("all");
  const [uniqueOnly, setUniqueOnly] = useState(false);
  const [tab, setTab] = useState("matchups");

  const filtered = useMemo(() => {
    const needle = deferredQuery.toLocaleLowerCase("de").trim();
    return units.filter((unit) => {
      if (civ !== "all" && !unit.civs.includes(civ)) return false;
      if (category !== "alle" && unit.category !== category) return false;
      if (age !== "all" && unit.minAge !== Number(age)) return false;
      if (uniqueOnly && !unit.unique) return false;
      if (!needle) return true;
      return `${unitName(unit)} ${unit.name} ${roleLabel(unit)}`
        .toLocaleLowerCase("de")
        .includes(needle);
    });
  }, [age, category, civ, deferredQuery, uniqueOnly, units]);

  const matchupSettings = useMemo(
    () => ({ ...DEFAULT_SETTINGS, age: 4 }),
    [],
  );
  const favored = useMemo(
    () => getFavoredTargets(units, selected, matchupSettings, 5),
    [matchupSettings, selected, units],
  );
  const threats = useMemo(
    () => getThreats(units, selected, matchupSettings, 5),
    [matchupSettings, selected, units],
  );

  const mainWeapon = selected.weapons[0];
  const civsText =
    selected.civs.length > 3
      ? `${selected.civs.length} Zivilisationen`
      : selected.civs.map(civName).join(", ") || "Spezialformation";

  return (
    <div className="explorer-page">
      <section className="explorer-browser">
        <header className="section-header">
          <div>
            <h1>Alle Einheiten</h1>
            <p>
              {units.length} militärische Einträge · {civilizations.length} Zivilisationen
            </p>
          </div>
          <ListFilter size={20} />
        </header>

        <div className="explorer-filters">
          <label className="search-field search-field--large">
            <Search size={16} />
            <span className="sr-only">Einheit suchen</span>
            <input
              value={query}
              type="search"
              name="explorer-unit-search"
              autoComplete="off"
              spellCheck={false}
              placeholder="Einheit suchen …"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="filter-row">
            <label>
              <span className="sr-only">Zivilisation</span>
              <select
                name="explorer-civilization"
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
            </label>
            <label>
              <span className="sr-only">Kategorie</span>
              <select
                name="explorer-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="sr-only">Zeitalter</span>
              <select
                name="explorer-age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              >
                <option value="all">Alle Zeitalter</option>
                {[1, 2, 3, 4].map((value) => (
                  <option value={value} key={value}>
                    {ageLabel(value)}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className={uniqueOnly ? "toggle-button is-active" : "toggle-button"}
              onClick={() => setUniqueOnly((value) => !value)}
            >
              <Sparkles size={14} /> Nur einzigartig
            </button>
          </div>
        </div>

        <div className="unit-table">
          <div className="unit-table__head">
            <span>Einheit</span>
            <span>Rolle</span>
            <span>Alter</span>
          </div>
          <div className="unit-table__body">
            {filtered.map((unit) => (
              <button
                type="button"
                key={unit.id}
                className={selected.id === unit.id ? "is-selected" : ""}
                onClick={() => onSelect(unit)}
              >
                <UnitAvatar unit={unit} size="small" />
                <span>
                  <strong>{unitName(unit)}</strong>
                  <small>
                    {unit.unique && unit.civs[0]
                      ? civName(unit.civs[0])
                      : unit.unique
                        ? "Einzigartig"
                        : "Standard"}
                  </small>
                </span>
                <span>{roleLabel(unit)}</span>
                <span>{["I", "II", "III", "IV"][unit.minAge - 1]}</span>
                <ChevronRight size={14} />
              </button>
            ))}
          </div>
          <footer aria-live="polite">
            <span>{filtered.length} Ergebnisse</span>
            <span>
              <Filter size={13} /> Filter wirken sofort
            </span>
          </footer>
        </div>
      </section>

      <section className="unit-dossier">
        <div className="unit-dossier__hero">
          <div className="dossier-portrait">
            <UnitAvatar unit={selected} size="dossier" />
            {selected.unique ? <span>Einzigartige Einheit</span> : null}
          </div>
          <div className="dossier-summary">
            <span className="dossier-summary__meta">
              {civsText} · {ageLabel(selected.minAge)}
            </span>
            <h2>{unitName(selected)}</h2>
            <strong>{roleLabel(selected)}</strong>
            <p>{shortDescription(selected)}</p>
            <div className="dossier-stats">
              <Stat icon={Heart} label="Leben" value={selected.hp || "–"} />
              <Stat
                icon={Swords}
                label="Angriff"
                value={mainWeapon?.damage || "–"}
              />
              <Stat
                icon={Shield}
                label="Rüstung"
                value={`${selected.armor.melee}/${selected.armor.ranged}`}
              />
              <Stat
                icon={Footprints}
                label="Tempo"
                value={selected.movement?.toFixed(2) || "–"}
              />
              <Stat
                icon={Coins}
                label="Kosten"
                value={selected.costs.total || "Spez."}
              />
            </div>
            <button
              className="primary-button"
              type="button"
              onClick={() => onOpenLab(selected)}
            >
              Im Counter-Lab öffnen <ArrowRight size={16} />
            </button>
          </div>
          <div className="effect-triangle">
            <span>Effektivitäts-Logik</span>
            <div>
              <i className="effect-triangle__strong">
                <ArrowUpRight />
                <b>Stark gegen</b>
              </i>
              <Swords />
              <i className="effect-triangle__weak">
                <ArrowDownRight />
                <b>Schwach gegen</b>
              </i>
            </div>
            <p>Klassenbonus schlägt Rohwert. Positionierung schlägt Theorie.</p>
          </div>
        </div>

        <div className="dossier-tabs" role="tablist">
          {[
            ["matchups", "Matchups", Target],
            ["stats", "Werte", BarChart3],
            ["usage", "Einsatz", Crosshair],
          ].map(([id, label, Icon]) => (
            <button
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={tab === id ? "is-active" : ""}
              key={id}
              onClick={() => setTab(id)}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {tab === "matchups" ? (
          <div className="dossier-matchups">
            <div className="dossier-matchups__section">
              <header>
                <span>Stark gegen</span>
                <small>Gute Ziele bei gleichem Ressourcenwert</small>
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
                <span>Schwach gegen</span>
                <small>Diese Einheiten bestrafen den Einsatz</small>
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
              <span>Grundwerte</span>
              <dl>
                <dt>Trefferpunkte</dt>
                <dd>{selected.hp || "–"}</dd>
                <dt>Nahkampfrüstung</dt>
                <dd>{selected.armor.melee}</dd>
                <dt>Fernkampfrüstung</dt>
                <dd>{selected.armor.ranged}</dd>
                <dt>Bewegung</dt>
                <dd>{selected.movement?.toFixed(3) || "–"} Felder/s</dd>
                <dt>Bevölkerung</dt>
                <dd>{selected.costs.popcap || "–"}</dd>
              </dl>
            </div>
            <div>
              <span>Bewaffnung</span>
              {selected.weapons.length ? (
                selected.weapons.map((weapon) => (
                  <dl key={`${weapon.name}-${weapon.type}`}>
                    <dt>{weapon.name}</dt>
                    <dd>{weapon.damage} Schaden</dd>
                    <dt>Angriffstempo</dt>
                    <dd>{weapon.speed.toFixed(2)} s</dd>
                    <dt>Reichweite</dt>
                    <dd>{weapon.range.toFixed(1)}</dd>
                    <dt>Bonus-Gruppen</dt>
                    <dd>
                      {weapon.modifiers.length
                        ? weapon.modifiers.map((modifier) => `+${modifier.value}`).join(", ")
                        : "Keine"}
                    </dd>
                  </dl>
                ))
              ) : (
                <p>Keine direkte Angriffswaffe – diese Einheit gewinnt über Support.</p>
              )}
            </div>
            <div>
              <span>Ressourcen</span>
              <dl>
                {Object.entries(selected.costs)
                  .filter(([key, value]) => value && !["total", "popcap", "time"].includes(key))
                  .map(([key, value]) => (
                    <span key={key}>
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </span>
                  ))}
                <dt>Gesamtwert</dt>
                <dd>{selected.costs.total || "Spezial"}</dd>
                <dt>Produktionszeit</dt>
                <dd>{selected.costs.time || "–"} s</dd>
              </dl>
            </div>
          </div>
        ) : null}

        {tab === "usage" ? (
          <div className="usage-sheet">
            <article>
              <span>01</span>
              <div>
                <h3>Zielpriorität</h3>
                <p>
                  Greife zuerst Einheiten an, gegen deren Klasse ein echter
                  Bonus hinterlegt ist. Überkill vermeiden, Feuer verteilen.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Formation</h3>
                <p>
                  {selected.category === "fernkampf"
                    ? "Breite Linie und Abstand. Die Frontlinie muss Kontakt verhindern."
                    : selected.category === "kavallerie"
                      ? "Seitlich ansetzen, nicht frontal in Speere oder Engpässe."
                      : selected.category === "belagerung"
                        ? "Hinter der Armee parken, Sicht geben und nie ungeschützt rotieren."
                        : "Kontaktfläche kontrollieren: nicht alle Einheiten gleichzeitig einkesseln lassen."}
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Abbruchregel</h3>
                <p>
                  Wenn der Gegner deinen natürlichen Counter in Masse zeigt,
                  nicht „mehr vom Falschen“ bauen: Produktion wechseln, Zeit
                  kaufen, erhaltene Armee mit einer zweiten Einheit ergänzen.
                </p>
              </div>
            </article>
          </div>
        ) : null}
      </section>
    </div>
  );
}

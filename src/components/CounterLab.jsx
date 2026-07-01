import {
  ArrowDown,
  ArrowLeftRight,
  ChevronRight,
  Coins,
  Crosshair,
  Equal,
  Footprints,
  Info,
  Map,
  Minus,
  Mountain,
  Plus,
  RotateCcw,
  Shield,
  Sparkles,
  Swords,
  Trees,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  ageLabel,
  civName,
  roleLabel,
  shortDescription,
  unitName,
} from "../data/localization";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  getCounterCandidates,
} from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";
import UnitPicker from "./UnitPicker";

function SettingButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      className={active ? "is-active" : ""}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function MatchupUnit({ unit, side, onChoose }) {
  return (
    <button
      type="button"
      className={`matchup-unit matchup-unit--${side}`}
      onClick={onChoose}
      aria-label={`${unitName(unit)} ändern`}
    >
      <span className="matchup-unit__label">
        {side === "mine" ? "Meine Einheit" : "Gegner wählen"}
      </span>
      <UnitAvatar unit={unit} size="hero" decorative />
      <span className="matchup-unit__copy">
        <strong>{unitName(unit)}</strong>
        <span>{roleLabel(unit)}</span>
        <small>
          {ageLabel(unit.minAge)}
          {unit.unique && unit.civs[0] ? ` · ${civName(unit.civs[0])}` : ""}
        </small>
      </span>
      <span className="matchup-unit__stats">
        <b>
          <Shield size={13} /> {unit.hp || "–"} LP
        </b>
        <b>
          <Footprints size={13} /> {unit.movement?.toFixed(2) || "–"}
        </b>
        <b>
          <Coins size={13} /> {unit.costs.total || "Spezial"}
        </b>
      </span>
    </button>
  );
}

function Alternatives({ candidates, target, onSelect }) {
  return (
    <aside className="alternative-rail">
      <div className="rail-heading">
        <div>
          <span>Antworten auf</span>
          <strong>{unitName(target)}</strong>
        </div>
        <Crosshair size={19} />
      </div>
      <div className="alternative-list">
        {candidates.map(({ unit, result }, index) => (
          <button
            type="button"
            key={unit.id}
            className="alternative-row"
            onClick={() => onSelect(unit)}
          >
            <span className="alternative-row__rank">0{index + 1}</span>
            <UnitAvatar unit={unit} size="medium" />
            <span>
              <strong>{unitName(unit)}</strong>
              <small>{roleLabel(unit)}</small>
              <i className={`match-tone match-tone--${result.verdict.tone}`}>
                {result.verdict.short}
              </i>
            </span>
            <ChevronRight size={15} />
          </button>
        ))}
      </div>
      <p className="rail-note">
        <Info size={14} />
        Sortiert nach gleichem Ressourcenwert, aktuellem Zeitalter und deinen
        Kampfvariablen.
      </p>
    </aside>
  );
}

function Variables({ settings, onChange }) {
  function patch(values) {
    onChange({ ...settings, ...values });
  }

  return (
    <section className="variables-band">
      <div className="variables-band__title">
        <Sparkles size={17} />
        <div>
          <strong>Kampf-Variablen</strong>
          <span>Das dreht enge Matchups</span>
        </div>
      </div>

      <div className="variable-group">
        <span>
          <Coins size={15} /> Vergleich
        </span>
        <div className="segmented">
          <SettingButton
            active={settings.mode === "resources"}
            onClick={() => patch({ mode: "resources" })}
          >
            <Coins size={13} /> Ressourcen
          </SettingButton>
          <SettingButton
            active={settings.mode === "count"}
            onClick={() => patch({ mode: "count" })}
          >
            <Users size={13} /> 1 : 1
          </SettingButton>
        </div>
      </div>

      <div className="variable-group variable-group--stepper">
        <span>
          <Zap size={15} /> Mein Upgrade
        </span>
        <div>
          <button
            type="button"
            onClick={() =>
              patch({ upgrades: Math.max(-2, settings.upgrades - 1) })
            }
            aria-label="Upgrade-Nachteil erhöhen"
          >
            <Minus size={13} />
          </button>
          <strong>
            {settings.upgrades > 0 ? "+" : ""}
            {settings.upgrades}
          </strong>
          <button
            type="button"
            onClick={() =>
              patch({ upgrades: Math.min(2, settings.upgrades + 1) })
            }
            aria-label="Upgrade-Vorteil erhöhen"
          >
            <Plus size={13} />
          </button>
        </div>
      </div>

      <div className="variable-group">
        <span>
          <Map size={15} /> Gelände
        </span>
        <div className="icon-segments">
          <SettingButton
            active={settings.terrain === "offen"}
            onClick={() => patch({ terrain: "offen" })}
          >
            <Mountain size={14} /> Offen
          </SettingButton>
          <SettingButton
            active={settings.terrain === "engpass"}
            onClick={() => patch({ terrain: "engpass" })}
          >
            <ArrowDown size={14} /> Engpass
          </SettingButton>
          <SettingButton
            active={settings.terrain === "wald"}
            onClick={() => patch({ terrain: "wald" })}
          >
            <Trees size={14} /> Wald
          </SettingButton>
        </div>
      </div>

      <div className="variable-group">
        <span>
          <Crosshair size={15} /> Micro
        </span>
        <div className="segmented">
          {[
            ["amove", "A-Move"],
            ["solide", "Solide"],
            ["stark", "Stark"],
          ].map(([value, label]) => (
            <SettingButton
              key={value}
              active={settings.micro === value}
              onClick={() => patch({ micro: value })}
            >
              {label}
            </SettingButton>
          ))}
        </div>
      </div>
    </section>
  );
}

function DrillTeaser({ target, onOpenDrills }) {
  return (
    <section className="drill-teaser">
      <div className="drill-teaser__index">
        <Swords />
        <span>Nächster Drill</span>
      </div>
      <div className="drill-teaser__copy">
        <strong>Antwort unter Zeitdruck</strong>
        <p>
          Der Gegner zeigt <b>{unitName(target)}</b>. Wähle in 12 Sekunden die
          beste bezahlbare Antwort.
        </p>
      </div>
      <div className="drill-teaser__meta">
        <span>Ziel</span>
        <strong>3 Entscheidungen in Folge</strong>
      </div>
      <div className="drill-teaser__meta">
        <span>Belohnung</span>
        <strong>+25 Lernpunkte</strong>
      </div>
      <button className="primary-button" type="button" onClick={onOpenDrills}>
        Drill starten <Swords size={16} />
      </button>
    </section>
  );
}

export default function CounterLab({
  units,
  civilizations,
  initialMine,
  initialEnemy,
  onOpenDrills,
  onOpenUnit,
}) {
  const [mine, setMine] = useState(initialMine);
  const [enemy, setEnemy] = useState(initialEnemy);
  const [pickerSide, setPickerSide] = useState("mine");
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const result = useMemo(
    () => calculateMatchup(mine, enemy, settings),
    [enemy, mine, settings],
  );
  const alternatives = useMemo(
    () => getCounterCandidates(units, enemy, settings, 4),
    [enemy, settings, units],
  );

  function selectFromPicker(unit) {
    if (pickerSide === "mine") setMine(unit);
    else setEnemy(unit);
  }

  function swap() {
    setMine(enemy);
    setEnemy(mine);
  }

  return (
    <div className="counter-layout">
      <UnitPicker
        units={units}
        civilizations={civilizations}
        selected={pickerSide === "mine" ? mine : enemy}
        onSelect={selectFromPicker}
      />

      <div className="counter-workspace">
        <section className="matchup-arena">
          <div className="matchup-arena__topline">
            <div>
              <span>Aktives Matchup</span>
              <strong>
                {settings.mode === "resources"
                  ? `${settings.budget} Ressourcen pro Seite`
                  : "Gleiche Anzahl"}
              </strong>
            </div>
            <div className="age-switcher" aria-label="Zeitalter">
              {[2, 3, 4].map((age) => (
                <button
                  type="button"
                  key={age}
                  className={settings.age === age ? "is-active" : ""}
                  onClick={() => setSettings({ ...settings, age })}
                >
                  {["I", "II", "III", "IV"][age - 1]}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="text-button"
              onClick={() => setSettings(DEFAULT_SETTINGS)}
            >
              <RotateCcw size={14} /> Zurücksetzen
            </button>
          </div>

          <div className="matchup-stage">
            <MatchupUnit
              unit={mine}
              side="mine"
              onChoose={() => setPickerSide("mine")}
            />

            <div className={`verdict verdict--${result.verdict.tone}`}>
              <button type="button" onClick={swap} aria-label="Einheiten tauschen">
                <ArrowLeftRight size={18} />
              </button>
              <span>gegen</span>
              <div className="verdict__arrow" aria-hidden="true">
                <i />
                <b />
              </div>
              <strong>{result.verdict.label}</strong>
              <p>
                {result.comparable
                  ? `${result.confidence}% Modell-Sicherheit`
                  : "Keine sinnvolle Simulation"}
              </p>
            </div>

            <MatchupUnit
              unit={enemy}
              side="enemy"
              onChoose={() => setPickerSide("enemy")}
            />
          </div>

          <div className="selection-steps">
            <button
              type="button"
              className={pickerSide === "mine" ? "is-active" : ""}
              onClick={() => setPickerSide("mine")}
            >
              <span>1</span>
              <div>
                <small>Einheit wählen</small>
                <strong>{unitName(mine)}</strong>
              </div>
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              className={pickerSide === "enemy" ? "is-active" : ""}
              onClick={() => setPickerSide("enemy")}
            >
              <span>2</span>
              <div>
                <small>Ziel wählen</small>
                <strong>{unitName(enemy)}</strong>
              </div>
              <ChevronRight size={16} />
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => onOpenUnit(mine)}
            >
              Dossier öffnen <ChevronRight size={16} />
            </button>
          </div>
        </section>

        <section className="why-panel">
          <div className="why-panel__intro">
            <span>Warum dieses Matchup so kippt</span>
            <h2>{result.verdict.label}</h2>
            <p>
              {result.comparable
                ? shortDescription(mine)
                : "Wähle zwei Einheiten aus derselben Kampfumgebung."}
            </p>
          </div>
          <div className="reason-grid">
            {result.reasons.map((reason) => (
              <article key={reason.title}>
                <span className={reason.good ? "is-good" : "is-bad"}>
                  {reason.good ? <Trophy size={17} /> : <Zap size={17} />}
                </span>
                <div>
                  <strong>{reason.title}</strong>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="matchup-legend">
            <span>
              <i className="legend-dot legend-dot--green" /> Klarer Counter
            </span>
            <span>
              <i className="legend-dot legend-dot--gold" /> Skill-Matchup
            </span>
            <span>
              <i className="legend-dot legend-dot--red" /> Harter Nachteil
            </span>
          </div>
        </section>

        <Variables settings={settings} onChange={setSettings} />
        <DrillTeaser target={enemy} onOpenDrills={onOpenDrills} />
      </div>

      <Alternatives
        candidates={alternatives}
        target={enemy}
        onSelect={(unit) => {
          setMine(unit);
          setPickerSide("mine");
        }}
      />
    </div>
  );
}

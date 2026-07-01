import {
  ArrowDown,
  ArrowLeftRight,
  ChevronRight,
  Coins,
  Crosshair,
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
import { memo, useMemo, useState } from "react";
import { romanAge } from "../data/localization";
import { useI18n } from "../i18n/LanguageProvider.jsx";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  getCounterCandidates,
} from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";
import UnitPicker from "./UnitPicker";

// Wie viele direkte Counter-Vorschläge das Lab anzeigt.
const COUNTER_SUGGESTIONS_LIMIT = 4;

const SettingButton = memo(
  /**
   * @param {{ active: boolean, children: import("react").ReactNode, onClick: () => void }} props
   */
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
  },
);

function MatchupUnit({ unit, side, onChoose }) {
  const { t, unitName, roleLabel, civName, ageLabel } = useI18n();
  return (
    <button
      type="button"
      className={`matchup-unit matchup-unit--${side}`}
      onClick={onChoose}
      aria-label={t("lab.change", { name: unitName(unit) })}
    >
      <span className="matchup-unit__label">
        {side === "mine" ? t("lab.mine") : t("lab.enemy")}
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
          <Shield size={13} /> {unit.hp || "–"} {t("lab.hp")}
        </b>
        <b>
          <Footprints size={13} /> {unit.movement?.toFixed(2) || "–"}
        </b>
        <b>
          <Coins size={13} /> {unit.costs.total || t("lab.special")}
        </b>
      </span>
    </button>
  );
}

const Alternatives = memo(
  /**
   * @param {{ candidates: import("../types.js").CounterCandidate[], target: import("../types.js").Unit, onSelect: (unit: import("../types.js").Unit) => void }} props
   */
  function Alternatives({ candidates, target, onSelect }) {
    const { t, unitName, roleLabel } = useI18n();
    return (
      <aside className="alternative-rail">
        <div className="rail-heading">
          <div>
            <span>{t("lab.answersTo")}</span>
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
          {t("lab.railNote")}
        </p>
      </aside>
    );
  },
);

function Variables({ settings, onChange }) {
  const { t } = useI18n();

  function patch(values) {
    onChange({ ...settings, ...values });
  }

  return (
    <section className="variables-band">
      <div className="variables-band__title">
        <Sparkles size={17} />
        <div>
          <strong>{t("lab.variables")}</strong>
          <span>{t("lab.variablesSub")}</span>
        </div>
      </div>

      <div className="variable-group">
        <span title={t("lab.compareHelp")}>
          <Coins size={15} /> {t("lab.compare")}
        </span>
        <div className="segmented">
          <SettingButton
            active={settings.mode === "resources"}
            onClick={() => patch({ mode: "resources" })}
          >
            <Coins size={13} /> {t("lab.resources")}
          </SettingButton>
          <SettingButton
            active={settings.mode === "count"}
            onClick={() => patch({ mode: "count" })}
          >
            <Users size={13} /> {t("lab.oneVsOne")}
          </SettingButton>
        </div>
      </div>

      <div className="variable-group variable-group--stepper">
        <span title={t("lab.upgradeHelp")}>
          <Zap size={15} /> {t("lab.myUpgrade")}
        </span>
        <div>
          <button
            type="button"
            onClick={() =>
              patch({ upgrades: Math.max(-2, settings.upgrades - 1) })
            }
            aria-label={t("lab.upgradeDown")}
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
            aria-label={t("lab.upgradeUp")}
          >
            <Plus size={13} />
          </button>
        </div>
      </div>

      <div className="variable-group">
        <span>
          <Map size={15} /> {t("lab.terrain")}
        </span>
        <div className="icon-segments">
          <SettingButton
            active={settings.terrain === "offen"}
            onClick={() => patch({ terrain: "offen" })}
          >
            <Mountain size={14} /> {t("lab.terrainOpen")}
          </SettingButton>
          <SettingButton
            active={settings.terrain === "engpass"}
            onClick={() => patch({ terrain: "engpass" })}
          >
            <ArrowDown size={14} /> {t("lab.terrainChoke")}
          </SettingButton>
          <SettingButton
            active={settings.terrain === "wald"}
            onClick={() => patch({ terrain: "wald" })}
          >
            <Trees size={14} /> {t("lab.terrainForest")}
          </SettingButton>
        </div>
      </div>

      <div className="variable-group">
        <span title={t("lab.microHelp")}>
          <Crosshair size={15} /> {t("lab.micro")}
        </span>
        <div className="segmented">
          {[
            ["amove", t("lab.microAmove")],
            ["solide", t("lab.microSolid")],
            ["stark", t("lab.microStrong")],
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

      <p className="variables-band__help">{t("lab.variablesHelp")}</p>
    </section>
  );
}

function DrillTeaser({ target, onOpenDrills }) {
  const { t, unitName } = useI18n();
  return (
    <section className="drill-teaser">
      <div className="drill-teaser__index">
        <Swords />
        <span>{t("lab.nextDrill")}</span>
      </div>
      <div className="drill-teaser__copy">
        <strong>{t("lab.drillTitle")}</strong>
        <p>
          {t("lab.drillBodyPre")}
          <b>{unitName(target)}</b>
          {t("lab.drillBodyPost")}
        </p>
      </div>
      <div className="drill-teaser__meta">
        <span>{t("lab.drillGoal")}</span>
        <strong>{t("lab.drillGoalValue")}</strong>
      </div>
      <div className="drill-teaser__meta">
        <span>{t("lab.drillReward")}</span>
        <strong>{t("lab.drillRewardValue")}</strong>
      </div>
      <button className="primary-button" type="button" onClick={onOpenDrills}>
        {t("lab.drillStart")} <Swords size={16} />
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
  const { t, lang, unitName, shortDescription } = useI18n();
  const [mine, setMine] = useState(initialMine);
  const [enemy, setEnemy] = useState(initialEnemy);
  const [pickerSide, setPickerSide] = useState("mine");
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const result = useMemo(
    () => calculateMatchup(mine, enemy, settings, lang),
    [enemy, mine, settings, lang],
  );
  const alternatives = useMemo(
    () =>
      getCounterCandidates(
        units,
        enemy,
        settings,
        COUNTER_SUGGESTIONS_LIMIT,
        lang,
      ),
    [enemy, settings, units, lang],
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
              <span>{t("lab.activeMatchup")}</span>
              <strong>
                {settings.mode === "resources"
                  ? t("lab.resourcesPerSide", { budget: settings.budget })
                  : t("lab.equalCount")}
              </strong>
            </div>
            <div className="age-switcher" aria-label={t("lab.age")}>
              {[2, 3, 4].map((age) => (
                <button
                  type="button"
                  key={age}
                  className={settings.age === age ? "is-active" : ""}
                  onClick={() => setSettings({ ...settings, age })}
                >
                  {romanAge(age)}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="text-button"
              onClick={() => setSettings(DEFAULT_SETTINGS)}
            >
              <RotateCcw size={14} /> {t("lab.reset")}
            </button>
          </div>

          <div className="matchup-stage">
            <MatchupUnit
              unit={mine}
              side="mine"
              onChoose={() => setPickerSide("mine")}
            />

            <div className={`verdict verdict--${result.verdict.tone}`}>
              <button type="button" onClick={swap} aria-label={t("lab.swap")}>
                <ArrowLeftRight size={18} />
              </button>
              <span>{t("lab.versus")}</span>
              <div className="verdict__arrow" aria-hidden="true">
                <i />
                <b />
              </div>
              <strong>{result.verdict.label}</strong>
              <p
                title={result.comparable ? t("lab.confidenceHint") : undefined}
              >
                {result.comparable
                  ? t("lab.confidence", { value: result.confidence })
                  : t("lab.noSim")}
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
                <small>{t("lab.step1")}</small>
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
                <small>{t("lab.step2")}</small>
                <strong>{unitName(enemy)}</strong>
              </div>
              <ChevronRight size={16} />
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => onOpenUnit(mine)}
            >
              {t("lab.openDossier")} <ChevronRight size={16} />
            </button>
          </div>
        </section>

        <section className="why-panel">
          <div className="why-panel__intro">
            <span>{t("lab.whyTitle")}</span>
            <h2>{result.verdict.label}</h2>
            <p>
              {result.comparable
                ? shortDescription(mine)
                : t("lab.pickSameEnv")}
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
              <i className="legend-dot legend-dot--green" />{" "}
              {t("lab.legendCounter")}
            </span>
            <span>
              <i className="legend-dot legend-dot--gold" />{" "}
              {t("lab.legendSkill")}
            </span>
            <span>
              <i className="legend-dot legend-dot--red" /> {t("lab.legendLoss")}
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

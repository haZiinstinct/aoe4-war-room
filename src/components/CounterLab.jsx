import {
  ArrowDown,
  ArrowLeftRight,
  Calculator,
  ChevronDown,
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
import { EDGE_DISPLAY_LIMIT, EDGE_THRESHOLDS } from "../lib/matchup.config";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  formatRatio,
  getCounterCandidates,
  statsAt,
} from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";
import UnitPicker from "./UnitPicker";

// Wie viele direkte Counter-Vorschläge das Lab anzeigt.
const COUNTER_SUGGESTIONS_LIMIT = 5;
const FACTOR_KEYS = [
  "focus",
  "approach",
  "terrain",
  "micro",
  "kite",
  "splash",
  "upgrade",
];

const SettingButton = memo(
  /**
   * @param {{ active: boolean, children: import("react").ReactNode, onClick: () => void }} props
   */
  function SettingButton({ active, children, onClick }) {
    return (
      <button
        type="button"
        className={active ? "is-active" : ""}
        aria-pressed={active}
        onClick={onClick}
      >
        {children}
      </button>
    );
  },
);

function MatchupUnit({ unit, side, age, onChoose }) {
  const { t, unitName, roleLabel, civName, ageLabel, formatNumber } = useI18n();
  const stats = statsAt(unit, age);
  const locked = unit.minAge > age;
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
          <Shield size={13} aria-hidden="true" /> {stats.hp || "–"}{" "}
          {t("lab.hp")}
        </b>
        <b>
          <Footprints size={13} aria-hidden="true" />{" "}
          {stats.movement
            ? formatNumber(Number(stats.movement.toFixed(2)))
            : "–"}
        </b>
        <b>
          <Coins size={13} aria-hidden="true" />{" "}
          {stats.costs.total || t("lab.special")}
        </b>
      </span>
      <span
        className={`matchup-unit__age ${locked ? "is-locked" : ""}`}
        title={
          locked
            ? t("lab.notYetAvailable", { age: romanAge(unit.minAge) })
            : undefined
        }
      >
        {locked
          ? t("lab.notYetAvailable", { age: romanAge(unit.minAge) })
          : t("lab.ageStats", { age: romanAge(stats.age ?? age) })}
      </span>
    </button>
  );
}

/** Logarithmische Vorteilsskala zwischen beiden Einheiten. */
function EdgeGauge({ result, mine, enemy }) {
  const { t, unitName, lang } = useI18n();
  if (!result.comparable) return null;
  const limit = EDGE_DISPLAY_LIMIT;
  const edge = result.edgeClamped ?? 0;
  const position = 50 + (edge / limit) * 50; // 0 … 100 (%)
  const tone = result.verdict.tone;
  const skillBand = (EDGE_THRESHOLDS.soft / limit) * 50;
  const hardBand = (EDGE_THRESHOLDS.hard / limit) * 50;
  const ticks = [];
  for (let value = -limit; value <= limit; value += 1) ticks.push(value);
  return (
    <div className={`edge-gauge edge-gauge--${tone}`}>
      <div className="edge-gauge__heading">
        <span>{t("lab.gaugeTitle")}</span>
        <strong>
          {t("lab.ratio", { value: formatRatio(result.ratio, lang) })}
        </strong>
      </div>
      <div className="edge-gauge__labels" aria-hidden="true">
        <span>{unitName(enemy)}</span>
        <span>{unitName(mine)}</span>
      </div>
      <div
        className="edge-gauge__track"
        role="img"
        aria-label={`${t("lab.ratio", { value: formatRatio(result.ratio, lang) })} – ${result.verdict.label}`}
      >
        <i
          className="edge-gauge__band edge-gauge__band--skill"
          style={{ left: `${50 - skillBand}%`, width: `${skillBand * 2}%` }}
        />
        <i
          className="edge-gauge__band edge-gauge__band--hard"
          style={{ left: 0, width: `${50 - hardBand}%` }}
        />
        <i
          className="edge-gauge__band edge-gauge__band--hard"
          style={{ left: `${50 + hardBand}%`, width: `${50 - hardBand}%` }}
        />
        {ticks.map((value) => (
          <i
            key={value}
            className={`edge-gauge__tick ${value === 0 ? "is-zero" : ""}`}
            style={{ left: `${50 + (value / limit) * 50}%` }}
          />
        ))}
        <b
          className="edge-gauge__fill"
          style={{
            left: `${Math.min(50, position)}%`,
            width: `${Math.abs(position - 50)}%`,
          }}
        />
        <em className="edge-gauge__marker" style={{ left: `${position}%` }} />
      </div>
      <p className="edge-gauge__hint">
        <Info size={13} aria-hidden="true" /> {t("lab.gaugeHint")}
      </p>
    </div>
  );
}

function factorList(side, t) {
  return FACTOR_KEYS.map((key) => ({ key, value: side.factors[key] }))
    .filter((entry) => Math.abs(entry.value - 1) >= 0.005)
    .map((entry) => ({
      ...entry,
      label: t(`lab.factor.${entry.key}`),
    }));
}

function CalculationPanel({ result, mine, enemy, settings }) {
  const { t, unitName, formatNumber, lang } = useI18n();
  const [open, setOpen] = useState(false);
  if (!result.comparable) return null;
  const sides = [
    { unit: mine, side: result.attacker, key: "mine" },
    { unit: enemy, side: result.defender, key: "enemy" },
  ];
  const fmt = (value, digits = 1) =>
    formatNumber(Number(Number(value).toFixed(digits)));
  const rows = [
    {
      key: "weapon",
      label: t("lab.calc.weapon"),
      render: ({ side }) => (
        <>
          <strong>{side.weapon.name || "–"}</strong>
          <small>
            {side.weapon.type === "siege"
              ? t("lab.calc.siegeArmor")
              : `${side.weapon.type} · ${t("explorer.range").toLowerCase()} ${fmt(side.weapon.range, 1)}`}
          </small>
        </>
      ),
    },
    {
      key: "hit",
      label: t("lab.calc.hit"),
      render: ({ side }) => (
        <>
          <strong>{fmt(side.weapon.hit, 0)}</strong>
          <small>
            {t("lab.calc.hitDetail", {
              damage: side.weapon.damage,
              bonus: side.weapon.bonus ? Math.round(side.weapon.bonus) : 0,
              armor: side.weapon.armor,
            })}
          </small>
        </>
      ),
    },
    {
      key: "dps",
      label: t("lab.calc.dps"),
      render: ({ side }) => (
        <>
          <strong>{fmt(side.weapon.dps, 2)}</strong>
          <small>
            {t("lab.calc.dpsDetail", {
              hit: fmt(side.weapon.hit, 0),
              speed: fmt(side.weapon.speed, 2),
            })}
          </small>
        </>
      ),
    },
    {
      key: "hp",
      label: t("lab.calc.hp"),
      render: ({ side }) => (
        <>
          <strong>{fmt(side.hp, 0)}</strong>
          <small>
            {side.stats.armor.melee}/{side.stats.armor.ranged}{" "}
            {t("stat.armor").toLowerCase()}
          </small>
        </>
      ),
    },
    {
      key: "count",
      label: t("lab.calc.count"),
      render: ({ side }) => (
        <>
          <strong>{fmt(side.count, 1)}</strong>
          <small>
            {settings.mode === "resources"
              ? t("lab.calc.countDetail", {
                  budget: settings.budget,
                  cost: side.cost,
                })
              : t("lab.calc.countOne")}
          </small>
        </>
      ),
    },
    {
      key: "strength",
      label: t("lab.calc.unitStrength"),
      render: ({ side }) => (
        <>
          <strong>{fmt(side.individual, 1)}</strong>
          <small>{t("lab.calc.unitStrengthDetail")}</small>
        </>
      ),
    },
    {
      key: "opening",
      label: t("lab.calc.opening"),
      render: ({ side }) => (
        <>
          <strong>
            {side.opening.freeDamage + side.opening.burst > 0
              ? `+${Math.round(side.opening.share * 100)} %`
              : "–"}
          </strong>
          <small>
            {t("lab.calc.openingDetail", {
              free: Math.round(side.opening.freeDamage),
              burst: Math.round(side.weapon.burstHit),
            })}
          </small>
        </>
      ),
    },
    {
      key: "factors",
      label: t("lab.calc.factors"),
      render: ({ side }) => {
        const factors = factorList(side, t);
        return (
          <>
            <strong>× {fmt(side.tactical, 2)}</strong>
            <small className="calc-factors">
              {factors.length
                ? factors.map((factor) => (
                    <span
                      key={factor.key}
                      className={factor.value >= 1 ? "is-good" : "is-bad"}
                    >
                      {factor.label} ×{fmt(factor.value, 2)}
                    </span>
                  ))
                : "–"}
            </small>
          </>
        );
      },
    },
    {
      key: "total",
      label: t("lab.calc.total"),
      render: ({ side }) => (
        <>
          <strong className="calc-total">{fmt(side.value, 0)}</strong>
          <small>
            {t("lab.calc.unitStrength").toLowerCase()} ×{" "}
            {t("lab.calc.count").toLowerCase()} ×{" "}
            {t("lab.calc.factors").toLowerCase()}
          </small>
        </>
      ),
    },
  ];
  return (
    <section className={`calc-panel ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="calc-panel__toggle"
        aria-expanded={open}
        aria-controls="calc-panel-body"
        onClick={() => setOpen((value) => !value)}
      >
        <Calculator size={17} aria-hidden="true" />
        <span>
          <strong>{t("lab.calcTitle")}</strong>
          <small>{t("lab.calcSub")}</small>
        </span>
        <em>{formatRatio(result.ratio, lang)}</em>
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      {open ? (
        <div className="calc-panel__body" id="calc-panel-body">
          <table className="calc-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">{t("lab.calcTitle")}</span>
                </th>
                {sides.map(({ unit, key }) => (
                  <th scope="col" key={key} className={`is-${key}`}>
                    <UnitAvatar unit={unit} size="small" decorative />
                    <span>{unitName(unit)}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className={`calc-row calc-row--${row.key}`}>
                  <th scope="row">{row.label}</th>
                  {sides.map((entry) => (
                    <td key={entry.key} className={`is-${entry.key}`}>
                      {row.render(entry)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="calc-panel__formula">
            <Info size={13} aria-hidden="true" /> {t("lab.calcFormula")}
          </p>
        </div>
      ) : null}
    </section>
  );
}

const Alternatives = memo(
  /**
   * @param {{ candidates: import("../types.js").CounterCandidate[], target: import("../types.js").Unit, civilizations: import("../types.js").Civilization[], civ: string, onCivChange: (civ: string) => void, onSelect: (unit: import("../types.js").Unit) => void }} props
   */
  function Alternatives({
    candidates,
    target,
    civilizations,
    civ,
    onCivChange,
    onSelect,
  }) {
    const { t, unitName, roleLabel, civName, lang } = useI18n();
    return (
      <aside className="alternative-rail">
        <div className="rail-heading">
          <div>
            <span>{t("lab.answersTo")}</span>
            <strong>{unitName(target)}</strong>
          </div>
          <Crosshair size={19} aria-hidden="true" />
        </div>
        <label className="rail-filter">
          <span>{t("lab.answersFrom")}</span>
          <select
            name="answer-civilization"
            value={civ}
            onChange={(event) => onCivChange(event.target.value)}
          >
            <option value="all">{t("picker.allCivs")}</option>
            {civilizations.map((civilization) => (
              <option key={civilization.code} value={civilization.code}>
                {civName(civilization.code)}
              </option>
            ))}
          </select>
        </label>
        <div className="alternative-list">
          {candidates.map(({ unit, result }, index) => {
            const share = Math.min(
              100,
              Math.round(
                (Math.max(0, result.edgeClamped ?? 0) / EDGE_DISPLAY_LIMIT) *
                  100,
              ),
            );
            return (
              <button
                type="button"
                key={unit.id}
                className="alternative-row"
                onClick={() => onSelect(unit)}
              >
                <span className="alternative-row__rank">0{index + 1}</span>
                <UnitAvatar unit={unit} size="medium" decorative />
                <span className="alternative-row__copy">
                  <strong>{unitName(unit)}</strong>
                  <small>{roleLabel(unit)}</small>
                  <span className="alternative-row__meter">
                    <i
                      className={`match-tone match-tone--${result.verdict.tone}`}
                    >
                      {result.verdict.short}
                    </i>
                    <em>{formatRatio(result.ratio, lang)}</em>
                  </span>
                  <span className="alternative-row__bar" aria-hidden="true">
                    <b style={{ width: `${share}%` }} />
                  </span>
                </span>
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            );
          })}
          {!candidates.length ? (
            <p className="empty-list">{t("lab.railEmpty")}</p>
          ) : null}
        </div>
        <p className="rail-note">
          <Info size={14} aria-hidden="true" />
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
        <Sparkles size={17} aria-hidden="true" />
        <div>
          <strong>{t("lab.variables")}</strong>
          <span>{t("lab.variablesSub")}</span>
        </div>
      </div>

      <div className="variable-group">
        <span title={t("lab.compareHelp")}>
          <Coins size={15} aria-hidden="true" /> {t("lab.compare")}
        </span>
        <div className="segmented">
          <SettingButton
            active={settings.mode === "resources"}
            onClick={() => patch({ mode: "resources" })}
          >
            <Coins size={13} aria-hidden="true" /> {t("lab.resources")}
          </SettingButton>
          <SettingButton
            active={settings.mode === "count"}
            onClick={() => patch({ mode: "count" })}
          >
            <Users size={13} aria-hidden="true" /> {t("lab.oneVsOne")}
          </SettingButton>
        </div>
      </div>

      <div className="variable-group variable-group--stepper">
        <span title={t("lab.upgradeHelp")}>
          <Zap size={15} aria-hidden="true" /> {t("lab.myUpgrade")}
        </span>
        <div>
          <button
            type="button"
            onClick={() =>
              patch({ upgrades: Math.max(-2, settings.upgrades - 1) })
            }
            aria-label={t("lab.upgradeDown")}
          >
            <Minus size={13} aria-hidden="true" />
          </button>
          <strong aria-live="polite">
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
            <Plus size={13} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="variable-group">
        <span>
          <Map size={15} aria-hidden="true" /> {t("lab.terrain")}
        </span>
        <div className="segmented">
          <SettingButton
            active={settings.terrain === "offen"}
            onClick={() => patch({ terrain: "offen" })}
          >
            <Mountain size={14} aria-hidden="true" /> {t("lab.terrainOpen")}
          </SettingButton>
          <SettingButton
            active={settings.terrain === "engpass"}
            onClick={() => patch({ terrain: "engpass" })}
          >
            <ArrowDown size={14} aria-hidden="true" /> {t("lab.terrainChoke")}
          </SettingButton>
          <SettingButton
            active={settings.terrain === "wald"}
            onClick={() => patch({ terrain: "wald" })}
          >
            <Trees size={14} aria-hidden="true" /> {t("lab.terrainForest")}
          </SettingButton>
        </div>
      </div>

      <div className="variable-group">
        <span title={t("lab.microHelp")}>
          <Crosshair size={15} aria-hidden="true" /> {t("lab.micro")}
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
        <Swords aria-hidden="true" />
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
        {t("lab.drillStart")} <Swords size={16} aria-hidden="true" />
      </button>
    </section>
  );
}

export default function CounterLab({
  units,
  civilizations,
  initialMine,
  initialEnemy,
  answerCiv,
  onAnswerCivChange,
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
        { ...settings, civ: answerCiv },
        COUNTER_SUGGESTIONS_LIMIT,
        lang,
      ),
    [enemy, settings, units, lang, answerCiv],
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
            <div
              className="age-switcher"
              role="group"
              aria-label={t("lab.age")}
            >
              {[2, 3, 4].map((age) => (
                <button
                  type="button"
                  key={age}
                  className={settings.age === age ? "is-active" : ""}
                  aria-pressed={settings.age === age}
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
              <RotateCcw size={14} aria-hidden="true" /> {t("lab.reset")}
            </button>
          </div>

          <div className="matchup-stage">
            <MatchupUnit
              unit={mine}
              side="mine"
              age={settings.age}
              onChoose={() => setPickerSide("mine")}
            />

            <div className={`verdict verdict--${result.verdict.tone}`}>
              <button type="button" onClick={swap} aria-label={t("lab.swap")}>
                <ArrowLeftRight size={18} aria-hidden="true" />
              </button>
              <span>{t("lab.versus")}</span>
              <div className="verdict__arrow" aria-hidden="true">
                <i />
                <b />
              </div>
              <strong>{result.verdict.label}</strong>
              {result.comparable ? (
                <em>{formatRatio(result.ratio, lang)}</em>
              ) : null}
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
              age={settings.age}
              onChoose={() => setPickerSide("enemy")}
            />
          </div>

          <EdgeGauge result={result} mine={mine} enemy={enemy} />

          <div className="selection-steps">
            <button
              type="button"
              className={pickerSide === "mine" ? "is-active" : ""}
              aria-pressed={pickerSide === "mine"}
              onClick={() => setPickerSide("mine")}
            >
              <span>1</span>
              <div>
                <small>{t("lab.step1")}</small>
                <strong>{unitName(mine)}</strong>
              </div>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={pickerSide === "enemy" ? "is-active" : ""}
              aria-pressed={pickerSide === "enemy"}
              onClick={() => setPickerSide("enemy")}
            >
              <span>2</span>
              <div>
                <small>{t("lab.step2")}</small>
                <strong>{unitName(enemy)}</strong>
              </div>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => onOpenUnit(mine)}
            >
              {t("lab.openDossier")}{" "}
              <ChevronRight size={16} aria-hidden="true" />
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
                  {reason.good ? (
                    <Trophy size={17} aria-hidden="true" />
                  ) : (
                    <Zap size={17} aria-hidden="true" />
                  )}
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

        <CalculationPanel
          result={result}
          mine={mine}
          enemy={enemy}
          settings={settings}
        />

        <Variables settings={settings} onChange={setSettings} />
        <DrillTeaser target={enemy} onOpenDrills={onOpenDrills} />
      </div>

      <Alternatives
        candidates={alternatives}
        target={enemy}
        civilizations={civilizations}
        civ={answerCiv}
        onCivChange={onAnswerCivChange}
        onSelect={(unit) => {
          setMine(unit);
          setPickerSide("mine");
        }}
      />
    </div>
  );
}

import {
  ArrowRight,
  Check,
  Clock3,
  Flame,
  RotateCcw,
  ShieldQuestion,
  Sparkles,
  Swords,
  Trophy,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider.jsx";
import { calculateMatchup, DEFAULT_SETTINGS } from "../lib/matchup";
import UnitAvatar from "./UnitAvatar";

const TARGET_POOL = [
  "horseman",
  "lancer",
  "man-at-arms",
  "archer",
  "crossbowman",
  "handcannoneer",
  "mangonel",
  "spearman",
  "war-elephant",
  "landsknecht",
  "longbowman",
  "janissary",
];

const ANSWER_POOL = [
  "archer",
  "horseman",
  "spearman",
  "crossbowman",
  "handcannoneer",
  "lancer",
  "mangonel",
  "springald",
  "camel-rider",
  "javelin-thrower",
  "culverin",
  "ghulam",
];

// Aus welchen Rang-Perzentilen die Falschantworten gezogen werden: ein guter,
// ein mittelmäßiger und der schlechteste Vorschlag neben der besten Antwort.
const DISTRACTOR_PERCENTILES = [0.35, 0.65];
const MAX_CHOICES = 4;

function createQuestion(units, index, lang) {
  const targetId = TARGET_POOL[index % TARGET_POOL.length];
  const target = units.find((unit) => unit.id === targetId) ?? units[0];
  const pool = ANSWER_POOL.map((id) =>
    units.find((unit) => unit.id === id),
  ).filter(Boolean);
  const ranked = pool
    .filter((unit) => unit.id !== target.id)
    .map((unit) => ({
      unit,
      result: calculateMatchup(unit, target, DEFAULT_SETTINGS, lang),
    }))
    .sort((a, b) => b.result.ratio - a.result.ratio);
  const best = ranked[0];
  const distractors = [
    ...DISTRACTOR_PERCENTILES.map((p) => ranked[Math.floor(ranked.length * p)]),
    ranked[ranked.length - 1],
  ].filter(Boolean);
  const choices = [best, ...distractors]
    .filter(
      (entry, position, array) =>
        array.findIndex((candidate) => candidate.unit.id === entry.unit.id) ===
        position,
    )
    .slice(0, MAX_CHOICES)
    .sort(
      (a, b) =>
        ((a.unit.id.charCodeAt(0) + index) % 7) -
        ((b.unit.id.charCodeAt(0) + index) % 7),
    );
  return { target, choices, best };
}

export default function DrillMode({ units, stats, onAnswered }) {
  const { t, lang, unitName, roleLabel } = useI18n();
  const [questionIndex, setQuestionIndex] = useState(
    stats.answered % TARGET_POOL.length,
  );
  const [selectedId, setSelectedId] = useState(null);
  const [answered, setAnswered] = useState(false);

  const question = useMemo(
    () => createQuestion(units, questionIndex, lang),
    [questionIndex, units, lang],
  );
  const selected = question.choices.find(
    (entry) => entry.unit.id === selectedId,
  );
  const correct = selectedId === question.best.unit.id;

  function choose(entry) {
    if (answered) return;
    setSelectedId(entry.unit.id);
  }

  function submit() {
    if (!selected || answered) return;
    setAnswered(true);
    onAnswered(correct);
  }

  function next() {
    setQuestionIndex((index) => index + 1);
    setSelectedId(null);
    setAnswered(false);
  }

  return (
    <div className="drill-page">
      <header className="drill-header">
        <div>
          <span>{t("drill.kicker")}</span>
          <h1>{t("drill.title")}</h1>
          <p>{t("drill.intro")}</p>
        </div>
        <div className="drill-scoreboard">
          <span>
            <Flame /> {t("drill.streak")} <strong>{stats.streak}</strong>
          </span>
          <span>
            <Trophy /> {t("drill.correct")} <strong>{stats.correct}</strong>
          </span>
          <span>
            <Swords /> {t("drill.played")} <strong>{stats.answered}</strong>
          </span>
        </div>
      </header>

      <section className="drill-board">
        <div className="drill-board__scenario">
          <div className="scenario-topline">
            <span>
              {t("drill.situation", {
                n: String(questionIndex + 1).padStart(2, "0"),
              })}
            </span>
            <span>
              <Clock3 size={14} /> {t("drill.targetTime")}
            </span>
          </div>
          <UnitAvatar unit={question.target} size="drill" />
          <span className="scenario-kicker">{t("drill.enemyMassing")}</span>
          <h2>{unitName(question.target)}</h2>
          <p>{roleLabel(question.target)}</p>
          <div className="scenario-conditions">
            <span>{t("drill.condResources")}</span>
            <span>{t("drill.condOpen")}</span>
            <span>{t("drill.condUpgrades")}</span>
          </div>
          <div className="scenario-question">
            <ShieldQuestion />
            <strong>{t("drill.question")}</strong>
          </div>
        </div>

        <div className="drill-board__answers">
          {question.choices.map((entry, index) => {
            const isSelected = selectedId === entry.unit.id;
            const showCorrect =
              answered && entry.unit.id === question.best.unit.id;
            const showWrong = answered && isSelected && !correct;
            return (
              <button
                type="button"
                key={entry.unit.id}
                className={[
                  "answer-option",
                  isSelected ? "is-selected" : "",
                  showCorrect ? "is-correct" : "",
                  showWrong ? "is-wrong" : "",
                ].join(" ")}
                onClick={() => choose(entry)}
              >
                <span className="answer-option__key">
                  {String.fromCharCode(65 + index)}
                </span>
                <UnitAvatar unit={entry.unit} size="medium" />
                <span>
                  <strong>{unitName(entry.unit)}</strong>
                  <small>{roleLabel(entry.unit)}</small>
                </span>
                {showCorrect ? <Check /> : showWrong ? <X /> : <ArrowRight />}
              </button>
            );
          })}

          {!answered ? (
            <button
              className="primary-button drill-submit"
              type="button"
              disabled={!selected}
              onClick={submit}
            >
              {t("drill.lockIn")} <Swords size={17} />
            </button>
          ) : (
            <div
              className={`drill-feedback ${
                correct ? "drill-feedback--correct" : "drill-feedback--wrong"
              }`}
              role="status"
              aria-live="polite"
            >
              <span>{correct ? <Check /> : <X />}</span>
              <div>
                <small>
                  {correct ? t("drill.cleanChoice") : t("drill.expensive")}
                </small>
                <h3>
                  {correct
                    ? t("drill.bestHere", { name: unitName(selected.unit) })
                    : t("drill.wouldBeBetter", {
                        name: unitName(question.best.unit),
                      })}
                </h3>
                <p>{question.best.result.reasons[0]?.text}</p>
              </div>
              <button type="button" onClick={next}>
                {t("drill.nextSituation")} <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="drill-principle">
        <Sparkles />
        <div>
          <span>{t("drill.keyRule")}</span>
          <strong>{t("drill.keyRuleTitle")}</strong>
          <p>{t("drill.keyRuleBody")}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedId(null);
            setAnswered(false);
          }}
        >
          <RotateCcw size={15} /> {t("drill.retry")}
        </button>
      </section>
    </div>
  );
}

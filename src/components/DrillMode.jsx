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
import { roleLabel, unitName } from "../data/localization";
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

function createQuestion(units, index) {
  const targetId = TARGET_POOL[index % TARGET_POOL.length];
  const target = units.find((unit) => unit.id === targetId) ?? units[0];
  const pool = ANSWER_POOL.map((id) =>
    units.find((unit) => unit.id === id),
  ).filter(Boolean);
  const ranked = pool
    .filter((unit) => unit.id !== target.id)
    .map((unit) => ({
      unit,
      result: calculateMatchup(unit, target, DEFAULT_SETTINGS),
    }))
    .sort((a, b) => b.result.ratio - a.result.ratio);
  const best = ranked[0];
  const distractors = [
    ranked[Math.floor(ranked.length * 0.35)],
    ranked[Math.floor(ranked.length * 0.65)],
    ranked[ranked.length - 1],
  ].filter(Boolean);
  const choices = [best, ...distractors]
    .filter(
      (entry, position, array) =>
        array.findIndex((candidate) => candidate.unit.id === entry.unit.id) ===
        position,
    )
    .slice(0, 4)
    .sort(
      (a, b) =>
        ((a.unit.id.charCodeAt(0) + index) % 7) -
        ((b.unit.id.charCodeAt(0) + index) % 7),
    );
  return { target, choices, best };
}

export default function DrillMode({ units, stats, onAnswered }) {
  const [questionIndex, setQuestionIndex] = useState(
    stats.answered % TARGET_POOL.length,
  );
  const [selectedId, setSelectedId] = useState(null);
  const [answered, setAnswered] = useState(false);

  const question = useMemo(
    () => createQuestion(units, questionIndex),
    [questionIndex, units],
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
          <span>Entscheidungs-Drill</span>
          <h1>Erkennen. Antworten. Kämpfen.</h1>
          <p>
            Nicht raten, sondern lesen: Klasse, Timing, Budget und Raum. Ein
            echter Counter ist eine Entscheidungskette.
          </p>
        </div>
        <div className="drill-scoreboard">
          <span>
            <Flame /> Serie <strong>{stats.streak}</strong>
          </span>
          <span>
            <Trophy /> Richtig <strong>{stats.correct}</strong>
          </span>
          <span>
            <Swords /> Gespielt <strong>{stats.answered}</strong>
          </span>
        </div>
      </header>

      <section className="drill-board">
        <div className="drill-board__scenario">
          <div className="scenario-topline">
            <span>Situation {String(questionIndex + 1).padStart(2, "0")}</span>
            <span>
              <Clock3 size={14} /> 12 Sekunden Zielzeit
            </span>
          </div>
          <UnitAvatar unit={question.target} size="drill" />
          <span className="scenario-kicker">Der Gegner massiert</span>
          <h2>{unitName(question.target)}</h2>
          <p>{roleLabel(question.target)}</p>
          <div className="scenario-conditions">
            <span>720 Ressourcen</span>
            <span>Offenes Feld</span>
            <span>Gleiche Upgrades</span>
          </div>
          <div className="scenario-question">
            <ShieldQuestion />
            <strong>Welche Antwort ist am zuverlässigsten?</strong>
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
              Antwort festlegen <Swords size={17} />
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
                  {correct ? "Saubere Entscheidung" : "Das wird teuer"}
                </small>
                <h3>
                  {correct
                    ? `${unitName(selected.unit)} ist hier die beste Antwort.`
                    : `${unitName(question.best.unit)} wäre zuverlässiger.`}
                </h3>
                <p>{question.best.result.reasons[0]?.text}</p>
              </div>
              <button type="button" onClick={next}>
                Nächste Situation <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="drill-principle">
        <Sparkles />
        <div>
          <span>Merksatz</span>
          <strong>Erst erkennen, dann produzieren.</strong>
          <p>
            Scoute die Produktionsgebäude, nicht erst die fertige Armee. Ein
            Counter, der 90 Sekunden zu spät kommt, ist keiner.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedId(null);
            setAnswered(false);
          }}
        >
          <RotateCcw size={15} /> Neu versuchen
        </button>
      </section>
    </div>
  );
}

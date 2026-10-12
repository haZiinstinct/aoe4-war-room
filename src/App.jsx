import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import AppShell from "./components/AppShell";
import CounterLab from "./components/CounterLab";
import DrillMode from "./components/DrillMode";
import FightIQ, { PRINCIPLE_IDS } from "./components/FightIQ";
import MethodologyDrawer from "./components/MethodologyDrawer";
import UnitExplorer from "./components/UnitExplorer";
import { civilizations, units } from "./data/units.generated";
import { usePersistedState } from "./hooks/usePersistedState";

const VALID_VIEWS = new Set(["lab", "units", "drills", "iq"]);

function byId(id, fallback = units[0]) {
  return units.find((unit) => unit.id === id) ?? fallback;
}

function viewFromHash() {
  const view = window.location.hash.slice(1);
  return VALID_VIEWS.has(view) ? view : "lab";
}

// Schema-Wächter für den persistierten Drill-Fortschritt. Verwirft veraltete
// oder manipulierte localStorage-Daten, statt sie mit falscher Form zu laden.
function isDrillStats(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.answered === "number" &&
    typeof value.correct === "number" &&
    typeof value.streak === "number"
  );
}

function isPrincipleList(value) {
  return (
    Array.isArray(value) &&
    value.every(
      (item) => typeof item === "string" && PRINCIPLE_IDS.includes(item),
    )
  );
}

const isCivChoice = (value) => typeof value === "string" && value.length <= 4;

// Lernfortschritt (0–100 %): transparent und in der UI erklärt —
// +4 % je richtiger Drill-Antwort, +6 % je bewusst angewendeter Kampfregel.
export const PROGRESS_PER_CORRECT = 4;
export const PROGRESS_PER_RULE = 6;
export function learningProgress(correct, appliedRules) {
  return Math.min(
    100,
    correct * PROGRESS_PER_CORRECT + appliedRules * PROGRESS_PER_RULE,
  );
}

export default function App() {
  const [activeView, setActiveView] = useState(viewFromHash);
  const [methodologyOpen, setMethodologyOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(() => byId("landsknecht"));
  const [labPair, setLabPair] = useState(() => ({
    mine: byId("crossbowman"),
    enemy: byId("man-at-arms"),
  }));
  const [drillStats, setDrillStats] = usePersistedState(
    "war-room-drills-v1",
    { answered: 0, correct: 0, streak: 0 },
    isDrillStats,
  );
  const [appliedRules, setAppliedRules] = usePersistedState(
    "war-room-iq-v1",
    /** @type {string[]} */ ([]),
    isPrincipleList,
  );
  const [answerCiv, setAnswerCiv] = usePersistedState(
    "war-room-answer-civ-v1",
    "all",
    isCivChoice,
  );

  const navigate = useCallback((view) => {
    if (!VALID_VIEWS.has(view)) return;
    setActiveView(view);
    const nextHash = `#${view}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }
  }, []);

  useEffect(() => {
    if (!VALID_VIEWS.has(window.location.hash.slice(1))) {
      window.history.replaceState(null, "", "#lab");
    }
    const syncViewFromHash = () => setActiveView(viewFromHash());
    window.addEventListener("hashchange", syncViewFromHash);
    return () => window.removeEventListener("hashchange", syncViewFromHash);
  }, []);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const resetScroll = () =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    window.addEventListener("pageshow", resetScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", resetScroll);
    };
  }, [activeView]);

  const progress = useMemo(
    () => learningProgress(drillStats.correct, appliedRules.length),
    [drillStats, appliedRules],
  );

  const toggleRule = useCallback(
    (id) => {
      setAppliedRules((current) =>
        current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id],
      );
    },
    [setAppliedRules],
  );

  function openUnit(unit) {
    setSelectedUnit(unit);
    navigate("units");
  }

  function openLab(mine, enemy = labPair.enemy) {
    setLabPair({ mine, enemy });
    navigate("lab");
  }

  function answerDrill(correct) {
    setDrillStats((current) => ({
      answered: current.answered + 1,
      correct: current.correct + (correct ? 1 : 0),
      streak: correct ? current.streak + 1 : 0,
    }));
  }

  return (
    <AppShell
      activeView={activeView}
      onViewChange={navigate}
      progress={progress}
      onOpenMethodology={() => setMethodologyOpen(true)}
    >
      {activeView === "lab" ? (
        <CounterLab
          key={`${labPair.mine.id}-${labPair.enemy.id}`}
          units={units}
          civilizations={civilizations}
          initialMine={labPair.mine}
          initialEnemy={labPair.enemy}
          answerCiv={answerCiv}
          onAnswerCivChange={setAnswerCiv}
          onOpenDrills={() => navigate("drills")}
          onOpenUnit={openUnit}
        />
      ) : null}

      {activeView === "units" ? (
        <UnitExplorer
          units={units}
          civilizations={civilizations}
          selected={selectedUnit}
          onSelect={setSelectedUnit}
          onOpenLab={openLab}
        />
      ) : null}

      {activeView === "drills" ? (
        <DrillMode units={units} stats={drillStats} onAnswered={answerDrill} />
      ) : null}

      {activeView === "iq" ? (
        <FightIQ applied={appliedRules} onToggleApplied={toggleRule} />
      ) : null}

      <MethodologyDrawer
        open={methodologyOpen}
        onClose={() => setMethodologyOpen(false)}
        unitCount={units.length}
        civCount={civilizations.length}
      />
    </AppShell>
  );
}

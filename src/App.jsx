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
import FightIQ from "./components/FightIQ";
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

export default function App() {
  const [activeView, setActiveView] = useState(viewFromHash);
  const [methodologyOpen, setMethodologyOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(() => byId("landsknecht"));
  const [labPair, setLabPair] = useState(() => ({
    mine: byId("crossbowman"),
    enemy: byId("man-at-arms"),
  }));
  const [drillStats, setDrillStats] = usePersistedState("war-room-drills-v1", {
    answered: 0,
    correct: 0,
    streak: 0,
  });

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

  const progress = useMemo(() => {
    if (!drillStats.answered) return 4;
    return Math.min(
      100,
      Math.round(
        drillStats.answered * 3 +
          (drillStats.correct / drillStats.answered) * 16,
      ),
    );
  }, [drillStats]);

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

      {activeView === "iq" ? <FightIQ /> : null}

      <MethodologyDrawer
        open={methodologyOpen}
        onClose={() => setMethodologyOpen(false)}
        unitCount={units.length}
        civCount={civilizations.length}
      />
    </AppShell>
  );
}

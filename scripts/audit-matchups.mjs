import assert from "node:assert/strict";
import { units, civilizations } from "../src/data/units.generated.js";
import {
  calculateMatchup,
  DEFAULT_SETTINGS,
  getCounterCandidates,
} from "../src/lib/matchup.js";

const byId = (id) => {
  const unit = units.find((candidate) => candidate.id === id);
  assert(unit, `Einheit fehlt im Datensatz: ${id}`);
  return unit;
};

const naturalCounters = [
  ["archer", "spearman"],
  ["spearman", "horseman"],
  ["horseman", "archer"],
  ["crossbowman", "man-at-arms"],
];

assert.equal(units.length, 205, "Militäreinheiten-Zahl hat sich unerwartet geändert");
assert.equal(
  civilizations.length,
  23,
  "Zivilisationen-Zahl hat sich unerwartet geändert",
);

for (const [attackerId, defenderId] of naturalCounters) {
  const result = calculateMatchup(
    byId(attackerId),
    byId(defenderId),
    DEFAULT_SETTINGS,
  );
  assert.equal(result.comparable, true, `${attackerId}/${defenderId} muss vergleichbar sein`);
  assert(
    result.ratio > 1.15,
    `${attackerId} muss gegen ${defenderId} einen natürlichen Vorteil zeigen`,
  );
}

const crossDomain = calculateMatchup(
  byId("spearman"),
  byId("galley"),
  DEFAULT_SETTINGS,
);
assert.equal(
  crossDomain.comparable,
  false,
  "Land- und Marineeinheiten dürfen nicht direkt verglichen werden",
);

const upgraded = calculateMatchup(byId("crossbowman"), byId("man-at-arms"), {
  ...DEFAULT_SETTINGS,
  upgrades: 2,
});
const downgraded = calculateMatchup(byId("crossbowman"), byId("man-at-arms"), {
  ...DEFAULT_SETTINGS,
  upgrades: -2,
});
assert(
  upgraded.ratio > downgraded.ratio,
  "Upgrade-Vorteil muss den Matchup-Score sichtbar erhöhen",
);

const candidates = getCounterCandidates(
  units,
  byId("man-at-arms"),
  DEFAULT_SETTINGS,
  8,
);
assert.equal(candidates.length, 8, "Counter-Liste muss vollständig erzeugt werden");
assert(
  candidates.every(({ unit }) => unit.category !== "support"),
  "Direkte Counter-Liste darf keine reinen Supporteinheiten enthalten",
);
assert(
  candidates.every(
    ({ result }, index, list) =>
      index === 0 || list[index - 1].result.ratio >= result.ratio,
  ),
  "Counter-Liste muss absteigend nach Vorteil sortiert sein",
);

console.log(
  `Matchup-Audit bestanden: ${naturalCounters.length} Kerncounter, ${units.length} Einheiten, ${civilizations.length} Zivilisationen.`,
);

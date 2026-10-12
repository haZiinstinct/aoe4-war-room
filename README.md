<div align="center">

<img src="docs/banner.svg" alt="WAR ROOM — Age of Empires IV Counter Lab" width="100%" />

<h1>WAR ROOM</h1>

<p><b>An interactive counter lab for Age of Empires IV.</b><br />
Learn which unit beats which — with an explainable matchup model, decision drills, and six practical combat rules.</p>

<p>
  <a href="https://aoe4.hazii.org"><img alt="Live demo" src="https://img.shields.io/badge/%E2%96%B6%20live%20demo-aoe4.hazii.org-e0b665?style=for-the-badge&labelColor=0b0e0d" /></a>
</p>

<p>
  <a href="https://github.com/haZiinstinct/aoe4-war-room/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/haZiinstinct/aoe4-war-room/actions/workflows/ci.yml/badge.svg" /></a>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-c89d4f" />
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue" />
  <img alt="React 19" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="Vite 8" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Languages DE / EN" src="https://img.shields.io/badge/languages-DE%20%2F%20EN-78a16e" />
  <img alt="Standalone single file" src="https://img.shields.io/badge/standalone-single%20file-6d5229" />
</p>

<sub><a href="#-four-ways-to-get-better">Modes</a> · <a href="#-how-the-model-works">How it works</a> · <a href="#-use-it">Use it</a> · <a href="#-tech--development">Tech</a> · <a href="#-data--sources">Data</a></sub>

</div>

---

WAR ROOM turns raw Age of Empires IV unit data into something you can actually
**learn from**. Instead of a static counter chart, it explains _why_ a matchup
tips the way it does — bonus damage, range, cost efficiency, terrain and micro —
and lets you change the fight and watch the answer change with it.

It runs as a **single HTML file**: open it, host it anywhere, or use the live
demo. No install, no account, no tracking.

## ✨ Highlights

- 🗡️ **205 units** across **23 civilizations**, **42,025** directed unit-vs-unit matchups, **355 age-specific stat variants**
- 🧠 **Explainable model** — every verdict comes with its reasoning, an advantage scale and a confidence score; close fights are flagged as _skill matchups_
- 🧮 **Show the maths** — one click opens the full, checkable calculation for both sides (damage per hit, DPS, HP, units per budget, opening damage, tactical factors)
- 🎚️ **Change the fight** — resources vs. 1-on-1, age (stats scale with it), upgrades, terrain and micro; watch tight matchups flip
- 🏰 **Your civ only** — filter counter suggestions to units your civilization can actually train
- 🌍 **German & English** — full UI toggle, your choice is remembered
- 🎯 **Real data** — pulled from [aoe4world/data](https://github.com/aoe4world/data), no made-up numbers
- 📦 **Standalone** — one self-contained file with embedded fonts, works offline (unit artwork loads online), deploy on any static host
- ♿ **Accessible & responsive** — keyboard-friendly (drills: `1–4` / `Enter`, search: `⌘/Ctrl K`), focus-managed, mobile-ready

## 🎮 Four ways to get better

|                      |                                                                                                                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚔️ **Counter Lab**   | Pick your unit and the enemy. Get a clear verdict (from _clear counter_ to _hard loss_), the combat-power ratio on a log scale, a model-confidence %, the reasons behind it and the full calculation. Ranked counter suggestions update as you tweak the combat variables. |
| 🔎 **Unit Explorer** | Browse and filter every unit. Each dossier shows stats, weapons, _strong against / weak against_ lists and concrete usage tips.                                                                                                                                            |
| ⏱️ **Drills**        | The enemy is massing something — pick the best affordable answer in 12 seconds. Your streak and progress are saved locally.                                                                                                                                                |
| 🧭 **Fight IQ**      | Six practical combat rules (scout production, compare resources, control the contact, play the space, target by value, switch before you must) plus a 10-second pre-fight checklist.                                                                                       |

## 🖼️ Screenshots

<div align="center">
  <img src="outputs/audit-desktop.png" alt="Counter Lab on desktop" width="90%" />
  <br /><br />
  <img src="outputs/audit-mobile.png" alt="Counter Lab on mobile" width="34%" />
</div>

> The app itself is bilingual — switch between 🇩🇪 Deutsch and 🇬🇧 English with the
> toggle in the top-right corner.

## 🧠 How the model works

The matchup score is a **learning model, not a frame-perfect combat simulator.**
It is built on Lanchester's square law in root form:

```
combat power = √(damage/s × hit points) × units × tactical factors
```

For each side, in the selected age, it computes

- **damage per hit** = base damage + class bonus − the armour that applies
  (melee or ranged; **siege damage ignores armour**, as in the game),
- **DPS** from the best sustained weapon (charges/lances count as a one-off
  **opening hit on contact**, not as DPS),
- **units per budget** (equal resources) or a straight **1-on-1**,
- **free damage on approach**: range lead ÷ the opponent's speed × DPS, scaled
  by your micro level,
- and factors for **class bonus (focus fire), terrain, micro, kiting, area
  damage and relative upgrade advantage**.

The two combat-power values form a ratio, rated on a log₂ scale (±0.3 = slight
edge, ±0.78 = clear counter), paired with a **model-confidence** value and shown
on an advantage scale. The _"Show the maths"_ panel lays out every number.

**Deliberate limits** — civilization bonuses, activated abilities, landmark
effects, formation depth, real pathfinding and patch special cases can flip a
result. That's exactly why close matchups are marked as _skill matchups_ rather
than pretending to be certain. All tuning constants are named and documented in
[`src/lib/matchup.config.js`](src/lib/matchup.config.js).

## 🚀 Use it

- **▶ Live demo:** **<https://aoe4.hazii.org>**
- **📥 Download:** grab `war-room.html` from the [latest release](https://github.com/haZiinstinct/aoe4-war-room/releases/latest) and open it by double-clicking.
- **🌐 Self-host:** it's a single static file — drop it on any webspace, Netlify Drop, GitHub Pages, etc. See [`deploy/`](deploy) for a ready-made CSP and step-by-step notes.

## 🛠️ Tech & development

React 19 + Vite 8, bundled into one file via `vite-plugin-singlefile`. Quality is
guarded by ESLint, Prettier, JSDoc type-checking, a Vitest suite (55 tests) and
GitHub Actions CI.

```bash
npm install
npm run dev        # local dev server on http://127.0.0.1:5173
npm run build      # production build → outputs/index.html (standalone)
npm run audit      # lint · typecheck · test · build · standalone check
```

Updating the game data:

```bash
git clone --depth 1 https://github.com/aoe4world/data.git work/aoe4world-data
npm run generate:data
```

The generator writes every unit with its per-age stat variants and data-driven
combat flags into `src/data/units.generated.js`. It **warns** when listed
special units disappear, when a bonus group no longer matches any unit, or when
new class tokens appear — so balance patches surface instead of silently
breaking the logic.

Optional cookieless analytics (GoatCounter) are only embedded when you build
with `VITE_GOATCOUNTER_CODE=<your-code>`; without it the file loads no external
script at all.

## 📊 Data & sources

- [Official civilization directory](https://www.ageofempires.com/civilizations/)
- [Official introduction to the counter principle](https://www.ageofempires.com/news/age-of-empires-iv-tips-to-help-you-get-started/)
- [aoe4world/data](https://github.com/aoe4world/data) — unit values extracted from the game files
- [aoe4world Explorer](https://aoe4world.com/explorer)

The exact upstream commit and patch date are recorded in the header of
`src/data/units.generated.js` and shown in the methodology dialog.

## ⚖️ Disclaimer

Age of Empires IV and related marks are property of their respective owners. This
is an **independent, non-commercial fan learning project** and is **not affiliated
with Microsoft or Relic Entertainment**. Unit values are derived from the
community dataset [aoe4world/data](https://github.com/aoe4world/data); unit
artwork and fonts load from their original sources and are not redistributed here.

## 📄 License

The project's own source code is released under the [MIT License](LICENSE). The
disclaimer above covers third-party names, marks and data.

<div align="center"><sub>Built by <a href="https://hazii.org">haZii</a> · <code>// webdesign: haZii.org</code></sub></div>

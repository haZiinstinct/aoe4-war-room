# Changelog

Alle nennenswerten Änderungen an WAR ROOM. Format angelehnt an
[Keep a Changelog](https://keepachangelog.com/de/1.1.0/); Versionierung nach
[SemVer](https://semver.org/lang/de/).

## [1.1.0] – 2026-07-01

### Hinzugefügt

- Vollständiger **Deutsch/Englisch-Modus** mit Umschalter; die Sprachwahl wird
  lokal gespeichert und `<html lang>` folgt ihr.
- Verständliche **Erklärungen**: Hilfetext zu den Kampfvariablen, Tooltips
  (Vergleich/Upgrade/Micro), Hinweis zur Bedeutung der Modell-Sicherheit.
- **Daten-getriebene Kampf-Flags** (`splash`, `antiInfantryMelee`, `formation`)
  aus der Generierungspipeline statt Runtime-Regexen, inklusive Drift-Warnungen
  bei Balance-Patches.
- **Tests & CI**: Vitest-Suite (31 Tests) und GitHub-Actions-Pipeline
  (Lint · Typecheck · Test · Build · Standalone-Check · Artefakt-Frische).
- **Tooling**: ESLint, Prettier, JSDoc-Typprüfung (`tsc --checkJs`).
- Release-Basis: Inline-Favicon, Open-Graph/Twitter-Meta, `<noscript>`-Fallback,
  ErrorBoundary (freundliche zweisprachige Fehlermeldung).

### Geändert

- Alle Modell-Konstanten benannt und dokumentiert (`src/lib/matchup.config.js`).
- Webfonts laden nicht-render-blockierend (`<link rel="preload">`).
- Der Datenstand wird über den Upstream-Commit im generierten File belegt statt
  über ein festes Datum.

### Behoben

- **Font-Overflow**: lange Verdikt-Labels liefen aus ihrem Rahmen
  (Desktop und Mobile, Deutsch und Englisch).
- localStorage-Daten werden gegen ihr Schema validiert; veraltete/kaputte Stände
  werden verworfen statt falsch geladen.

## [1.0.0] – 2026-07-01

- Erste Standalone-Version: 205 militärische Einheiten, 42.025 gerichtete
  Paarungen, Counter-Lab, Einheiten-Explorer, Entscheidungs-Drills und Fight IQ
  als einzelne, offline nutzbare HTML-Datei.

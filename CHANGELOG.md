# Changelog

Alle nennenswerten Änderungen an WAR ROOM. Format angelehnt an
[Keep a Changelog](https://keepachangelog.com/de/1.1.0/); Versionierung nach
[SemVer](https://semver.org/lang/de/).

## [1.3.0] – 2026-07-02

### Hinzugefügt

- **Selbst gehostete Webfonts** (`@fontsource`, nur genutzte Gewichte,
  Latin-Subset): beim Build in die Single-File eingebettet – kein
  Google-Fonts-Request mehr, DSGVO-konform. Die CSP ist entsprechend verschärft
  (`font-src 'self' data:`, keine googleapis/gstatic), gzip/brotli für Text in
  `.htaccess`/nginx.
- **Social-Sharing**: gerendertes `og-image.png` (1200×630) und
  `apple-touch-icon.png` (180×180) im Brand-Look, plus OpenGraph-/Twitter-Meta
  (`summary_large_image`) und `canonical`.
- **Cookielose Statistik** via GoatCounter (optional, Platzhalter-Code) mit
  Transparenz-Hinweis im Methodik-Dialog.
- **Sprach-Autoerkennung** beim ersten Besuch (`navigator.language`); die
  gespeicherte Wahl behält Vorrang.
- **⌘/Strg + K** fokussiert das Einheiten-Suchfeld.
- **Datenstand-Anzeige** (aoe4world-Commit) im Methodik-Dialog.
- Test für i18n-Schlüssel (DE/EN-Parität + jeder statische `t()`-Schlüssel
  existiert) im CI-Gate.

### Geändert

- **Barrierefreiheit**: bessere Kontraste (WCAG), deutlich sichtbarer
  Fokus-Ring, größere Antipp-Flächen auf Touch (≥ 44 px), `aria-controls` an den
  Fight-IQ-Toggles, redundante Einheiten-Icons als dekorativ ausgezeichnet.

## [1.2.0] – 2026-07-01

### Hinzugefügt

- **Drill-Countdown**: Jede Situation hat jetzt einen echten 12-Sekunden-Timer,
  den man startet, der sichtbar herunterläuft (Ziffer + Balken) und bei Ablauf
  automatisch auflöst – die aktuelle Auswahl zählt.
- **MIT-Lizenz** (`LICENSE`) für den Projekt-Quellcode.
- Live-Demo unter <https://aoe4.hazii.org> (Standalone auf eigenem Webspace, mit
  CSP- und Security-Header-Härtung) sowie eine gebrandete, englischsprachige
  README mit Banner und Badges.

### Geändert

- `UnitAvatar` folgt jetzt der gewählten Sprache (Alt-Text und Fallback-Initialen).
- Die Einheitensuche normalisiert in der aktiven Sprache statt fest auf Deutsch.
- Effizienz: Waffenprofil-Cache spart Wiederholungen beim Aufbau der
  Counter-Kandidatenlisten.

### Sicherheit

- Vollständiges Code-Audit (Sicherheit, Bugs, Effizienz): keine
  Sicherheitslücken, 0 Dependency-Vulnerabilities.
- Die Demo ist auf `noindex` gesetzt (Meta-Tag + `X-Robots-Tag`-Header).

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

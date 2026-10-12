# Changelog

Alle nennenswerten Änderungen an WAR ROOM. Format angelehnt an
[Keep a Changelog](https://keepachangelog.com/de/1.1.0/); Versionierung nach
[SemVer](https://semver.org/lang/de/).

## [2.0.0] – 2026-10-12

Vollständiger Full-Stack-Audit mit neu durchgerechnetem Modell, Zeitalter-
genauen Daten und komplett überarbeiteter Oberfläche.

### Hinzugefügt

- **Zeitalter-Werte je Einheit**: Der Generator übernimmt jetzt alle
  Varianten aus aoe4world (355 Zeitalter-Varianten für 205 Einheiten). Das
  Lab vergleicht beide Seiten im gewählten Zeitalter (II/III/IV), das Dossier
  zeigt Werte für I–IV umschaltbar. Vorher wurde z. B. ein Feudal-Bogenschütze
  gegen einen Castle-Man-at-Arms gerechnet.
- **Vorteilsskala** (logarithmisch, ±3 Verdopplungen) und das Verhältnis
  „Kampfkraft x : 1" direkt im Verdikt, in den Counter-Vorschlägen, im
  Dossier und in den Drills.
- **„Die Rechnung"**: aufklappbares Panel im Lab mit der kompletten,
  nachrechenbaren Herleitung je Seite (Schaden je Treffer, DPS, LP,
  Einheiten im Budget, Stärke je Einheit, Eröffnung, Taktikfaktoren,
  Kampfkraft).
- **Civ-Filter für Antworten**: „Antworten aus: …" beschränkt die Counter-
  Vorschläge auf Einheiten, die die eigene Zivilisation bauen kann (wird
  gespeichert).
- **Tastatursteuerung in den Drills** (1–4 / A–D wählen, Enter startet,
  bestätigt, weiter) und Kampfkraft-Vergleich im Feedback.
- **Lesbare Bonusgruppen** im Dossier („+10 gegen Schwere Einheiten") und
  Waffen-Kennzeichnung (Sturmangriff, Belagerungsschaden).
- Angewendete Fight-IQ-Regeln werden gespeichert und fließen in den
  Lernfortschritt ein.
- Patch-Datum des Datenstands im Methodik-Dialog.
- Prettier-Check in der CI.

### Geändert

- **Modell v2 (`src/lib/matchup.js`)** – Lanchester-Quadratgesetz in
  Wurzelform, bewusst mit physikalisch begründeten Faktoren:
  - Belagerungsschaden ignoriert Rüstung (wie im Spiel).
  - Sturmangriffe (Lanze/Charge, Abklingzeit < 0,6 s) zählen als einmaliger
    Eröffnungsschaden statt als Dauer-DPS – vorher verdoppelte ein Charge die
    DPS von Feuerlanzen/Elefanten.
  - Reichweitenvorsprung wird als **freier Schaden beim Anlaufen** gerechnet
    (Reichweite ÷ Tempo des Gegners × DPS, skaliert mit Micro) statt als
    Pauschalfaktor je Feld.
  - Tech-Upgrade-, Platzhalter- und Stellungs-Waffen (improved, incendiary,
    dummy, Spearwall, Rammbock gegen Einheiten) werden nicht mehr als
    Basiswaffen gewertet.
  - Klassen-Tokens, die Bonusgruppen referenzieren (scout, crossbowman,
    archer ship, …), bleiben erhalten – vorher griffen diese Boni nie.
  - Verdikt-Schwellen neu auf log₂-Skala kalibriert (±0,3 leichter Vorteil,
    ±0,78 klarer Counter); vorher waren 57 % aller Paarungen „klarer Counter".
  - Helden/Anführer (Khan, König, Jeanne) erscheinen nicht mehr als
    Counter-Vorschlag.
- **Oberfläche komplett überarbeitet**: ein Token-System statt gestapelter
  Override-Pässe, Mindestschriftgröße 11 px, kompaktere Hero-Platten,
  Kategorie-Glyph als Bild-Fallback (offline sauber), Mobil-Menü mit
  Fortschritt, Methodik-Dialog auf Mobil erreichbar (war zuvor unerreichbar).
- Lernfortschritt ist jetzt transparent: +4 % je richtiger Drill-Antwort,
  +6 % je angewendeter Regel (die Oberfläche erklärt die Formel).
- GoatCounter wird nur noch eingebettet, wenn `VITE_GOATCOUNTER_CODE` beim
  Build gesetzt ist – ohne Code lädt die Datei kein externes Script.
- Tooling: Vite 8, Vitest 5, @vitejs/plugin-react 6, lucide-react 1.x,
  React 19.3; CI auf Node 22.

### Behoben

- Methodik-Dialog war auf Mobilgeräten nicht erreichbar.
- Bonusschaden gegen Späher, Armbrustschützen und Bogenschiffe griff nie.
- „Adjustable Crossbars"/„Kilij"-Upgradewaffen und „(translation not found)"-
  Platzhalter flossen als Basiswerte ein.
- Rammböcke tauchten als Counter gegen Infanterie auf.

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

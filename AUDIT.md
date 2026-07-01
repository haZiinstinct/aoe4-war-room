# WAR ROOM — Design- und Funktionsaudit

Stand: 1. Juli 2026

## Ergebnis

Die Anwendung ist als statische Einzeldatei releasefähig. Der Produktions-Build
enthält Oberfläche, Daten und Counter-Logik in `outputs/index.html`; es bestehen
keine lokalen JavaScript-, CSS- oder Bildabhängigkeiten.

## Geprüfter Umfang

- 205 militärische Einträge aus 23 Zivilisationen
- 42.025 gerichtete Einheit-gegen-Einheit-Paarungen
- getrennte Land- und Marinevergleiche
- Ressourcen- und 1:1-Vergleich
- Upgrades, Gelände und Micro als veränderbare Kampfvariablen
- Einheitenlexikon, Filter, Dossiers, Counter-Lab, Drills und Fight IQ

## Automatisierte Prüfungen

`npm.cmd run audit` führt fünf Stufen aus (identisch zur GitHub-Actions-CI):

1. ESLint (React/Hooks, keine ungenutzten Symbole, strikte Gleichheit)
2. JSDoc-Typprüfung (`tsc --checkJs`, ohne Emit)
3. Vitest-Suite (Kernlogik, Waffenprofil, Gelände/Micro/Splash, verdict-Schwellen,
   Counter-Kandidaten, Datensatz-Integrität, persistierte State-Validierung)
4. optimierter Vite-Produktions-Build
5. Standalone-Prüfung auf lokale Abhängigkeiten

Zusätzlich prüft die CI, dass das eingecheckte `outputs/index.html` zum aktuellen
Quellcode passt (Frische-Check).

Geprüfte Kernregeln (Auszug):

- Bogenschütze schlägt Speerträger
- Speerträger schlägt Reiter
- Reiter schlägt Bogenschütze
- Armbrustschütze schlägt Men-at-Arms
- Land- und Marineeinheiten werden nicht irreführend gegeneinander bewertet
- Upgrade-Vorteile verändern das Ergebnis
- Bonusschaden und Rüstung wirken richtungssicher
- Gelände-, Micro- und Splash-Variablen verschieben enge Matchups
- Counter-Vorschläge schließen Support- und Formations-Einheiten aus und bleiben
  sortiert

Ergebnis: alle Prüfungen bestanden (31 Tests). Build-Größe: rund 519 KB, rund
127 KB gzip.

## Wartbarkeit und Robustheit

- Kampf-Heuristiken (Belagerungs-Splash, Anti-Infanterie-Nahkampf, Formationen)
  sind daten-getriebene Flags aus der Generierungspipeline statt Laufzeit-Regexe;
  sie brechen bei Balance-Patches nicht mehr still, sondern lösen Warnungen aus.
- Alle Modell-Konstanten sind benannt und dokumentiert (`src/lib/matchup.config.js`).
- Der Refactor wurde gegen die alte Implementierung verifiziert: 210.125 Matchups
  über fünf Einstellungsprofile lieferten identische Ergebnisse.
- localStorage-Daten werden gegen ihr Schema validiert (veraltete/kaputte Stände
  werden verworfen statt falsch geladen).

## Browser- und Interaktionsaudit

Geprüft wurde die gebaute Datei aus `outputs`, nicht nur der Entwicklungsserver.

- Desktop: 1280 × 720, kein horizontaler Seiten-Overflow
- Tablet: 1024 × 768, kein horizontaler Seiten-Overflow
- Mobile: 390 × 844, kein horizontaler Seiten-Overflow
- keine Konsolenfehler oder Warnungen
- keine defekten, fertig geladenen Bilder im geprüften Zustand
- Direktlinks `#lab`, `#units`, `#drills` und `#iq` funktionieren
- aktive Navigation wird semantisch mit `aria-current` markiert
- Suche nach „Reiter“ liefert drei passende Ergebnisse und öffnet das Dossier
- Drill-Auswahl, Feedback und Fortschrittsanzeige funktionieren
- Drill-Fortschritt bleibt nach einem Reload erhalten
- Methodik-Dialog öffnet fokussiert, schließt per Escape und stellt den Fokus
  am Auslöser wieder her
- mobile Hauptnavigation wurde interaktiv geprüft

## Visuelles und typografisches Audit

Die Schriftrollen sind bewusst getrennt:

- Cormorant Garamond für dramatische, historische Überschriften
- Barlow Condensed für dichte Navigations- und Tabellentexte
- Inter für längere Erklärungen und Bedienoberflächen

Der Kontrast aus Kohle, warmem Gold, Rot und Grün erzeugt die gewünschte
Taktikraum-Ästhetik, während klare Flächen, Linien und Statusfarben die
Informationshierarchie tragen.

Der „Precision War Table“-Pass schärft die Oberfläche ohne Änderungen an
Inhalt, Navigation oder Kampfmodell:

- 96 × 96 px große Einheitenbilder bleiben in großen Portraits quadratisch und
  werden nicht mehr auf bis zu 304 px hohe Flächen verzerrt.
- Geätzte CSS-Rahmen, innere Bildplatten und kontrollierte Kantenlichter tragen
  die visuelle Größe, während das eigentliche Rasterbild in nativer Größe bleibt.
- Kohle (`#080b0a`), Messinggold (`#c99643`), helles Gold (`#e4b85f`),
  Taktikgrün (`#8eb17b`) und Warnrot (`#cc6754`) bilden ein verbindliches
  Oberflächensystem.
- Bedienrelevante Mikrotypografie wurde angehoben, Kontrast und Zeilenhöhe
  wurden erhöht; das mobile Verdict bleibt ohne Worttrennung lesbar.
- Hover-, Fokus-, Auswahl- und aktive Navigationszustände verwenden dieselbe
  1-px-Kanten-, Inset- und Lichtlogik.

Fokusmarkierungen, größere Touch-Ziele, reduzierte Animationen und
Safe-Area-Abstände wurden beibehalten.

Screenshots:

- `outputs/audit-desktop.png`
- `outputs/audit-mobile.png`

## Zugänglichkeit und Robustheit

- Skip-Link zum Hauptinhalt
- semantische Links für Navigation und Buttons für Aktionen
- eindeutige Hauptüberschrift je Ansicht
- sichtbare `:focus-visible`-Markierung
- beschriftete Such- und Auswahlfelder
- Live-Regionen für Ergebniszahl, Fortschritt und Drill-Feedback
- Fokusfalle, Escape-Schließen und Fokus-Rückgabe im Dialog
- explizite Bildabmessungen gegen Layout-Sprünge
- abgesicherte Local-Storage-Zugriffe für restriktive Browserumgebungen
- funktionierende Systemschrift-Fallbacks, falls Webfonts nicht laden

Die Oberfläche wurde gegen die
[Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines)
geprüft. Dies ist ein praxisorientiertes Audit, keine formale
WCAG-Zertifizierung.

## Bewusste Grenzen

- Das Counter-Ergebnis ist ein erklärbares Lernmodell, kein frame-genauer
  Kampfsimulator.
- Aktive Fähigkeiten, Landmark-Effekte, Formationen, Patch-Sonderfälle,
  Fokusfeuer und tatsächliche Wegfindung können enge Matchups drehen.
- Einheitengrafiken und Google Webfonts werden online geladen. Ohne Netz bleibt
  die App bedienbar und nutzt Fallback-Schriften, Bilder können dann fehlen.
- Bei Balance-Patches sollten die Quelldaten aktualisiert und der Audit erneut
  ausgeführt werden.

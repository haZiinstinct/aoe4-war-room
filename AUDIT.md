# WAR ROOM — Full-Stack-Audit v2.0.0

Stand: 12. Oktober 2026

## Ergebnis

Die Anwendung ist als statische Einzeldatei releasefähig. Der Produktions-Build
enthält Oberfläche, eingebettete Webfonts, Daten und Counter-Logik in
`outputs/index.html`; es bestehen keine lokalen JavaScript-, CSS- oder
Bildabhängigkeiten und ohne Build-Variable auch kein externes Script.

Der Audit hat drei Klassen von Befunden ergeben und alle behoben:

1. **Datenbasis**: Der Generator nahm je Einheit nur die erste
   aoe4world-Variante. Da Upstream je Zivilisation _und Zeitalter_ eigene
   Varianten führt, wurden z. B. Feudal-Bogenschützen (70 LP, 5 Schaden) gegen
   Castle-Men-at-Arms (155 LP, 4/4 Rüstung) gerechnet. Jetzt tragen alle 205
   Einheiten ihre 355 Zeitalter-Varianten; das Lab rechnet im gewählten
   Zeitalter.
2. **Modell**: Belagerungsschaden wurde durch Fernkampfrüstung gemindert
   (im Spiel ignoriert er Rüstung); Sturmangriffe (Lanze 0,525 s, Charge
   0,5 s) zählten als Dauer-DPS und verzerrten Feuerlanzen/Elefanten um
   Faktor 2–3; Upgrade- und Platzhalter-Waffen (`improved`, `incendiary`,
   `dummy`, Spearwall) galten als Basiswaffen; Rammböcke bekämpften
   Infanterie; die Bonusgruppen gegen Späher, Armbrustschützen und
   Bogenschiffe trafen nie, weil die Klassen-Tokens weggefiltert waren;
   57 % aller vergleichbaren Paarungen landeten bei „Klarer Counter“.
3. **Oberfläche**: Der Methodik-Dialog war auf Mobilgeräten unerreichbar
   (Button ausgeblendet, FAB nie sichtbar), Mikrotypografie bis 7 px wurde
   durch zwei nachträgliche Override-Pässe korrigiert, der Lernfortschritt
   versprach „+25 Lernpunkte“ ohne Umsetzung.

## Geprüfter Umfang

- 205 militärische Einträge aus 23 Zivilisationen, 355 Zeitalter-Varianten
- 42.025 gerichtete Einheit-gegen-Einheit-Paarungen, je Zeitalter II–IV
- getrennte Land- und Marinevergleiche
- Ressourcen- und 1:1-Vergleich
- Zeitalter, Upgrades, Gelände und Micro als veränderbare Kampfvariablen
- Einheitenlexikon, Filter, Dossiers, Counter-Lab mit Vorteilsskala und
  Rechnung, Drills mit Tastatursteuerung, Fight IQ mit gespeicherten Regeln

## Modell v2 – Durchrechnung

Kampfkraft je Seite = √(Schaden/s × LP) × Einheiten × Taktikfaktoren
(Lanchester-Quadratgesetz in Wurzelform). Alle Konstanten stehen benannt in
`src/lib/matchup.config.js`.

| Baustein                 | Umsetzung                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Schaden je Treffer       | Grundschaden + Klassenbonus − zutreffende Rüstung (melee/ranged); siege: keine Rüstung |
| DPS                      | beste Dauerwaffe ÷ Angriffszeit; Burst-Waffen ausgeschlossen                           |
| Einheiten                | Budget ÷ Kosten (Ressourcen) oder 1                                                    |
| Eröffnung                | Reichweitenvorsprung ÷ Gegner-Tempo × DPS × Micro-Faktor + 0,6 × Sturmangriff          |
| Klassenbonus (Fokus)     | 1 + min(0,75; 0,7 × Bonus ÷ Grundschaden)                                              |
| Gelände / Micro / Kiting | multiplikative Faktoren 0,86 … 1,18                                                    |
| Fläche                   | Mangonel & Co. ×2,1, Cleave-Nahkampf ×1,45 (nur Ressourcenvergleich)                   |
| Upgrade                  | 1 + 0,08 je Stufe Vorsprung                                                            |
| Verdikt                  | log₂(Ratio): ±0,3 leichter Vorteil, ±0,78 klarer Counter, dazwischen Skill-Matchup     |

Kalibrierung gegen die Spiel-Lehre (Ressourcenvergleich, Zeitalter IV):

| Paarung                    | Kampfkraft | Verdikt          |
| -------------------------- | ---------- | ---------------- |
| Speerträger → Reiter       | 3,5 : 1    | Klarer Counter   |
| Speerträger → Ritter       | 3,3 : 1    | Klarer Counter   |
| Reiter → Bogenschütze      | 4,5 : 1    | Klarer Counter   |
| Reiter → Armbrustschütze   | 4,3 : 1    | Klarer Counter   |
| Bogenschütze → Speerträger | 2,4 : 1    | Klarer Counter   |
| Armbrustschütze → MAA      | 1,3 : 1    | Leichter Vorteil |
| Armbrustschütze → Ritter   | 1,4 : 1    | Leichter Vorteil |
| Springald → Mangonel       | 3,5 : 1    | Klarer Counter   |
| Kamelreiter → Ritter       | 2,3 : 1    | Klarer Counter   |
| Ritter ↔ Man-at-Arms       | 1,0 : 1    | Skill-Matchup    |
| Bogenschütze ↔ Armbrust    | 1,3 : 1    | Leichter Vorteil |
| Mangonel → Ritter          | 1 : 14     | Harter Nachteil  |

Verteilung über alle 32.208 vergleichbaren Land/Land- bzw. See/See-Paarungen
(Standardeinstellungen): 33 % klarer Counter, 9,5 % leichter Vorteil, 14 %
Skill-Matchup, 9,5 % leichter Nachteil, 33 % harter Nachteil – symmetrisch
(edge(a,b) = −edge(b,a) ist durch Tests abgesichert).

Bewusst sichtbar gemacht: Im Imperialzeitalter senkt die 6er-Fernkampfrüstung
der Men-at-Arms den Armbrust-Vorteil auf „leichter Vorteil“ – das Modell
zeigt die Rechnung dazu.

## Automatisierte Prüfungen

`npm run audit` führt fünf Stufen aus (identisch zur GitHub-Actions-CI, dort
zusätzlich Prettier-Check und Frische-Check des Artefakts):

1. ESLint (React/Hooks, keine ungenutzten Symbole, strikte Gleichheit)
2. JSDoc-Typprüfung (`tsc --checkJs`, ohne Emit)
3. Vitest-Suite, 55 Tests: Kern-Counter in allen Zeitaltern,
   Antisymmetrie, Zeitalter-Varianten, Belagerung ohne Rüstung, Sturmangriff,
   Anlaufzeit, Micro, Gelände, Splash, Upgrades, Ressourcen-Masse,
   Verdikt-Schwellen, Civ-/Zeitalter-Filter, Helden-Ausschluss,
   Datensatz-Integrität (Varianten, Waffen, Rammböcke), i18n-Parität,
   persistierter State
4. optimierter Vite-8-Produktions-Build
5. Standalone-Prüfung auf lokale Abhängigkeiten

Ergebnis: alle Prüfungen bestanden. Build-Größe: rund 922 KB (davon
~500 KB eingebettete Fonts), rund 339 KB gzip.

`npm audit`: 0 Laufzeit-Schwachstellen. Drei High-Meldungen betreffen
`braces` (transitiv über `vite-plugin-singlefile` → `micromatch`), ein reines
Build-Werkzeug ohne Anteil am ausgelieferten Artefakt; die von npm angebotene
„Fix“-Variante wäre ein Downgrade des Plugins auf 0.9 und wurde verworfen.

## Browser- und Interaktionsaudit

Geprüft wurde die gebaute Datei aus `outputs`, nicht nur der
Entwicklungsserver, in Chromium (Playwright):

- Desktop 1440 × 900, Laptop 1280 × 800, Tablet 1024 × 768, Mobile 390 × 844:
  kein horizontaler Seiten-Overflow in allen vier Ansichten
- keine Seitenfehler, keine Konsolenfehler außer blockierten Bildladungen in
  der Sandbox (data.aoe4world.com ist dort nicht erreichbar)
- Direktlinks `#lab`, `#units`, `#drills` und `#iq` funktionieren
- Rechnungs-Panel, Methodik-Dialog, Stats-Tab mit Zeitalter-Umschalter und
  Drill-Tastatursteuerung interaktiv geprüft
- Methodik-Dialog ist auf Mobil über die Topbar erreichbar; das Mobil-Menü
  zeigt den Lernfortschritt mit Formel

Ohne erreichbare Einheitenbilder zeigt die Oberfläche einen Kategorie-Glyph
plus Initialen auf der Platte – dieser Zustand ist bewusst gestaltet.

## Visuelles und typografisches Audit

Stylesheet v2 ersetzt drei gestapelte Pässe durch ein Token-System
(Flächen, Linien, Tinte, Marke, Typo-Rollen, Abstände, Bewegung):

- Mindestschriftgröße 11 px, Fließtext 12–14 px, Überschriften in Cormorant
  Garamond, Navigation/Tabellen in Barlow Condensed, Bedienflächen in Inter
- Hero-Platten 200 × 232 px mit geätztem Innenrahmen; das 96-px-Rasterbild
  bleibt in nativer Größe (128 px Platte)
- Vorteilsskala: log₂-Spur mit Skill-Band, Verdopplungs-Ticks und Marker;
  Farbcode Grün/Gold/Rot identisch zu Verdikt, Legende und Countern
- Rechnungstabelle mit tabellarischen Ziffern, Faktoren als Chips
- Hover-, Fokus-, Auswahl- und aktive Zustände nutzen dieselbe
  1-px-Kanten-, Inset- und Lichtlogik; `aria-pressed` auf allen
  Umschaltern

Fokusmarkierungen, Touch-Ziele ≥ 44 px, reduzierte Animationen und
Safe-Area-Abstände wurden beibehalten.

Screenshots:

- `outputs/audit-desktop.png`
- `outputs/audit-mobile.png`

## Zugänglichkeit und Robustheit

- Skip-Link zum Hauptinhalt, semantische Links für Navigation, Buttons für
  Aktionen, `aria-pressed`/`aria-expanded`/`aria-controls` an Umschaltern
- eindeutige Hauptüberschrift je Ansicht, Vorteilsskala mit `role="img"` und
  Textalternative
- Live-Regionen für Ergebniszahl, Fortschritt und Drill-Feedback
- Fokusfalle, Escape-Schließen und Fokus-Rückgabe im Dialog
- explizite Bildabmessungen gegen Layout-Sprünge
- abgesicherte Local-Storage-Zugriffe mit Schema-Validierung
- funktionierende Systemschrift-Fallbacks, falls eingebettete Fonts nicht
  greifen

## Bewusste Grenzen

- Das Counter-Ergebnis ist ein erklärbares Lernmodell, kein frame-genauer
  Kampfsimulator.
- Zivilisationsboni, aktive Fähigkeiten, Landmark-Effekte, Formationen,
  Patch-Sonderfälle, Fokusfeuer und tatsächliche Wegfindung können enge
  Matchups drehen.
- Einheitengrafiken werden online von aoe4world geladen; ohne Netz bleibt
  die App voll bedienbar (Fonts sind eingebettet).
- Datenstand: aoe4world/data @ b2cd382 (Patch vom 4. Mai 2026, Season 13).
  Bei Balance-Patches `npm run generate:data` ausführen und den Audit
  wiederholen.

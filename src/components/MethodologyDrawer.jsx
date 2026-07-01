import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  Scale,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function MethodologyDrawer({ open, onClose, unitCount, civCount }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="drawer-backdrop">
      <button
        className="drawer-dismiss"
        type="button"
        tabIndex={-1}
        aria-label="Methodik schließen"
        onClick={onClose}
      />
      <aside
        ref={drawerRef}
        className="methodology-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="methodology-title"
        aria-describedby="methodology-description"
      >
        <header>
          <div>
            <BookOpen aria-hidden="true" />
            <span>Transparente Methodik</span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Schließen"
          >
            <X aria-hidden="true" />
          </button>
        </header>
        <div className="methodology-drawer__body">
          <h2 id="methodology-title">Was dieser Score kann – und was nicht.</h2>
          <p id="methodology-description">
            WAR ROOM ist ein Lernmodell, kein Frame-genauer Kampfsimulator. Es
            erklärt natürliche Vorteile und zwingt die wichtigsten Variablen
            sichtbar in die Entscheidung.
          </p>

          <dl className="methodology-facts">
            <div>
              <dt>{unitCount}</dt>
              <dd>militärische Einträge</dd>
            </div>
            <div>
              <dt>{civCount}</dt>
              <dd>Zivilisationen</dd>
            </div>
            <div>
              <dt>{unitCount * unitCount}</dt>
              <dd>gerichtete Paarungen</dd>
            </div>
          </dl>

          <section>
            <h3>
              <FlaskConical aria-hidden="true" /> Was einfließt
            </h3>
            <ul>
              <li>
                <CheckCircle2 aria-hidden="true" /> Klassen- und Bonus-Schaden aus den aktuellen
                Einheitendaten
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Trefferpunkte, Rüstung, Angriffstempo und
                Reichweite
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Kostenvergleich oder gleiche Einheitenzahl
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Gelände, Micro-Niveau und relativer
                Upgrade-Vorteil
              </li>
            </ul>
          </section>

          <section>
            <h3>
              <Scale aria-hidden="true" /> Wichtige Grenzen
            </h3>
            <p>
              Zivilisationsboni, aktivierte Fähigkeiten, Landmark-Effekte,
              Formationstiefe, echte Pfadfindung und Patch-Sonderfälle können
              das Resultat drehen. Deshalb zeigt die App zusätzlich eine
              Modell-Sicherheit und markiert enge Ergebnisse als
              Skill-Matchup.
            </p>
          </section>

          <section className="source-list">
            <h3>Quellen</h3>
            <a
              href="https://www.ageofempires.com/civilizations/"
              target="_blank"
              rel="noreferrer"
            >
              Offizielles Zivilisationsverzeichnis
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://www.ageofempires.com/news/age-of-empires-iv-tips-to-help-you-get-started/"
              target="_blank"
              rel="noreferrer"
            >
              Offizielle Einführung in das Counter-Prinzip
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://github.com/aoe4world/data"
              target="_blank"
              rel="noreferrer"
            >
              AoE4 World – aus Spieldateien extrahierte Einheitenwerte
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://aoe4world.com/explorer"
              target="_blank"
              rel="noreferrer"
            >
              AoE4 World Explorer
              <ExternalLink aria-hidden="true" />
            </a>
          </section>

          <small>
            Datenstand: 30. Juni 2026. Age of Empires IV und zugehörige
            Bezeichnungen sind Eigentum ihrer jeweiligen Rechteinhaber. Dieses
            unabhängige Lernprojekt ist nicht mit Microsoft verbunden.
          </small>
        </div>
      </aside>
    </div>
  );
}

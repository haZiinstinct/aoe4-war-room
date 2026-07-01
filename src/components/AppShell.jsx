import {
  BookOpen,
  BrainCircuit,
  GraduationCap,
  Info,
  Menu,
  Search,
  Swords,
  X,
} from "lucide-react";
import { useState } from "react";

export const NAV_ITEMS = [
  { id: "lab", label: "Counter-Lab", short: "Lab", icon: Swords },
  { id: "units", label: "Alle Einheiten", short: "Einheiten", icon: Search },
  { id: "drills", label: "Drills", short: "Drills", icon: GraduationCap },
  { id: "iq", label: "Fight IQ", short: "Fight IQ", icon: BrainCircuit },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 58" role="img">
        <path d="M4 3h40v34L24 54 4 37Z" />
        <path d="M24 8v38M10 15l14 9 14-9M12 34l12-10 12 10" />
        <circle cx="24" cy="24" r="3" />
      </svg>
    </span>
  );
}

export default function AppShell({
  activeView,
  onViewChange,
  progress,
  onOpenMethodology,
  children,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(event, view) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    onViewChange(view);
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <header className="topbar">
        <a
          className="brand"
          href="#lab"
          onClick={(event) => navigate(event, "lab")}
          aria-label="WAR ROOM Startseite"
          translate="no"
        >
          <BrandMark />
          <span className="brand__copy">
            <span className="brand__name">WAR ROOM</span>
            <span className="brand__sub">AOE IV COUNTER LAB</span>
          </span>
        </a>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Hauptnavigation"
        >
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeView === id ? "is-active" : ""}
              aria-current={activeView === id ? "page" : undefined}
              onClick={(event) => navigate(event, id)}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <div className="topbar__utility">
          <div
            className="progress-meter"
            aria-label={`${progress}% Lernfortschritt`}
            aria-live="polite"
          >
            <span>Fortschritt</span>
            <strong>{progress}%</strong>
            <i>
              <b style={{ width: `${progress}%` }} />
            </i>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Methodik und Quellen"
            title="Methodik und Quellen"
            onClick={onOpenMethodology}
          >
            <BookOpen size={19} aria-hidden="true" />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {activeView === "lab" ? (
          <h1 className="visually-hidden">Age of Empires IV Counter-Lab</h1>
        ) : null}
        {children}
      </main>

      <nav className="mobile-nav" aria-label="Mobile Navigation">
        {NAV_ITEMS.map(({ id, short, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeView === id ? "is-active" : ""}
            aria-current={activeView === id ? "page" : undefined}
            onClick={(event) => navigate(event, id)}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{short}</span>
          </a>
        ))}
      </nav>

      <button className="source-fab" type="button" onClick={onOpenMethodology}>
        <Info size={15} aria-hidden="true" />
        Methodik
      </button>
    </div>
  );
}

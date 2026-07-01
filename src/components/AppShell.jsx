import {
  BookOpen,
  BrainCircuit,
  GraduationCap,
  Info,
  Languages,
  Menu,
  Search,
  Swords,
  X,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider.jsx";

// Reihenfolge + Icons der Navigation; die Labels kommen sprachabhängig aus t().
const NAV_ITEMS = [
  { id: "lab", icon: Swords },
  { id: "units", icon: Search },
  { id: "drills", icon: GraduationCap },
  { id: "iq", icon: BrainCircuit },
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

function LanguageToggle() {
  const { lang, setLang, t } = useI18n();
  const next = lang === "de" ? "en" : "de";
  return (
    <button
      className="lang-toggle"
      type="button"
      onClick={() => setLang(next)}
      aria-label={`${t("lang.switch")} (${t(`lang.${next}`)})`}
      title={t("lang.switch")}
    >
      <Languages size={16} aria-hidden="true" />
      <span>{lang.toUpperCase()}</span>
    </button>
  );
}

export default function AppShell({
  activeView,
  onViewChange,
  progress,
  onOpenMethodology,
  children,
}) {
  const { t } = useI18n();
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
        {t("app.skip")}
      </a>
      <header className="topbar">
        <a
          className="brand"
          href="#lab"
          onClick={(event) => navigate(event, "lab")}
          aria-label={t("app.brandHome")}
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
          aria-label={t("nav.main")}
        >
          {NAV_ITEMS.map(({ id, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeView === id ? "is-active" : ""}
              aria-current={activeView === id ? "page" : undefined}
              onClick={(event) => navigate(event, id)}
            >
              <Icon size={16} aria-hidden="true" />
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="topbar__utility">
          <div
            className="progress-meter"
            aria-label={t("shell.progressAria", { value: progress })}
            aria-live="polite"
          >
            <span>{t("shell.progress")}</span>
            <strong>{progress}%</strong>
            <i>
              <b style={{ width: `${progress}%` }} />
            </i>
          </div>
          <LanguageToggle />
          <button
            className="icon-button"
            type="button"
            aria-label={t("shell.methodology")}
            title={t("shell.methodology")}
            onClick={onOpenMethodology}
          >
            <BookOpen size={19} aria-hidden="true" />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? t("shell.menuClose") : t("shell.menuOpen")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {activeView === "lab" ? (
          <h1 className="visually-hidden">{t("app.title")}</h1>
        ) : null}
        {children}
      </main>

      <nav className="mobile-nav" aria-label={t("nav.mobile")}>
        {NAV_ITEMS.map(({ id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeView === id ? "is-active" : ""}
            aria-current={activeView === id ? "page" : undefined}
            onClick={(event) => navigate(event, id)}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{t(`nav.${id}.short`)}</span>
          </a>
        ))}
      </nav>

      <button className="source-fab" type="button" onClick={onOpenMethodology}>
        <Info size={15} aria-hidden="true" />
        {t("shell.methodologyShort")}
      </button>
    </div>
  );
}

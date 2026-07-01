import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  Scale,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useI18n } from "../i18n/LanguageProvider.jsx";

export default function MethodologyDrawer({
  open,
  onClose,
  unitCount,
  civCount,
}) {
  const { t, formatNumber } = useI18n();
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previouslyFocused = /** @type {HTMLElement | null} */ (
      document.activeElement
    );
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

      const focusable = /** @type {NodeListOf<HTMLElement>} */ (
        drawerRef.current.querySelectorAll(
          "a[href], button:not([disabled]), input:not([disabled]), " +
            "select:not([disabled]), textarea:not([disabled]), " +
            '[tabindex]:not([tabindex="-1"])',
        )
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
        aria-label={t("meth.close")}
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
            <span>{t("meth.badge")}</span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t("meth.close")}
          >
            <X aria-hidden="true" />
          </button>
        </header>
        <div className="methodology-drawer__body">
          <h2 id="methodology-title">{t("meth.title")}</h2>
          <p id="methodology-description">{t("meth.desc")}</p>

          <dl className="methodology-facts">
            <div>
              <dt>{unitCount}</dt>
              <dd>{t("meth.entries")}</dd>
            </div>
            <div>
              <dt>{civCount}</dt>
              <dd>{t("meth.civs")}</dd>
            </div>
            <div>
              <dt>{formatNumber(unitCount * unitCount)}</dt>
              <dd>{t("meth.pairings")}</dd>
            </div>
          </dl>

          <section>
            <h3>
              <FlaskConical aria-hidden="true" /> {t("meth.whatIn")}
            </h3>
            <ul>
              <li>
                <CheckCircle2 aria-hidden="true" /> {t("meth.in1")}
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> {t("meth.in2")}
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> {t("meth.in3")}
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> {t("meth.in4")}
              </li>
            </ul>
          </section>

          <section>
            <h3>
              <Scale aria-hidden="true" /> {t("meth.limits")}
            </h3>
            <p>{t("meth.limitsBody")}</p>
          </section>

          <section className="source-list">
            <h3>{t("meth.sources")}</h3>
            <a
              href="https://www.ageofempires.com/civilizations/"
              target="_blank"
              rel="noreferrer"
            >
              {t("meth.src1")}
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://www.ageofempires.com/news/age-of-empires-iv-tips-to-help-you-get-started/"
              target="_blank"
              rel="noreferrer"
            >
              {t("meth.src2")}
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://github.com/aoe4world/data"
              target="_blank"
              rel="noreferrer"
            >
              {t("meth.src3")}
              <ExternalLink aria-hidden="true" />
            </a>
            <a
              href="https://aoe4world.com/explorer"
              target="_blank"
              rel="noreferrer"
            >
              {t("meth.src4")}
              <ExternalLink aria-hidden="true" />
            </a>
          </section>

          <small>{t("meth.disclaimer")}</small>
        </div>
      </aside>
    </div>
  );
}

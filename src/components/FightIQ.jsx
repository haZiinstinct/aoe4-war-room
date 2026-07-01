import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  Crosshair,
  Eye,
  Factory,
  Footprints,
  Layers3,
  Map,
  Route,
  Shield,
  Swords,
  TimerReset,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider.jsx";

// Reihenfolge + Icons der sechs Regeln; die Texte kommen sprachabhängig aus t().
const PRINCIPLES = [
  { id: "scout", number: "01", icon: Eye },
  { id: "budget", number: "02", icon: Users },
  { id: "contact", number: "03", icon: Footprints },
  { id: "terrain", number: "04", icon: Map },
  { id: "targets", number: "05", icon: Crosshair },
  { id: "switch", number: "06", icon: Factory },
];

/** @type {[string, string, import("lucide-react").LucideIcon][]} */
const FLOW = [
  ["see", "seeText", Eye],
  ["rate", "rateText", Layers3],
  ["answer", "answerText", Shield],
  ["execute", "executeText", Route],
];

export default function FightIQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState("scout");
  const [checked, setChecked] = useState([]);

  function toggleChecked(id) {
    setChecked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <div className="iq-page">
      <header className="iq-hero">
        <div>
          <span>Fight IQ</span>
          <h1>{t("iq.heroTitle")}</h1>
          <p>{t("iq.heroIntro")}</p>
        </div>
        <div className="iq-loop">
          {FLOW.map(([titleKey, textKey, Icon], index) => (
            <div key={titleKey}>
              <span>0{index + 1}</span>
              <Icon />
              <strong>{t(`iq.flow.${titleKey}`)}</strong>
              <small>{t(`iq.flow.${textKey}`)}</small>
              {index < FLOW.length - 1 ? <ArrowRight /> : null}
            </div>
          ))}
        </div>
      </header>

      <section className="principles-section">
        <div className="principles-intro">
          <span>{t("iq.rulesKicker")}</span>
          <h2>{t("iq.rulesTitle")}</h2>
          <p>{t("iq.rulesIntro")}</p>
          <div className="iq-progress">
            <i>
              <b
                style={{
                  width: `${(checked.length / PRINCIPLES.length) * 100}%`,
                }}
              />
            </i>
            <span>
              {t("iq.progress", {
                n: checked.length,
                total: PRINCIPLES.length,
              })}
            </span>
          </div>
        </div>

        <div className="principle-list">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            const isOpen = open === principle.id;
            const isChecked = checked.includes(principle.id);
            const detailId = `principle-detail-${principle.id}`;
            return (
              <article
                key={principle.id}
                className={`${isOpen ? "is-open" : ""} ${
                  isChecked ? "is-checked" : ""
                }`}
              >
                <button
                  type="button"
                  className="principle-toggle"
                  onClick={() => setOpen(isOpen ? null : principle.id)}
                  aria-expanded={isOpen}
                  aria-controls={detailId}
                >
                  <span>{principle.number}</span>
                  <Icon />
                  <div>
                    <strong>{t(`iq.${principle.id}.title`)}</strong>
                    <small>{t(`iq.${principle.id}.lead`)}</small>
                  </div>
                  <ChevronDown />
                </button>
                {isOpen ? (
                  <div className="principle-detail" id={detailId}>
                    <p>{t(`iq.${principle.id}.body`)}</p>
                    <div>
                      <CircleDot />
                      <span>{t(`iq.${principle.id}.cue`)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleChecked(principle.id)}
                    >
                      {isChecked ? <Check /> : <TimerReset />}
                      {isChecked ? t("iq.applied") : t("iq.setGoal")}
                    </button>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="preflight">
        <div>
          <Swords />
          <span>{t("iq.preflightTitle")}</span>
        </div>
        <ol>
          <li>
            <b>1</b> {t("iq.preflight1")}
          </li>
          <li>
            <b>2</b> {t("iq.preflight2")}
          </li>
          <li>
            <b>3</b> {t("iq.preflight3")}
          </li>
          <li>
            <b>4</b> {t("iq.preflight4")}
          </li>
        </ol>
      </section>
    </div>
  );
}

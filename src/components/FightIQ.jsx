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

const PRINCIPLES = [
  {
    id: "scout",
    number: "01",
    title: "Scoute die Produktion",
    icon: Eye,
    lead: "Counter beginnen 60–90 Sekunden vor dem Kampf.",
    body: "Zähle Kasernen, Schießanlagen, Ställe und Belagerungswerkstätten. Ein zweites Produktionsgebäude ist oft die ehrlichere Information als fünf sichtbare Einheiten.",
    cue: "Frage alle 45 Sekunden: Was kann er jetzt in Masse bauen?",
  },
  {
    id: "budget",
    number: "02",
    title: "Vergleiche Ressourcen",
    icon: Users,
    lead: "Zehn gegen zehn ist selten ein fairer Vergleich.",
    body: "Ein Speerträger kostet deutlich weniger als ein Ritter. Counter funktionieren über bezahlbare Masse, nicht zwingend über den 1-gegen-1-Kampf.",
    cue: "Vergleiche 720 Ressourcen gegen 720 Ressourcen.",
  },
  {
    id: "contact",
    number: "03",
    title: "Kontrolliere den Kontakt",
    icon: Footprints,
    lead: "Eine Fernkampfeinheit ohne Abstand ist nur teure Infanterie.",
    body: "Frontlinie, Körperblock, Fokusfeuer und Rückzug bestimmen, wie lange dein theoretischer Bonus überhaupt arbeiten darf.",
    cue: "Nicht die ganze Armee A-Moven: Front und Schaden getrennt steuern.",
  },
  {
    id: "terrain",
    number: "04",
    title: "Spiele den Raum",
    icon: Map,
    lead: "Engpässe, Wald und offenes Feld ändern den Counter.",
    body: "Kavallerie braucht Breite für Flanken. Flächenschaden liebt Engpässe. Fernkampf braucht Sichtlinien. Wähle den Ort, bevor du die Armee auswählst.",
    cue: "Wenn das Gelände schlecht ist: nicht kämpfen ist eine valide Aktion.",
  },
  {
    id: "targets",
    number: "05",
    title: "Ziele nach Wert",
    icon: Crosshair,
    lead: "Schieße nicht auf das Nächste, sondern auf das Richtige.",
    body: "Springalds auf Belagerung, Armbrüste auf schwere Ziele, Reiter in die Fernkampflinie. Überkill kostet Salven und damit Kämpfe.",
    cue: "Shift-Fokus in kleinen Gruppen, dann neu bewerten.",
  },
  {
    id: "switch",
    number: "06",
    title: "Wechsle, bevor du musst",
    icon: Factory,
    lead: "Die beste Komposition ist die, die der Gegner zu spät sieht.",
    body: "Behalte deine vorhandene Armee als Anker, ergänze ihren Counter-Counter und verschiebe neue Produktion. Vollständige harte Wechsel verschwenden Zeit und Veteranen.",
    cue: "Eine zweite Einheit behebt meist mehr als ein Upgrade auf der falschen.",
  },
];

/** @type {[string, string, import("lucide-react").LucideIcon][]} */
const FLOW = [
  ["Sehen", "Welche Klasse und wie viel Produktion?", Eye],
  ["Bewerten", "Kosten, Alter, Upgrades, Gelände?", Layers3],
  ["Antworten", "Direkt counteren oder Zeit kaufen?", Shield],
  ["Ausführen", "Formation, Zielwahl, Rückzugsweg?", Route],
];

export default function FightIQ() {
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
          <h1>Der Counter ist nur der Anfang.</h1>
          <p>
            Gute Kämpfe entstehen aus Information, Timing, Raum und sauberer
            Ausführung. Diese sechs Regeln sind der Klebstoff zwischen
            Einheitenwissen und gewonnenen Partien.
          </p>
        </div>
        <div className="iq-loop">
          {FLOW.map(([title, text, Icon], index) => (
            <div key={title}>
              <span>0{index + 1}</span>
              <Icon />
              <strong>{title}</strong>
              <small>{text}</small>
              {index < FLOW.length - 1 ? <ArrowRight /> : null}
            </div>
          ))}
        </div>
      </header>

      <section className="principles-section">
        <div className="principles-intro">
          <span>Die sechs Kampfregeln</span>
          <h2>Ein kurzer Check vor jedem Commit.</h2>
          <p>
            Öffne jede Regel und markiere sie, sobald du sie in einer echten
            Partie bewusst angewendet hast.
          </p>
          <div className="iq-progress">
            <i>
              <b
                style={{
                  width: `${(checked.length / PRINCIPLES.length) * 100}%`,
                }}
              />
            </i>
            <span>
              {checked.length}/{PRINCIPLES.length} angewendet
            </span>
          </div>
        </div>

        <div className="principle-list">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            const isOpen = open === principle.id;
            const isChecked = checked.includes(principle.id);
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
                >
                  <span>{principle.number}</span>
                  <Icon />
                  <div>
                    <strong>{principle.title}</strong>
                    <small>{principle.lead}</small>
                  </div>
                  <ChevronDown />
                </button>
                {isOpen ? (
                  <div className="principle-detail">
                    <p>{principle.body}</p>
                    <div>
                      <CircleDot />
                      <span>{principle.cue}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleChecked(principle.id)}
                    >
                      {isChecked ? <Check /> : <TimerReset />}
                      {isChecked
                        ? "In Partie angewendet"
                        : "Als Trainingsziel setzen"}
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
          <span>10-Sekunden-Preflight</span>
        </div>
        <ol>
          <li>
            <b>1</b> Was countert meine Schadensquelle?
          </li>
          <li>
            <b>2</b> Kommen alle Einheiten gleichzeitig an?
          </li>
          <li>
            <b>3</b> Welches Ziel muss in der ersten Salve sterben?
          </li>
          <li>
            <b>4</b> Wo ist mein Rückzugsweg?
          </li>
        </ol>
      </section>
    </div>
  );
}

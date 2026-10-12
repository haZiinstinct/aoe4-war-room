import {
  Anchor,
  Castle,
  Cross,
  Crosshair,
  Shield,
  Sparkles,
  Sword,
} from "lucide-react";
import { memo, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider.jsx";

// Plattengrößen (Breite × Höhe) je Einsatzort. Das eigentliche Rasterbild aus
// aoe4world ist 96 × 96 px und bleibt bei großen Platten in nativer Größe
// (bzw. 1,33-fach) – die Platte trägt die visuelle Größe, nicht das Bild.
const SIZE_DIMENSIONS = {
  small: [40, 40],
  medium: [56, 56],
  hero: [200, 232],
  dossier: [176, 204],
  drill: [196, 224],
};

const CATEGORY_GLYPHS = {
  infanterie: Shield,
  fernkampf: Crosshair,
  kavallerie: Sword,
  belagerung: Castle,
  marine: Anchor,
  support: Cross,
  sonstige: Sparkles,
};

// memo: das Avatar wird über Lab, Explorer, Picker und Drills dutzendfach
// gerendert; bei stabilen Props sparen wir unnötige Re-Renders (inkl. Bild-
// Ladezustand), wenn Elternkomponenten sich aktualisieren.
function UnitAvatar({
  unit,
  size = "medium",
  className = "",
  decorative = false,
}) {
  const { unitName } = useI18n();
  const [failed, setFailed] = useState(false);
  const name = unitName(unit);
  const [width, height] = SIZE_DIMENSIONS[size] ?? SIZE_DIMENSIONS.medium;
  const Glyph = CATEGORY_GLYPHS[unit.category] ?? Sparkles;
  const large = size === "hero" || size === "dossier" || size === "drill";

  return (
    <span
      className={`unit-avatar unit-avatar--${size} ${className}`}
      data-category={unit.category}
    >
      {failed || !unit.icon ? (
        <span
          className="unit-avatar__fallback"
          aria-hidden="true"
          title={decorative ? undefined : name}
        >
          <Glyph
            size={large ? 44 : Math.round(width * 0.46)}
            strokeWidth={1.4}
          />
          {large ? <b>{name.slice(0, 2).toUpperCase()}</b> : null}
        </span>
      ) : (
        <img
          src={unit.icon}
          alt={decorative ? "" : name}
          loading={size === "hero" ? "eager" : "lazy"}
          fetchPriority={size === "hero" ? "high" : "auto"}
          decoding="async"
          width={width}
          height={height}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}

export default memo(UnitAvatar);

import { memo, useState } from "react";
import { unitName } from "../data/localization.js";

const SIZE_DIMENSIONS = {
  small: [38, 38],
  medium: [62, 68],
  hero: [220, 304],
  dossier: [210, 260],
  drill: [235, 270],
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
  const [failed, setFailed] = useState(false);
  const name = unitName(unit);
  const [width, height] = SIZE_DIMENSIONS[size] ?? SIZE_DIMENSIONS.medium;

  return (
    <span className={`unit-avatar unit-avatar--${size} ${className}`}>
      {failed || !unit.icon ? (
        <span className="unit-avatar__fallback" aria-hidden="true">
          {name.slice(0, 2).toUpperCase()}
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

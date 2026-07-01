// Selbst-gehostete Webfonts (DSGVO-konform, kein Google-Request).
// Wir importieren gezielt nur die woff2-Dateien (Latin-Subset, genutzte
// Gewichte) – Vite bettet sie beim Build als data:-URIs in die Single-File ein.
// Bewusst OHNE den woff-Fallback der @fontsource-Stylesheets: woff2 wird von
// allen aktuellen Browsern unterstützt, das spart ~die halbe Font-Last.
import interRegular from "@fontsource/inter/files/inter-latin-400-normal.woff2";
import interMedium from "@fontsource/inter/files/inter-latin-500-normal.woff2";
import interSemibold from "@fontsource/inter/files/inter-latin-600-normal.woff2";
import interBold from "@fontsource/inter/files/inter-latin-700-normal.woff2";
import barlowMedium from "@fontsource/barlow-condensed/files/barlow-condensed-latin-500-normal.woff2";
import barlowSemibold from "@fontsource/barlow-condensed/files/barlow-condensed-latin-600-normal.woff2";
import cormorantSemibold from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2";
import cormorantBold from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-700-normal.woff2";

/** @type {[string, number, string][]} family · Gewicht · (eingebettete) URL */
const FACES = [
  ["Inter", 400, interRegular],
  ["Inter", 500, interMedium],
  ["Inter", 600, interSemibold],
  ["Inter", 700, interBold],
  ["Barlow Condensed", 500, barlowMedium],
  ["Barlow Condensed", 600, barlowSemibold],
  ["Cormorant Garamond", 600, cormorantSemibold],
  ["Cormorant Garamond", 700, cormorantBold],
];

const css = FACES.map(
  ([family, weight, url]) =>
    `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};` +
    `font-display:swap;src:url("${url}") format('woff2')}`,
).join("");

const style = document.createElement("style");
style.dataset.fonts = "war-room";
style.textContent = css;
document.head.appendChild(style);

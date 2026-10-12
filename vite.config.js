import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

const GOATCOUNTER_PLACEHOLDER = "DEIN-CODE";
const GOATCOUNTER_BLOCK =
  /\s*<!--\s*GOATCOUNTER:START\s*-->[\s\S]*?<!--\s*GOATCOUNTER:END\s*-->/;

/**
 * Cookielose Statistik (GoatCounter) nur dann einbetten, wenn beim Build
 * `VITE_GOATCOUNTER_CODE` gesetzt ist. Ohne Code wird der komplette Block aus
 * dem HTML entfernt – die Standalone-Datei lädt dann kein externes Script.
 * @param {string} code
 * @returns {import("vite").Plugin}
 */
function analyticsPlugin(code) {
  return {
    name: "war-room-analytics",
    transformIndexHtml(html) {
      if (!code) return html.replace(GOATCOUNTER_BLOCK, "");
      return html.replaceAll(GOATCOUNTER_PLACEHOLDER, code);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    base: "./",
    plugins: [
      react(),
      analyticsPlugin(env.VITE_GOATCOUNTER_CODE?.trim()),
      viteSingleFile(),
    ],
    build: {
      assetsInlineLimit: 100_000_000,
      chunkSizeWarningLimit: 2_000,
      cssCodeSplit: false,
    },
    server: {
      host: "127.0.0.1",
    },
  };
});

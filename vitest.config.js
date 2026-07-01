import { defineConfig } from "vitest/config";

// Eigene Config statt vite.config.js: die Tests brauchen weder den React- noch
// den Singlefile-Plugin-Stack, laufen rein in Node gegen die Logik-Module.
export default defineConfig({
  test: {
    environment: "node",
    include: ["test/**/*.test.js"],
  },
});

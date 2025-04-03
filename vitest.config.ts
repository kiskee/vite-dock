import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    host: true, // Permite que escuche en 0.0.0.0
    watch: {
      usePolling: true, // Necesario para detectar cambios en Docker
    },
  },
});

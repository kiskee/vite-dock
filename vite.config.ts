import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que escuche en 0.0.0.0
    watch: {
      usePolling: true, // Necesario para detectar cambios en Docker
    },
  },
});

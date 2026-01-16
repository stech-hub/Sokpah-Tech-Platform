import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ROOT because stech-hub.github.io
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});

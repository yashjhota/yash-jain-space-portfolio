import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "@codepup/tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // 👈 IMPORTANT for GitHub Pages

  plugins: [
    react(),
    componentTagger({ apply: "both" }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      host: process.env.PUBLIC_HOST || "localhost",
      port: 5173,
    },
    allowedHosts: [
      "localhost",
      process.env.PUBLIC_HOST,
      ".azurecontainerapps.io",
      ".codepup.ai",
      ".codepup.app"
    ].filter(Boolean),
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
}));

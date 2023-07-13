import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: "/boogle/",
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./config/test-setup.js",
    },
  };

  if (command !== "serve") {
    config.base = "/boogle/";
  }

  return config;
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./config/test-setup.js",
    },
    base: "/",
  };

  return config;
});

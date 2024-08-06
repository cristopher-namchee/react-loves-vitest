import react from "@vitejs/plugin-react";

import { defineConfig } from "vitest/config";

export default defineConfig({
  // enable React
  plugins: [react()],
  test: {
    // we are testing DOM here
    environment: "jsdom",
    // run these code before test
    setupFiles: ["./test-setup.ts"],
  },
});

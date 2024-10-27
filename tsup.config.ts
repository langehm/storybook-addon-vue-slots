import type { Options } from "tsup";

import { defineConfig } from "tsup";

const BROWSER_TARGET: Options["target"] = [
  "chrome100",
  "safari15",
  "firefox91",
];

export default defineConfig((options) => ({
  entry: ["src/index.ts", "src/preview.ts"],
  splitting: false,
  minify: !options.watch,
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
  },
  target: BROWSER_TARGET,
  treeshake: true,
  sourcemap: true,
  external: [
    "vue",
    "@storybook/vue3",
    "@storybook/*",
    "storybook",
    "@storybook/types",
  ],
  clean: true,
  platform: "browser",
  esbuildOptions(options) {
    options.conditions = ["module"];
  },
}));

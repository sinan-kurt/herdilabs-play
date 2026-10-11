import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://play.herdilabs.com",
  output: "static",
  build: { format: "directory", assets: "assets" },
});

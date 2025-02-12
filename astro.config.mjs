import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://katie-ucd.github.io/dailyDivination/", // Replace with your actual GitHub Pages URL
  outDir: "dist",
  base: "/dailyDivination/", // Needed for GitHub Pages subdirectory hosting
  integrations: [sitemap()],
  build: {
    format: "directory", // Ensures the correct URL structure
  },
});

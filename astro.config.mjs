import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
    sitemap(),
    sanity({
      projectId: "ac560jku",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],
});

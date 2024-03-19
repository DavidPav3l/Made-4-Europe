// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./made-4-europe/schemaTypes/index";

export default defineConfig({
  name: "made-4-europe",
  title: "Made 4 Europe",
  projectId: "ac560jku",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

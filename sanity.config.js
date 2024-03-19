// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { schemaTypes } from "./made-4-europe/schemaTypes/index";

export default defineConfig({
  name: "made-4-europe",
  title: "Made 4 Europe",
  projectId: "ac560jku",
  dataset: "production",
  plugins: [
    structureTool({
      widgets: [
        netlifyWidget({
          title: "bitl-blog",
          sites: [
            {
              title: "Sanity Studio",
              apiId: "016d04f1-b9d5-4b21-9e2b-a658ea4cc58a",
              buildHookId: "65f99f9f6c5ededbd5a3540e",
              name: "bitl-blog",
            },
          ],
        }),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});

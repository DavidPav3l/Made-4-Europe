import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ac560jku",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-19",
});

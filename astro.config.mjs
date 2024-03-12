import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";
import { remarkDiagram } from "./remark-diagram.mjs";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  markdown: {
    remarkPlugins: [remarkDiagram],
  },
  integrations: [
    starlight({
      title: "Requirements Specification",
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",
          },
        },
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Usecases - Title",
          autogenerate: { directory: "usecases/title" },
        },
        {
          label: "Usecases - Cruise",
          autogenerate: { directory: "usecases/cruise" },
        },
        {
          label: "Usecases - Match",
          autogenerate: { directory: "usecases/match" },
        },
        {
          label: "Domain",
          autogenerate: { directory: "domain" },
        },
      ],
    }),
  ],
});

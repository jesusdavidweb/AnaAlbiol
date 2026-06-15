import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jedav.link",
  base: "/anaalbiol",
  output: "static",
  integrations: [svelte(), sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-body",
      weights: [400, 600],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-subtitle",
      weights: [400, 600],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Playfair Display",
      cssVariable: "--font-heading",
      weights: [400, 600],
    },
  ],
});

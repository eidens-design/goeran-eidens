import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://goeran-eidens.de',
  integrations: [sitemap(),astroI18next()],
  i18nextServer: {
    debug: true,
  },
});
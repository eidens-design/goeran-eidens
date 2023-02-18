/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "de",
  locales: ["de", "en"],
  routes: {
    de: {
      "about": "ueber-mich",
      "contact": "kontakt",
    },
    en: {
      "about": "about",
      "contact": "contact",
    }
  }
};
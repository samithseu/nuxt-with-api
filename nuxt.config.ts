// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/": { static: true },
    "/todos": { static: true },
    "/contact": { static: true },
    "/blog": { isr: 60 * 60, static: true },
    "/blog/**": { isr: 60 * 60, static: true },
    "/achievements": { ssr: true },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    notionApiKey: process.env.NOTION_API_KEY,
    notionDbId: process.env.NOTION_DB_ID,
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' },
    ],
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
    }
  }
})
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  routeRules: {
    '/api/*': { cache: { maxAge: 5 * 60 } },
  },
  ssr: process.env.NUXT_SSR !== 'false',
})

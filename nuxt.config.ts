export default defineNuxtConfig({
  compatibilityDate: '2026-08-14',
  modules: ['@nuxt/content'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  }
})

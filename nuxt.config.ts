// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bric à Brac, le calendrier en ligne des salons de micro-édition',
      meta: [
        { name: 'description', content: "Bric à Brac est un calendrier en ligne des salons d'édition. Vous pouvez y référencer vos salons de micro-édition, d'éditions indépendantes..." }
      ],
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'fr'
      },
      },
    },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/',
        '/404.html'
      ]
    }
  }
})
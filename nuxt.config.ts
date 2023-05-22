// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bric à brac',
      meta: [
        { name: 'description', content: "Bric à Brac est un calendrier en ligne des salons d'édition." }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }},
    css: ['~/assets/css/main.css'],
    nitro: {
      compressPublicAssets: true,
      prerender: {
        crawlLinks: true
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  })
  
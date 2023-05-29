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
      script: [
        { 
          async: true,
          src: 'https://scripts.withcabin.com/hello.js',
        }]
      },
    },
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
    },
    modules: [
      '@nuxtjs/robots'
    ],
    robots: { 
      rules: {
        Disallow: "/success" 
    }
  } 
  
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

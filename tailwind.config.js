/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
       brand: ['Movement Direct']
    },
    colors: {
      beige: '#FFF1D2',
      persian: '#D98061'
    }
  },
  plugins: [],

}


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
      // The private keys which are only available within server-side
      apiSecret: '123',
      // Keys within public, will be also exposed to the client-side
      public: {
        apiBase: 'http://127.0.0.1:8000',
        loggedIn: 0,
      }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })
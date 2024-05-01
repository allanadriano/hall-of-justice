// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '',
      apiToken: '',
      shortnameDisqus: '',
    },
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/google-fonts', 'nuxt-disqus'],
  pinia: {
    storesDirs: ['~/stores/**', './custom-folder/stores/**'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Montserrat: [100, 300, 400, 500, 700, 900],
    },
  },
  disqus: {
    shortname: 'hall-of-justice',
  },
});

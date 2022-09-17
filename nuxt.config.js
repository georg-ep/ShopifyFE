export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GoShopTheMarket - The future of trending products',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/masonry.js", ssr: false, }
  ],

  googleAnalytics: {
    id: 'UA-232446565-1',
  },



  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  googleFonts: {
    download: true,
    families: {
      Poppins: true,
    }
  },

  server: {
    host: '0.0.0.0',
  },
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || "http://localhost:80/api/",
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: false,
          type: false,
          maxAge: 86400 // seconds - 1 day
        },
      },
      cookie: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {

       config.node= {
          fs: 'empty'
        }

       // ....
    }
  }
}

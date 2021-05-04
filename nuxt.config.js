export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '👨‍💻 Mateus (Drew) Leal | Web Developer',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    '@/assets/css/main.scss',
    { src: '~/assets/css/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-material.js' },
    { src: '~/plugins/vue-vanta.js' },
    { src: '@/plugins/vue-material-design-icons', mode: 'client' },
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-vanta','vue-material'],
    transpile: ['vue-vanta','vue-material']
  },

  publicRuntimeConfig: {
    axios: {
      githubBaseURL: 'https://api.github.com/'
    }
  }
}

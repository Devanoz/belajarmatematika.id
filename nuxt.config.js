export default {
  target: 'server',

  ssr: true,

  loading: {
    color: 'white',
    height: '5px'
  },

  devServer: {
    proxy: 'http://backend.belajarmatematika.id',
},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'belajar-matematika-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/JwPagination',
      mode: 'client'
    },
    {
      src: '~/plugins/Progress',
      mode: 'client'
    },
    {
      src: '~/plugins/VueCircle',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    //https://github.com/avil13/vue-sweetalert2
    'vue-sweetalert2/nuxt',
    '@nuxtjs/pwa'
  ],

  pwa: {
    meta: {
      title: 'Belajarmatematika - Belajar Matematika Jadi Lebih Menyenangkan',
      author: 'Belajarmatematika'
    },
    manifest: {
      name: 'Belajarmatematika',
      short_name: 'Belajarmatematika',
      description: 'Belajar Matematika Jadi Lebih Menyenangkan',
      lang: 'en',
      start_url: '/',
      scope: '.'
    },
    icon: {
      fileName: 'images/logo.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org/

    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {

      //strategy "admin"
      teacher: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/teacher/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/teacher/logout',
            method: 'post'
          },
          user: {
            url: '/api/teacher/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },

      //strategy "customer"
      student: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/student/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/student/logout',
            method: 'post'
          },
          user: {
            url: '/api/student/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },

    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://backend.belajarmatematika.id'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@headlessui/vue'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  }
}

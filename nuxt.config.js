const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'DISCOJESUS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:image', content: 'https://discojesus.wtf/artwork_small.jpg'},
      { property: 'og:type', content: 'article'},
      { property: 'og:title', content: 'DISCOJESUS'},
      { property: 'og:description', content: 'DISCOJESUS - New album SWIM out now!'},
      { property: 'og:url', content: 'https://discojesus.wtf'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bungee' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [ '~/assets/style/app.styl' ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vuetify.js',
    '~plugins/vue-fragment',
    '~/plugins/vue-scrollto.js',
    '~plugins/vue-breakpoint.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa', 
        imports: [
          //import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
        ]
      },
    ],
    'vue-scrollto/nuxt',
    '@nuxtjs/axios'
  ],

  server: {
    host: '0.0.0.0'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}

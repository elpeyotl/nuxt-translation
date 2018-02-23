module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'languages',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          langFile: 'en-US.json'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français',
          langFile: 'fr-FR.json'
        },
        {
          code: 'de',
          iso: 'de-DE',
          name: 'Deutsch',
          langFile: 'de-DE.json'
        }
      ],
      loadLanguagesAsync: true,
      langDir: 'lang/',
      defaultLocale: 'en',
      // ...
    }]
  ]
}

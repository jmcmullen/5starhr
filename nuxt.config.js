const { resolve } = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fivestarhr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Five Start HR Website',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,700,900',
      },
    ],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        type: 'text/javascript',
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Inject global css
  */
  css: ['normalize.css', '@/assets/styles/theme.scss'],
  modules: ['nuxt-sass-resources-loader', 'nuxt-netlify-cms', 'nuxtent'],
  sassResources: [resolve(__dirname, 'assets/styles/theme.scss')],
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    vendor: ['babel-polyfill'],
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  /*
  ** Netlify CMS
  */
  nuxtent: {
    content: [
      [
        'posts',
        {
          page: '/posts/_slug',
          permalink: '/hr-advice/:slug',
          generate: ['get', 'getAll'],
          isPost: false,
        },
      ],
      [
        'pages',
        {
          page: '/_slug',
          permalink: '/:slug',
          isPost: false,
          generate: ['get', 'getAll'],
        },
      ],
    ],
  },
  plugins: [{ src: '~/plugins/markdown', ssr: true }],
};

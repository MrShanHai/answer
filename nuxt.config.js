export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // https://nuxtjs.org/deployments/github-pages/
  router: {
    base: `/${process.env.npm_package_name}` || '',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Landing NuxtJS template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rapidly build landing pages for your business with NuxtJS.',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Landing NuxtJS template',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://github.com/agtraveso/landing-nuxt-template',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Landing NuxtJS template',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Rapidly build landing pages for your business with NuxtJS.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://github.com/agtraveso/landing-nuxt-template',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Landing NuxtJS template',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Rapidly build landing pages for your business with NuxtJS.',
      },
      { name: 'keywords', content: 'AI answer generator, NLP automation, intelligent response system' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-tooltip.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['@nuxtjs/i18n', {
      locales: ['en', 'zh'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en'
      }
    }]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // colorMode config: https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js' },
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.js' }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['v-tooltip'],
    postcss: null
  },

  generate: {
    routes: [
      '/blog',
      '/blog/ai-marketing',
      '/blog/ai-service'
    ]
  },

  publicRuntimeConfig: {
    apiKey: process.env.API_KEY
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: true
  }
}

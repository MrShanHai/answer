import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_041daefa from 'nuxt_plugin_plugin_041daefa' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_c378a1aa from 'nuxt_plugin_pluginutils_c378a1aa' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_5bd5c494 from 'nuxt_plugin_pluginrouting_5bd5c494' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_dfdccd0e from 'nuxt_plugin_pluginmain_dfdccd0e' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_workbox_f0111ba8 from 'nuxt_plugin_workbox_f0111ba8' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_5781cd3f from 'nuxt_plugin_metaplugin_5781cd3f' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_5c2972b3 from 'nuxt_plugin_iconplugin_5c2972b3' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_pluginserver_44c509a8 from 'nuxt_plugin_pluginserver_44c509a8' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_77e409a4 from 'nuxt_plugin_pluginclient_77e409a4' // Source: ./color-mode/plugin.client.js (mode: 'client')
import nuxt_plugin_vtooltipclient_3e150d54 from 'nuxt_plugin_vtooltipclient_3e150d54' // Source: ../plugins/v-tooltip.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Landing NuxtJS template","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"format-detection","content":"telephone=no"},{"hid":"description","name":"description","content":"Rapidly build landing pages for your business with NuxtJS."},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:site_name","name":"og:site_name","content":"Landing NuxtJS template"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Fgithub.com\u002Fagtraveso\u002Flanding-nuxt-template"},{"hid":"og:title","name":"og:title","content":"Landing NuxtJS template"},{"hid":"og:description","name":"og:description","content":"Rapidly build landing pages for your business with NuxtJS."},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:url","name":"twitter:url","content":"https:\u002F\u002Fgithub.com\u002Fagtraveso\u002Flanding-nuxt-template"},{"hid":"twitter:title","name":"twitter:title","content":"Landing NuxtJS template"},{"hid":"twitter:description","name":"twitter:description","content":"Rapidly build landing pages for your business with NuxtJS."},{"name":"keywords","content":"AI answer generator, NLP automation, intelligent response system"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_041daefa === 'function') {
    await nuxt_plugin_plugin_041daefa(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_c378a1aa === 'function') {
    await nuxt_plugin_pluginutils_c378a1aa(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_5bd5c494 === 'function') {
    await nuxt_plugin_pluginrouting_5bd5c494(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_dfdccd0e === 'function') {
    await nuxt_plugin_pluginmain_dfdccd0e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_f0111ba8 === 'function') {
    await nuxt_plugin_workbox_f0111ba8(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_5781cd3f === 'function') {
    await nuxt_plugin_metaplugin_5781cd3f(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_5c2972b3 === 'function') {
    await nuxt_plugin_iconplugin_5c2972b3(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_44c509a8 === 'function') {
    await nuxt_plugin_pluginserver_44c509a8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_77e409a4 === 'function') {
    await nuxt_plugin_pluginclient_77e409a4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vtooltipclient_3e150d54 === 'function') {
    await nuxt_plugin_vtooltipclient_3e150d54(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }

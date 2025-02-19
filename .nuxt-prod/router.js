import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66af97d6 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _8358ac18 = () => interopDefault(import('../pages/generate-analysis.vue' /* webpackChunkName: "pages/generate-analysis" */))
const _6533db92 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _19f8070c = () => interopDefault(import('../pages/blog/ai-answer-generator.vue' /* webpackChunkName: "pages/blog/ai-answer-generator" */))
const _2af9d8ce = () => interopDefault(import('../pages/blog/ai-marketing.vue' /* webpackChunkName: "pages/blog/ai-marketing" */))
const _4a3379dd = () => interopDefault(import('../pages/blog/ai-service.vue' /* webpackChunkName: "pages/blog/ai-service" */))
const _6a1cda66 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/landing-nuxt-template/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _66af97d6,
    name: "blog___en"
  }, {
    path: "/generate-analysis",
    component: _8358ac18,
    name: "generate-analysis___en"
  }, {
    path: "/zh",
    component: _6533db92,
    name: "index___zh"
  }, {
    path: "/blog/ai-answer-generator",
    component: _19f8070c,
    name: "blog-ai-answer-generator___en"
  }, {
    path: "/blog/ai-marketing",
    component: _2af9d8ce,
    name: "blog-ai-marketing___en"
  }, {
    path: "/blog/ai-service",
    component: _4a3379dd,
    name: "blog-ai-service___en"
  }, {
    path: "/zh/blog",
    component: _66af97d6,
    name: "blog___zh"
  }, {
    path: "/zh/generate-analysis",
    component: _8358ac18,
    name: "generate-analysis___zh"
  }, {
    path: "/zh/blog/ai-answer-generator",
    component: _19f8070c,
    name: "blog-ai-answer-generator___zh"
  }, {
    path: "/zh/blog/ai-marketing",
    component: _2af9d8ce,
    name: "blog-ai-marketing___zh"
  }, {
    path: "/zh/blog/ai-service",
    component: _4a3379dd,
    name: "blog-ai-service___zh"
  }, {
    path: "/",
    component: _6533db92,
    name: "index___en"
  }, {
    path: "/zh/blog/:slug",
    component: _6a1cda66,
    name: "blog-slug___zh"
  }, {
    path: "/blog/:slug",
    component: _6a1cda66,
    name: "blog-slug___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

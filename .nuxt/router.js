import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d667bcc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _7f98e5c2 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6d603114 = () => interopDefault(import('..\\pages\\index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _6d440212 = () => interopDefault(import('..\\pages\\index-3.vue' /* webpackChunkName: "pages/index-3" */))
const _75aa9712 = () => interopDefault(import('..\\pages\\our-history.vue' /* webpackChunkName: "pages/our-history" */))
const _56f26362 = () => interopDefault(import('..\\pages\\our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _45ae4112 = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages/posts" */))
const _35bf048b = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _13346a6f = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _b6f2f3f8 = () => interopDefault(import('..\\pages\\single-post.vue' /* webpackChunkName: "pages/single-post" */))
const _86ec8a36 = () => interopDefault(import('..\\pages\\single-project.vue' /* webpackChunkName: "pages/single-project" */))
const _fcc3eefe = () => interopDefault(import('..\\pages\\single-service.vue' /* webpackChunkName: "pages/single-service" */))
const _1d6f4a45 = () => interopDefault(import('..\\pages\\testimonials.vue' /* webpackChunkName: "pages/testimonials" */))
const _c5c352de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7d667bcc,
    name: "about"
  }, {
    path: "/contact",
    component: _7f98e5c2,
    name: "contact"
  }, {
    path: "/index-2",
    component: _6d603114,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _6d440212,
    name: "index-3"
  }, {
    path: "/our-history",
    component: _75aa9712,
    name: "our-history"
  }, {
    path: "/our-team",
    component: _56f26362,
    name: "our-team"
  }, {
    path: "/posts",
    component: _45ae4112,
    name: "posts"
  }, {
    path: "/projects",
    component: _35bf048b,
    name: "projects"
  }, {
    path: "/services",
    component: _13346a6f,
    name: "services"
  }, {
    path: "/single-post",
    component: _b6f2f3f8,
    name: "single-post"
  }, {
    path: "/single-project",
    component: _86ec8a36,
    name: "single-project"
  }, {
    path: "/single-service",
    component: _fcc3eefe,
    name: "single-service"
  }, {
    path: "/testimonials",
    component: _1d6f4a45,
    name: "testimonials"
  }, {
    path: "/",
    component: _c5c352de,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

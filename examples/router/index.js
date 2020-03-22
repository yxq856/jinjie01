import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pageDivider',
    name: 'PageDivider',
    component: () => import('../views/PageDivider.vue')
  },
  {
    path: '/pageSlider',
    name: 'PageSlider',
    component: () => import('../views/PageSlider.vue')
  },
  {
    path: '/pageHeadline',
    name: 'PageHeadline',
    component: () => import('../views/PageHeadline.vue')
  },
  {
    path: '/pageDialog',
    name: 'PageDialog',
    component: () => import('../views/PageDialog.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from '../views/AboutUs/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AboutUs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs/AboutUs.vue')
  },
  {
    path: '/beat-store',
    name: 'BeatStore',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BeatStore/BeatStore.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

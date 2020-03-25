import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/ContactUs.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "AboutUs" */ '../views/AboutUs.vue')
  },
  {
    path: '/merchandise',
    name: 'Merchandise',
    component: () => import(/* webpackChunkName: "AboutUs" */ '../views/Merchandise.vue')
  },
  {
    path: '/beat-store',
    name: 'BeatStore',
    component: () => import(/* webpackChunkName: "BeatStore" */ '../views/BeatStore.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

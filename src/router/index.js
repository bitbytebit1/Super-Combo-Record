import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
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
    path: '/merchandise/:category',
    name: 'MerchandiseCategory',
    props: true,
    component: () => import(/* webpackChunkName: "Merchandise" */ '../views/Merchandise.vue')
  },
  {
    path: '/product/:id',
    name: 'MerchandiseItem',
    props: true,
    component: () => import(/* webpackChunkName: "MerchandiseItem" */ '../views/MerchandiseItem.vue')
  },
  {
    path: '/beat-store',
    name: 'BeatStore',
    component: () => import(/* webpackChunkName: "BeatStore" */ '../views/BeatStore.vue')
  },
  {
    path: '/beat-store-iframe',
    name: 'BeatStoreIframe',
    component: () => import(/* webpackChunkName: "BeatStore" */ '../views/BeatStore.vue')
  }
]
if (process.env.NODE_ENV === 'development') {
  routes.push(
    {
      path: '/admin',
      name: 'Admin',
      component: () => import(/* webpackChunkName: "BeatStore" */ '../views/Admin.vue')
    }
  )
}

const router = new VueRouter({
  routes
})

export default router

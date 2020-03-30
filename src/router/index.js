import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    name: 'Contact',
    path: '/contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/ContactUs.vue')
  },
  {
    name: 'AboutUs',
    path: '/about',
    component: () => import(/* webpackChunkName: "AboutUs" */ '../views/AboutUs.vue')
  },
  {
    name: 'News',
    path: '/news',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  {
    name: 'MerchandiseAll',
    path: '/merchandise-all',
    redirect: { name: 'MerchandiseCategory', params: { type: 'all' } }
  },
  {
    name: 'MerchandiseCategory',
    path: '/merchandise/:type',
    props: true,
    component: () => import(/* webpackChunkName: "Merchandise" */ '../views/Merchandise.vue')
  },
  {
    name: 'MerchandiseItem',
    path: '/product/:sku',
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
// if (process.env.NODE_ENV === 'development') {
routes.push(
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "BeatStore" */ '../views/Admin.vue')
  }
)
// }
const router = new VueRouter({
  routes
})
export default router

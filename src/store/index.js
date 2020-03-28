import Vue from 'vue'
import Vuex from 'vuex'

import Products from './Products/index.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Products
  }
})

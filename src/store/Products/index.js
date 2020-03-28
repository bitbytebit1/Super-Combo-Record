import products from '@/assets/products.json'

export default {
  namespaced: true,
  state: {
    products: products
  },
  getters: {
    getProducts: (state) => () => {
      return state.products
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProductTypes: (state) => () => {
      return [...new Set(state.products.map(product => product.type))]
    },
    getProductsByType: (state) => (category) => {
      return state.products.filter(product => product.type === category)
    }
  },
  mutations: {
  },
  actions: {
  }
}

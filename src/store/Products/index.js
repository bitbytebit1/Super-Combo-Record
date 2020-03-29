import products from '@/assets/jsons/products.json'
import songs from '@/assets/jsons/songs.json'
import news from '@/assets/jsons/news.json'

export default {
  namespaced: true,
  state: {
    products: products,
    songs: songs,
    news: news
  },
  getters: {
    getItems: (state) => (items) => {
      return state[items]
    },
    queryItemByProperty: (state) => (items, property, match) => {
      return state[items].find(item => item[property] === match)
    },
    queryItemsUniqueProperty: (state) => (items, property) => {
      return [...new Set(state[items].map(item => item[property]))]
    },
    filterItemsByProperty: (state) => (items, property, match) => {
      return state[items].filter(item => item[property] === match)
    },

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

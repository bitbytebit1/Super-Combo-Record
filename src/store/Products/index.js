export default {
  namespaced: true,
  state: {
    products: [
      { url: null, id: 'Facemask-0', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-1', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-2', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-3', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-4', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-5', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-6', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-7', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-8', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-9', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-10', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'albums', price: '10', image: 'facemask.png' }
    ]
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProductCategories: (state) => () => {
      return [...new Set(state.products.map(product => product.type))]
    },
    getProductsByCategory: (state) => (category) => {
      return state.products.filter(product => product.type === category)
    }
  },
  mutations: {
  },
  actions: {
  }
}

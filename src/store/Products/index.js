export default {
  namespaced: true,
  state: {
    products: [
      { url: null, id: 'Facemask-01', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-02', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-03', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-04', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'clothing', price: '10', image: 'facemask.png' },
      { url: null, id: 'Facemask-04', name: 'Facemask', description: 'Make a statement with this stylish facemask.\nMaterial: Cotton\nSize: 14.5*11 cm / 5.7*4.3 inch', type: 'albums', price: '10', image: 'facemask.png' }
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

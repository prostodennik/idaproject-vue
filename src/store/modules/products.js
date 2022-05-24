const products = {
  state: {
    products: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
      console.log('hi');
    },
    removeProd(state, namesId) {
      state.products = state.products.filter(item => item.id !== namesId);
    },
  }
}

export default products;
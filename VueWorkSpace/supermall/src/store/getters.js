export default {
  cartLength (state) {
    return state.cartList.length;
  },

  cartList (state) {
    return state.cartList;
  },

  totalPrice(state) {
    return state.cartList.filter(item => {
      return item.checked;
    }).reduce((pre, item) => {
      return pre + item.realprice * item.count;
    }, 0).toFixed(2);
  },

  checkCartLength (state) {
    return state.cartList.filter(item => {
      return item.checked;
    }).length;
  },

  isSelectAll (state) {
    return state.cartList.length != 0 && !(state.cartList.find(item => {
      return !item.checked;
    }));
  }
}
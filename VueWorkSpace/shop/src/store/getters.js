// state对象中计算属性

export default {
  // 购物车中的总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count;
    }, 0);
  },

  // 购物车中food的总价
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count * food.price;
    }, 0);
  }
}
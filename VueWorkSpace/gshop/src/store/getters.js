// state对象属性的getter计算属性
export default {
  // 列表中食物的总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count;
    }, 0);
  },

  // 列表中食物的总价格
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => {
      return preTotal + food.count * food.price;
    }, 0); 
  }
}
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
  },

  // 评论数组中满意的评价数量
  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => {
      return preTotal + (rating.rateType ? 0 : 1);
    }, 0)
  }
}
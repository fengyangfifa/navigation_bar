// 直接更新state的方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_FOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  EMPTY_CART
} from './mutations-type'

import Vue from 'vue'

export default {
  // 设置用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },

  // 清除userInfo
  [LOGOUT] (state) {
    state.userInfo = {};
  },

  // 修改食品分类
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys;
  },

  // 修改商家数组
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops;
  },

  // 修改地址信息
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },

  // 修改商家信息
  [RECEIVE_INFO] (state, {info}) {
    state.info = info;
  },

  // 修改商品列表
  [RECEIVE_FOODS] (state, {foods}) {
    state.foods = foods;
  },

  // 修改商家评价
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings;
  },

  // 购物车添加food
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      // 如果没有count属性，代表food是第一次加入，未被Vue记录
      // 直接添加count属性，没有数据绑定的效果，使用Vue.set方法
      Vue.set(food, 'count', 1);
      state.cartFoods.push(food);
    } else {
      food.count += 1;
    }
  },

  // 购物车减少food
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count > 0) {
      food.count -= 1;
      if (food.count === 0) {
        // 将数量为零的food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },

  // 清空购物车
  [EMPTY_CART] (state) {
    // 清除购物车中food的数量
    state.cartFoods.forEach(food => food.count = 0);
    // 清除购物车中的food
    state.cartFoods = [];
  }
}

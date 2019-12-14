// 直接更新state的多个方法的对象
import Vue from 'vue'

import {
  RECEIVE_ADDRESS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  // 修改地址
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  // 修改食品分类
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys;
  },
  // 修改商家列表
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops;
  },
  // 设置用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },
  // 重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {};
  },
  // 设置商家商品列表
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods;
  },
  // 设置商家信息
  [RECEIVE_INFO] (state, {info}) {
    state.info = info;
  },
  // 设置商家评价
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings;
  },
  // 增加food的count
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    // 判断food是否有count属性
    if (!food.count) {
      // 新增属性(采用对象属性直接添加，没有数据绑定的效果)
      // food.count = 1;

      // 采用set方法，新增的属性也有数据绑定的效果
      Vue.set(food, 'count', 1);
      // 修改购物列表
      state.cartFoods.push(food);
    } else {
      food.count++;
    }

  },
  // 减少food的count
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--;
      if (food.count === 0) {
        // 将数量为零的food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  // 清空购物车
  [CLEAR_CART] (state) {
    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0);
    // 清除购物车所有项
    state.cartFoods = [];
  }
}

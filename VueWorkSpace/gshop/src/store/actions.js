// 间接更新state的多个方法的对象
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
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqSearchShops
} from '../api'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步请求
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address});
    }
    // 提交一个mutation
  },

  // 异步获取食品列表
  async getCategorys ({commit, state}) {
    const result = await reqFoodCategorys();
    if (result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys});
    }
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {longitude, latitude} = state;
    const result = await reqShops(latitude, longitude);
    if (result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops});
    }
  },

  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo});
  },

  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, {userInfo});
    }
  },

  // 登出
  async logout ({commit}) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER_INFO);
    }    
  },

  // 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, {info});
    }
  },

  // 异步获取商家评价
  async getShopRatings ({commit}, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, {ratings});
      callback && callback();
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, {goods});
      // 此时数据已经更新，执行回调函数
      callback && callback();
    }
  },

  // 同步更新food中的值
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food});
    } else {
      commit(DECREMENT_FOOD_COUNT, {food});
    }
  },

  // 清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART);
  },

  //异步搜索商品
  async searchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqSearchShops(geohash, keyword);
    if (result.code === 0) {
      const searchShops = result.data;
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  }
}
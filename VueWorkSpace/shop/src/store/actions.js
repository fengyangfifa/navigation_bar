// 间接更新state的多个方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_FOODS
} from './mutations-type'

import {
  reqLogout,
  reqFoodCategorys,
  reqShops,
  reqAddress,
  reqUserInfo,
  reqShopInfo,
  reqShopFoods,
  reqShopRatings
} from '../api'

import { Toast } from 'vant'

export default {
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo});
  },

  // 用户退出、清除用户信息
  async logout ({commit, state}) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(LOGOUT);
      Toast('登出成功');
    } else {
      // 当发生退出失败时，执行回调函数
      // callback && callback();
      Toast('登出失败');
    }
  },

  // 异步获取食品列表
  async getCategorys ({commit}, ) {
    const result = await reqFoodCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys});
    }
  },

  // 获取商家列表
  async getShops ({commit, state}) {
    const {latitude, longitude} = state;
    const result = await reqShops(latitude, longitude);
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops});
    } else {
      Toast('获取商家列表失败');
    }
  },

  // 获取地址信息
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state;
    const geohash = latitude + ',' + longitude;
    const result = await reqAddress(geohash);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address});
    }
  },

  // 获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit({RECEIVE_USER_INFO}, {userInfo});
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

  // 获取商家评价
  async getShopRatings ({commit}, callback) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = await result.data;
      commit(RECEIVE_RATINGS, {ratings});
      callback && callback();
    }
  },

  // 获取商家商品列表
  async getShopFoods ({commit}, callback) {
    const result = await reqShopFoods();
    if (result.code === 0) {
      const foods = result.data;
      commit(RECEIVE_FOODS, {foods});
      callback && callback();
    }
  }
}

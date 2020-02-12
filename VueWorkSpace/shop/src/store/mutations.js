// 直接更新state的方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_ADDRESS,
} from './mutations-type'

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
  }
}

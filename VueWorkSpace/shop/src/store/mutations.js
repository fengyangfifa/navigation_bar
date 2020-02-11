// 直接更新state的方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_CATEGORYS
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
  }
}

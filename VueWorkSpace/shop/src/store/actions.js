// 间接更新state的多个方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_CATEGORYS
} from './mutations-type'

import {
  reqLogout,
  reqFoodCategorys
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
  }
}

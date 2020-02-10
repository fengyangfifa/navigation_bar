// 直接更新state的方法的对象

import {
  RECEIVE_USER_INFO,
  LOGOUT
} from './mutations-type'

export default {
  // 设置用户信息
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },

  // 清除userInfo
  [LOGOUT] (state) {
    state.userInfo = {};
  }
}

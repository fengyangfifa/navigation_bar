// 直接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
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
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  }
}

// 间接更新state的多个方法的对象
import {
  RECEIVE_ADDRESS, 
  RECEIVE_CATEGORYS, 
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
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
  }
}
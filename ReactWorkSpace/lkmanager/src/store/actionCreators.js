import * as constants from './actionTypes'
import {getHomeData, getSowingData} from '../api/index'

// 获取首页数据
export const getHomeDataAction = () => {
  return (dispatch) => {
    // 请求网络数据
    getHomeData().then((res) => {
      if (res.status_code === 200) {
        const homeData = res.result[0] || {};
        dispatch({
          type: constants.INIT_HOME_DATA,
          homeData
        });
      }
    }).catch(() => {
      alert('首页请求数据失败');
    });
  }
};

// 获取轮播图数据
export const getSowingDataAction = () => {
  return (dispatch) => {
    getSowingData().then((res) => {
      if (res.status_code === 200) {
        const sowingData = res.result;
        dispatch({
          type: constants.INIT_SOWING_DATA,
          sowingData
        });
      }
    }).catch(() => {
      alert('轮播图请求数据失败');
    });
  }
}

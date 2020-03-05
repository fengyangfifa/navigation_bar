import * as constants from './actionTypes'
import {getHomeData, getSowingData, getUserData, getStudentData} from '../api/index'

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

// 用户登录
export const getUserDataAction = (data, callback) => {
  return (dispatch) => {
    // 发起网络请求
    getUserData(data).then((res) => {
      if (res.status_code === 200) {
        const userData = res.result;
        dispatch({
          type: constants.INIT_USER_DATA,
          userData
        });
        // 登录成功的回调
        callback && callback(userData);
      } else {
        alert(res.result);
      }
    }).catch((error) => {
      alert(error);
    });
  }
}


// 获取学生数据
export const getStudentDataAction = (params) => {
  return (dispatch) => {
    getStudentData(params).then((res) => {
      if (res.status_code === 200) {
        const studentData = res.result;
        dispatch({
          type: constants.INIT_STUDENT_DATA,
          studentData
        });
      }
    }).catch(() => {
      alert('学生数据请求失败!');
    });
  }
}
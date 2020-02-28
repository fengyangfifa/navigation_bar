import * as constants from './actionTypes'

// 默认的数据
const defaultState = {
  homeData: {
    'login_user': '212',
    'new_register': '121',
    'new_stu_course': '232',
    'new_stu_classes': '323',
    'new_number': '221',
    'not_reply': '11',
    'order_counter': {
      'web': '122',
      'java': '32',
      'python': '89',
      'bigdata': '60',
      'ui': '99'
    }
  }
};

export default (state = defaultState, action) => {
  if (action.type === constants.INIT_HOME_DATA) {
    // 深拷贝，实现状态不可逆
    const newState = JSON.parse(JSON.stringify(state));
    newState.homeData = state.homeData;
    return newState;
  }
  return state;
}
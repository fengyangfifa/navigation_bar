// vuex的核心对象管理模块
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = { //初始化状态
  count: 0
};
const mutations = {
  increment_count (state) {
    state.count++;
  },
  decrement_count (state) {
    state.count--;
  }
};
const actions = {
  increment ({commit}) {
    commit("increment_count");
  },
  decrement ({commit}) {
    commit("decrement_count");
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1){
      commit("increment_count");
    }
  },
  inctrementAsync ({commit}){
    setTimeout(() => {
      commit("increment_count");
    }, 1000);
  }
};
const getters = {
  evenOradd (state) {
    return state.count % 2 === 0 ? "偶数":"奇数";
  },
  evenOradd2 (state) {
    return state.count % 2 === 0 ? "偶数":"奇数";
  }
};

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
});

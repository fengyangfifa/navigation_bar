// 入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

// 加载mockServer模块
import './mock/mockServer'
// 加载自定义过滤器
import './filters'

// 注册全局组件标签
Vue.component(Button.name, Button); //<mt-button>

import loading from '../src/common/imgs/loading.gif'

Vue.use(VueLazyload, {
  loading 
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

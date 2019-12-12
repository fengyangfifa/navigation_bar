// 入口JS
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

// 加载mockServer模块
import './mock/mockServer'

// 注册全局组件标签
Vue.component(Button.name, Button); //<mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});

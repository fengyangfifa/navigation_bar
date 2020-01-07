import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 给事件总线赋值
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

// 直接导入vant的所有样式
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

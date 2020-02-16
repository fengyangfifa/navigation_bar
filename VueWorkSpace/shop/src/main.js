import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

// 直接导入vant的所有样式
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant);

// 导入swiper的css样式
import 'swiper/css/swiper.min.css'

// 加载mockServer模块
import './mock/mockServer'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

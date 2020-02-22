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

// 加载自定义过滤器
import './filters'

// 和postcss-px2rem配套使用
import 'lib-flexible'

// 解决移动端300s的延迟
import FastClick from 'fastclick'

FastClick.attach(document.body);

// 图片懒加载
import loading from 'assets/img/loading.gif'
import { Lazyload } from 'vant'

Vue.use(Lazyload, {
  loading
});

// 'vant-ui'
import { Button, Popup, Area, Icon, Overlay } from 'vant'

Vue.use(Icon);
Vue.use(Popup);
Vue.use(Area);
Vue.use(Button);
Vue.use(Overlay);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

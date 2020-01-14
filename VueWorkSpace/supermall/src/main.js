import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'
import VueRouter from 'vue-router'

import 'lib-flexible'

Vue.config.productionTip = false
// 给事件总线赋值
Vue.prototype.$bus = new Vue();
// 安装toast插件
Vue.use(toast);
// 解决移动端300ms延迟
FastClick.attach(document.body);
// 图片懒加载
import loading from 'assets/img/common/loading.gif'
Vue.use(VueLazyLoad, {
  loading
});
// 重写push 和 replace 方法，双击路由组件时捕捉异常但是不抛出
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router' 

import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

export default new VueRouter({
  // 多个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    {
      // 当请求根路径时重定向到about
      path: '/',
      redirect: '/about'
    }
  ]
});

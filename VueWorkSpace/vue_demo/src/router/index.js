// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router' 

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'

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
      component: Home,
      children: [
        {
          path: 'message',
          component: Message
        },
        {
          path: 'news',
          component: News
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      // 当请求根路径时重定向到about
      path: '/',
      redirect: '/about'
    }
  ],
  linkActiveClass: "is-active"
});

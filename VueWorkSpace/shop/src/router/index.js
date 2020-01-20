import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由
const Home = () => import('views/Home/Home');
const Search = () => import('views/Search/Search');
const Order = () => import('views/Order/Order');
const Profile = () => import('views/Profile/Profile');

// 声明使用插件
Vue.use(VueRouter);
// 重写push 和 replace 方法，双击路由组件时捕捉异常但是不抛出
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
});
export default router;

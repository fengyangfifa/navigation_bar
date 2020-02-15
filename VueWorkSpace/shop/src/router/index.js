import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由
const Home = () => import('views/Home/Home');
const Search = () => import('views/Search/Search');
const Order = () => import('views/Order/Order');
const Profile = () => import('views/Profile/Profile');
const Login = () => import('views/Login/Login');
const Shop = () => import('views/Shop/Shop');

// 声明使用插件
Vue.use(VueRouter);
// 重写 push 和 replace 方法，双击路由组件时捕捉异常但是不抛出
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
      component: Home,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: { 
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: { 
        showFooter: false
      }
    },
    {
      path:'/shop',
      component: Shop
    }
  ]
});
export default router;

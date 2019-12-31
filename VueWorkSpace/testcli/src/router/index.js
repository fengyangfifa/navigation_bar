import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const News = () => import('../components/News')
const Message = () => import('../components/Message')
const Test = () => import('../components/Test')

Vue.use(VueRouter);

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
        title: '首页'
      },
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
      children: [
        {
          path: 'test',
          component: Test
        }
      ]
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    }
  ]
});
// 导航守卫
// router.beforeEach((to, from, next) => {
//   document.title = to.matched[0].meta.title;
//   next();  
// })
router.afterEach( (to, from) => {
  document.title = to.matched[0].meta.title;
})
export default router

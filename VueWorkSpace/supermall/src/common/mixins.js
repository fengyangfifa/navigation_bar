import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop' 


export const itemListenerMixin = {
  mounted() {
    // 防抖函数使用
    const refresh = debounce(this.$refs.scroll.refresh, 500);

    this.itemImgListener = () => {
      // 刷新scroll的可滑动高度
      refresh();
    }
    // 监听事件总线中图片加载完成的消息
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  },
}

// 这个主要是用在Detail.vue文件中
// 在Detail.vue文件中,想使用防抖函数就要采用这种方法
// 在mounted中初始化一个refresh属性,在imageLoad中就可以使用该方法
// 因为在imageLoad中初始化refresh属性,将会初始化多次,没有达到使用节流函数的效果
// export const itemListenerMixin = {
//   data() {
//     return {
//       refresh: null
//     }
//   },
//   mounted() {
//     // 防抖函数使用
//     this.refresh = debounce(this.$refs.scroll.refresh, 500);

//     this.itemImgListener = () => {
//       // 刷新scroll的可滑动高度
//       this.refresh();
//     }
//     // 监听事件总线中图片加载完成的消息
//     this.$bus.$on('itemImageLoad', this.itemImgListener);
//   },
// }

// 返回顶部组件的混入
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick () {
      this.$refs.scroll.backtop();
    }
  },
}

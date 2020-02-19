<template>
  <div class="foods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" :class="{on: currentIndex === index}" v-for="(item, index) in foods" 
        :key="index" @click="clickMenuItem(index)">
          <span class="text">
            <img :src="item.icon" alt="" v-if="item.icon">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul ref="foodsUl">
        <li class="food-list-hook" v-for="(food, index) in foods" :key="index">
          <h1 class="title">{{food.name}}</h1>
          <ul>
            <li class="food-item" v-for="(item, index) in food.foods" :key="index" @click="showBigFood(item)">
              <div class="icon">
                <img :src="item.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{item.name}}</h2>
                <p class="desc">{{item.description}}</p>
                <div class="extra">
                  <span class="count">月售 {{item.sellCount}} 份</span>
                  <span>好评率 {{item.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{item.price}}</span>
                  <span class="old" v-if="item.oldPrice">￥{{item.oldPrice}}</span>
                </div>
              </div>
              <cart-control :food="item"></cart-control>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart></shop-cart>
    <big-picture-display :food="food" ref="foodDisplay"></big-picture-display>    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import { Popup } from 'vant'

import BigPictureDisplay from 'components/BigPictureDisplay/BigPictureDisplay'
import ShopCart from 'components/ShopCart/ShopCart'
import CartControl from 'components/CartControl/CartControl'

export default {
  name: 'ShopFoods',
  data() {
    return {
      // 右侧滑块的Y轴坐标(滑动过程中动态变化)
      scrollY: 0,

      // 所有右侧分类li的top组成的数组(列表显示时初始化值,不会变化)
      tops: [],
      // 显示大图的food
      food: null
    }
  },
  components: {
    ShopCart,
    BigPictureDisplay,
    CartControl
  },
  computed: {
    ...mapState(['foods']),

    // 计算当前右侧列表处于的左侧列表分类
    currentIndex () {
      // 该计算属性根据 scrollY 和 tops 计算
      const {scrollY, tops} = this;
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1];
      });
      return index;
    }
  },
  methods: {
    // 点击左侧商品分类,滑动右侧列表
    clickMenuItem (index) {
      // 使右侧列表滑动到对应的位置
      const scrollY = -this.tops[index];
      // 先通过修改scrollY，改变左侧样式
      this.scrollY = -scrollY;
      // 滑动右侧列表
      this.foodScroll.scrollTo(0, scrollY, 1000);
    },

    // 初始化滚动
    _initScroll () {
      const menuScroll = new BScroll('.menu-wrapper', {
        click: true
      });
      this.foodScroll = new BScroll('.foods-wrapper', {
        click: true,
        probeType: 2
      });

      // 右侧scroll绑定滑动监听
      this.foodScroll.on('scroll', ({x, y}) => {
        this.scrollY = Math.abs(y);
      });

      // 右侧scroll绑定滑动结束监听
      this.foodScroll.on('scrollEnd', ({x, y}) => {
        this.scrollY = Math.abs(y);
      });
    },

    // 初始化tops
    _initTops () {
      const tops = [];
      let top = 0;
      tops.push(top);
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
      // lis是一个伪数组
      [].slice.call(lis).forEach(li => {
        // li.clientHeight li元素渲染后自身的高度
        top += li.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },

    // 显示food大图
    showBigFood (food) {
      this.food = food;
      this.$refs.foodDisplay.changeShowFood();
    }
  },
  mounted() {
    // 请求商家商品数据
    this.$store.dispatch('getShopFoods', () => {
      this.$nextTick(() => {
        this._initScroll();
        this._initTops();
      });
    });
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.foods {
  /* width: 100%;
  height: 471px; */
  position: absolute;
  top: 194px;
  left: 0;
  right: 0;
  bottom: 45px;
  background-color: #ffffff;
  margin-top: 2px;
}

.menu-wrapper {
  width: 80px;
  background-color: #f3f5f7;
  float: left;
  /* height: 426px; */
  height: 100%;
  overflow: hidden;
}

.menu-wrapper .menu-item {
  height: 54px;
  padding: 0 12px;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}

/* .menu-wrapper .menu-item span::after {
  height: 1px;
  width: 56px;
  content: '';
  background-color: rgba(7,17,27,0.1);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
} */

.text {
  font-size: 12px;  
  color: #333;
  height: 12px;
}

.text img{
  width: 12px;
  height: 12px;
  vertical-align: text-top;
}

.menu-item.on {
  background-color: #ffffff;
}

.menu-item.on span{
  color: #02a774;
}

.foods-wrapper {
  /* height: 426px; */
  height: 100%;
  width: 295px;
  background-color: #ffffff;
  float: left;
  overflow: hidden;
}

.food-list-hook .title {
  width: 100%;
  height: 26px;
  border-left: 2px solid #d9dde1;
  padding-left: 14px;
  line-height: 26px;
  font-size: 12px;
  background-color: #f3f5f7;
  color: #93999f;
}

.foods-wrapper ul {
  background-color: #ffffff;
}

.food-list-hook .food-item {
  width: 259px;
  /* height: 97px; */
  padding-bottom: 18px;
  margin: 18px 18px 0 18px;
  /* width: 100%;
  height: 100%;
  padding: 18px; */
  position: relative;
}

.food-list-hook .food-item{
  border-bottom: 1px solid rgba(7,17,27,0.1);
}

.food-list-hook .food-item:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.food-list-hook .food-item::after{
  content: '';
  clear: both;
  display: block;
}

.food-list-hook .food-item .icon{
  /* height: 79px; */
  width: 57px;
  margin-right: 10px;
  float: left;
}

.food-list-hook .food-item .icon img {
  width: 57px;
  height: 57px;
}

.food-item .content {
  float: left;
  width: 192px;
  /* height: 79px; */
}

.food-item .content .name {
  font-size: 14px;
  color: #07111b;
  margin: 2px 0 8px 0;
  line-height: 14px;
  height: 14px;
}

.food-item .content .desc {
  line-height: 12px;
  margin-bottom: 8px;
  font-size: 10px;
  color: #93999f;
}

.food-item .content .extra {
  line-height: 10px;
  font-size: 10px;
  color: #93999f;
}

.food-item .content .count {
  margin-right: 12px;
}

.food-item .content .price {
  line-height: 24px;
}

.food-item .content .now {
  color: #f01414;
  font-size: 14px;
  margin-right: 8px;
}

.food-item .content .old {
  text-decoration: line-through;
  font-size: 10px;
  color: #93999f;
}

</style>

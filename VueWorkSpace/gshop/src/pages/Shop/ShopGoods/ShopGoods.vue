<template>
	<div>
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li class="menu-item" v-for="(good, index) in goods"
           :key="index" :class="{'current': index===currentIndex}" @click="clickMenuItem(index)"> 
						<span class="text bottom-border-1px">
							<img class="icon" :src="good.icon" v-if="good.icon"> 
							{{good.name}}
						</span>
					</li>
				</ul>
			</div>
			<div class="foods-wrapper" ref="foodsWrapper">
				<ul ref="foodsUl">
					<li class="food-list-hook" v-for="(good, index) in goods" :key="index">
						<h1 class="title">{{good.name}}</h1>
						<ul>
							<li class="food-item bottom-border-1px" v-for="(food, index) in good.foods"
               :key="index" @click="showFood(food)">
								<div class="icon"> 
									<img width="57" height="57" :src="food.icon">
								</div>
								<div class="content">
									<h2 class="name">{{food.name}}</h2>
									<p class="desc">{{food.description}}</p>
									<div class="extra"> 
										<span class="count">月售 {{food.sellCount}} 份</span> 
										<span>好评率 {{food.rating}}%</span>
									</div>
									<div class="price"> 
										<span class="now">￥{{food.price}}</span> 
										<span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span> 
									</div>
									<div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
      <ShopCart></ShopCart>
		</div>
    <!-- 大图显示模块 -->
    <Food :food="food" ref="food"></Food>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import CartControl from '../../../components/CartControl/CartControl'
import Food from '../../../components/Food/Food'
import ShopCart from '../../../components/ShopCart/ShopCart'

export default {
  data() {
    return {
      // 右侧滑块的Y轴坐标(滑动过程中动态变化)
      scrollY: 0,
      // 所有右侧分类li的top组成的数组(列表显示时初始化值,不会变化)
      tops: [],
      // 需要放大显示的food
      food: {}
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  },
  mounted() {
    this.$store.dispatch('getShopGoods', () => {
      // 因为数据更新和页面更新是异步，所以还是在nextTick函数中执行创建BScroll实例
      // nextTick函数在页面更新显示后执行
      this.$nextTick(() => {
        this._initScroll();
        this._initTops();
      });
    });
  },
  computed: {
    ...mapState(['goods']),
    // 计算得出当前分类的下标
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
    // 初始化滚动
    _initScroll () {
      const menuScroll = new BScroll('.menu-wrapper');
      this.foodsScroll = new BScroll('.foods-wrapper', {
          probeType: 2,
      });
      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({x, y}) => {
        this.scrollY = Math.abs(y);
      });
      // 给右侧列表绑定scroll结束监听
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        this.scrollY = Math.abs(y);
      });
    },
    // 初始化tops
    _initTops () {
      const tops = [];
      let top = 0;
      tops.push(top);
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
      // 因为lis是一个伪数组
      [].slice.call(lis).forEach(li => {
        top += li.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },
    // 点击左侧时，右侧滑动
    clickMenuItem (index) {
      // 使右侧列表滑动到对应的位置
      const scrollY = -this.tops[index];
      // 先通过修改scrollY，改变左侧样式
      this.scrollY = -scrollY;
      // 然后滑动右侧列表
      this.foodsScroll.scrollTo(0, scrollY, 1000);
    },
    // 放大显示点击的food
    showFood (food) {
      // 更新food
      this.food = food;
      // 显示food组件(父组件调用子组件的方法)
      // 显示在父组件中的子组件标签就代表子组件对象，拥有子组件的方法和属性
      this.$refs.food.toggleShow();
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"

.goods
  display: flex
  position: absolute
  top: 195px
  bottom: 46px
  width: 100%
  background: #fff;
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      line-height: 14px
      &.current
        position: relative
        z-index: 10
        margin-top: -1px
        background: #fff
        color: $green
        font-weight: 700
        .text
          border-none()
      .icon
        display: inline-block
        vertical-align: top
        width: 12px
        height: 12px
        margin-right: 2px
        background-size: 12px 12px
        background-repeat: no-repeat
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
  .foods-wrapper
    flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147, 153, 159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px 18px 0 18px
      padding-bottom: 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .desc, .extra
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 12px
</style>

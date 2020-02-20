<template>
  <div class="back-overlay" v-if="showFood">
    <div class="food">
      <div class="img-header">
        <img v-lazy="food.image" alt="">
        <p class="desc">{{food.info}}</p>
        <div class="back" @click="changeShowFood">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售 {{food.sellCount}} 份</span>
          <span class="rating">好评率 {{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <cart-control :food="food"></cart-control>
      </div>
    </div>
    <div class="overlay" @click="changeShowFood"></div>
  </div>
</template>

<script>
import CartControl from 'components/CartControl/CartControl'

export default {
  name: 'BigPictureDisplay',
  props: {
    food: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data() {
    return {
      // 显示大图
      showFood: false
    }
  },
  components: {
    CartControl
  },
  methods: {
    changeShowFood () {
      this.showFood = !this.showFood;
    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.back-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.back-overlay .food {
  width: 80%;
  height: 60%;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
}

.food .img-header {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
}

.food .img-header img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.food .img-header .desc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 10px 10px;
  font-size: 10px;
  color: #ddd;
  letter-spacing: 0;
}

.food .img-header .back {
  position: absolute;
  top: 10px;
  left: 0;
}

.food .img-header .back i {
  display: block;
  padding: 10px;
  font-size: 20px;
  color: #ffffff;
}

.food .content {
  padding: 18px 18px 8px;
  position: relative;
}

.food .content .title {
  line-height: 14px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #07111b;
}

.food .content .detail {
  line-height: 10px;
  margin-bottom: 18px;
  height: 10px;
  font-size: 0;
}

.food .content .detail span {
  font-size: 10px;
  color: #93999f;
}

.food .content .detail .sell-count {
  margin-right: 12px;
}

.food .content .price {
  font-weight: 700;
  line-height: 24px;
}

.food .content .price .now {
  margin-right: 8px;
  font-size: 14px;
  color: #f01414;
}

.food .content .price .old {
  text-decoration: line-through;
  font-size: 10px;
  color: #93999f;
}

.back-overlay .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 50;
}
</style>

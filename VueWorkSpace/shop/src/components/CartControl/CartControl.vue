<template>
  <div class="cartcontrol-wrapper">
    <div class="cartcontrol">
      <transition name="move">
        <!-- @click.stop阻止事件冒泡 -->
        <div class="iconfont icon-remove_circle_outline" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
      </transition>
      <div class="cart-count" v-if="food.count">{{food.count}}</div>
      <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    // 修改购物车中的food数量或者添加到购物车中
    updateFoodCount (status) {
      const {food} = this;
      this.$store.dispatch('updateFoodCount', {food, status});
    }
  }
}
</script>

<style scoped>
.cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 6px;
}

.cartcontrol .iconfont {
  display: inline-block;
  padding: 6px;
  line-height: 24px;
  font-size: 24px;
  color: #02a774;
}

.cartcontrol .cart-count {
  display: inline-block;
  vertical-align: top;
  width: 12px;
  padding-top: 6px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  color: #93999f;
}

.move-enter-active, .move-leave-active {
  transition: all .3s
}

.move-enter, .move-leave-to {
  opacity: 1;
  transform: translateX(15px) rotate(180deg);
}
</style>

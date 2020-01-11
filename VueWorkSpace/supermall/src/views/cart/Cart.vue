<template>
  <div class="cart">
    <nav-bar class="nar-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import {mapGetters} from 'vuex'

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

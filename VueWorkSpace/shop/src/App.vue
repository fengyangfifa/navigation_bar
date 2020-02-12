<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <nav-bar v-if="$route.meta.showFooter"></nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/NavBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    // 获取地址信息
    this.$store.dispatch('getAddress');
    // 获取用户信息
    this.$store.dispatch('getUserInfo');
  },
}
</script>

<style>
@import 'assets/css/base.css';
@import 'assets/css/iconfont.css';

#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>

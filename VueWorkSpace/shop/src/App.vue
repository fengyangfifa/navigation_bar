<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/NavBar/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
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

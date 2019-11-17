<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo" />
    <!-- 3.使用组件标签 -->
    <HelloWorld/>
  </div>
</template>

<script>
// 1.引入组件
import HelloWorld from "./components/HelloWorld.vue";
export default {
  // 2.映射组件标签
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 200px;
  height: 200px;
}
</style>

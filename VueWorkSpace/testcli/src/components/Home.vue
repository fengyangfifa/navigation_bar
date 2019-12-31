<template>
  <div>
    <h2>我是首页</h2>
    <p>哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">评论</router-link>
    <keep-alive>
      <router-view></router-view>    
    </keep-alive>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  color: #ffffff;
  background-color: var(--color-tint);
}
</style>

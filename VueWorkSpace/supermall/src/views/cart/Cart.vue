<template>
  <div>
    <nav-bar class="nar-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

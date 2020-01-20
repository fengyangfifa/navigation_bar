<template>
  <div>
    <header-top :title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

export default {
  name: 'Profile',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '我的'  
    }
  },
}
</script>

<style scoped>

</style>

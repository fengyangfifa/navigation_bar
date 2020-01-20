<template>
  <div>
    <header-top :title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from 'common/HeaderTop/HeaderTop'

export default {
  name: 'Search',
  components: {
    HeaderTop
  },
  data() {
    return {
      title: '搜索'
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentName = tab">{{tab}}</button>
    <component :is="currentName" />
  </div>
</template>

<script>
import child1 from './components/child1.vue'
import child2 from './components/child2.vue'

export default {
  data () {
    return {
      currentName: 'child1',
      tabs: ['child1', 'child2']
    }
  },
  components: {
    child1,
    child2
  }
}
</script>

<style scoped></style>

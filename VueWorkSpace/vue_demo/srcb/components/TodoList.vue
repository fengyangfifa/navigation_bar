<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" 
    :todo="todo" :index="index" />  
  </ul>
</template>

<script>
import storageUtil from '../util/storageUtil';
import TodoItem from './TodoItem.vue';
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(["todos"])
  },
  // 深度监视todos的变化，一旦改变就将todos保存到localStorage中
  watch: {
    todos: {
      deep: true,
      handler: storageUtil.saveTodos
    }
  },
  // 映射成标签
  components: {
    TodoItem
  }
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

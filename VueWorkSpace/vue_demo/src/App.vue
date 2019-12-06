<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 方法1props -->
      <!-- <TodoHeader :addTodo="addTodo"/> -->

      <!-- 方法2自定义事件 -->
      <!-- <TodoHeader @addTodo="addTodo"/> -->
      <TodoHeader/>

      <!-- <TodoList :todos="todos" :deleteTodo="deleteTodo" /> -->
      <TodoList/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import storageUtil from './util/storageUtil.js';

import PubSub from 'pubsub-js';

export default {
  mounted() {
    this.$store.dispatch("reqTodos");
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
</style>

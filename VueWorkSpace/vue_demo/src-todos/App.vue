<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 方法1props -->
      <!-- <TodoHeader :addTodo="addTodo"/> -->

      <!-- 方法2自定义事件 -->
      <!-- <TodoHeader @addTodo="addTodo"/> -->
      <TodoHeader ref="header"/>

      <!-- <TodoList :todos="todos" :deleteTodo="deleteTodo" /> -->
      <TodoList :todos="todos" />
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" 
      :selectAllTodos="selectAllTodos" />
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
  data() {
    return {
      todos: storageUtil.readTodos()
    }
  },
  watch: {
    // 深度监视数据, 当todos数据发生变化时, 调用handler函数将数据保存到localStorage中
    todos: {
      deep: true,
      // handler: function (value) {
      //   storageUtil.saveTodos(value);
      // }
      // 或
      handler: storageUtil.saveTodos
    }
  },
  mounted() { //执行异步事件
    // 给<TodoHeader ref="header"/>绑定addTodo事件监听
    this.$refs.header.$on('addTodo', this.addTodo);

    // 订阅消息
    PubSub.subscribe("deleteTodo", (msg, index) => {
      this.deleteTodo(index);
    })
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo);
    },
    deleteTodo (index) {
      this.todos.splice(index, 1);
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete);
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check);
    }
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

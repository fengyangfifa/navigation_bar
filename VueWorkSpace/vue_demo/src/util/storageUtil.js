/*
使用localStorage存储数据的工具模块
向外提供函数或者对象
*/
const TODOS_KEY = "todo_key";
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
  }
}

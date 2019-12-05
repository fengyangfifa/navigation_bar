import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo});
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index});
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check});
  },
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED);
  }
};

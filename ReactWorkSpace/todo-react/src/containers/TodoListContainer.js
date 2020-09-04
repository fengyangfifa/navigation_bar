import { connect } from "react-redux";

import TodoList from "../components/TodoList";
import { toggleTodo, fetchTodos } from "../actions";
import { getVisibleTodos } from "../selectors";
import { toJS } from "../HOCs/toJS";

// 把redux中的state映射到组件的props中
const mapStateToProps = (state) => {
  // .toJS()将immutable对象转换为正常的js对象，但是会返回一个新的对象，即使内部内容没有发生变化
  return {
    todos: getVisibleTodos(state),
  };
};

// 把redux中的action映射到组件的props中
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList));

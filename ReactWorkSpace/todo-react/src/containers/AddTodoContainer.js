import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";
import { setTodoText, addTodo } from "../actions";
import { getText } from "../selectors";

const mapStateToProps = (state) => {
  return {
    text: getText(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoText: (text) => dispatch(setTodoText(text)),
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

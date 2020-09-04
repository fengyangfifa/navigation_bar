import { SET_TODO_TEXT } from "../actions/actionTypes";

const text = (state = "", action) => {
  switch (action.type) {
    case SET_TODO_TEXT:
      return action.text;
    default:
      console.log('text', action);
      return state;
  }
};

export default text;

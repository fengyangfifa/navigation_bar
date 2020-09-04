import { createStore } from "redux";

import rootReducer from "./reducers";
import { addTodo, toggleTodo, setFilter, setTodoText } from "./actions";

const store = createStore(rootReducer);
// 打印出初始化的state
console.log(store.getState());

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 发生actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter("active"));
store.dispatch(setTodoText("Learn"));

// 取消订阅
unsubscribe();

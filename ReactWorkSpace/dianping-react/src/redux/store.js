import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";

import api from "./middleware/api";

let store;
// window.__REDUX_DEVTOOLS_EXTENSION__,判断浏览器是否安装redux调试工具
if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, api))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, api));
}

export default store;

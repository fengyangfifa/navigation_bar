import { combineReducers } from "redux";
import entities from "./entities";
import detail from "./detail";
import home from "./home";
import app from "./app";
import search from "./search";
import login from "./login";
import user from "./user";
import purchase from "./purchase";

// 合并成根reducer
const rootReducer = combineReducers({
  entities,
  detail,
  home,
  app,
  search,
  login,
  user,
  purchase,
});

export default rootReducer;

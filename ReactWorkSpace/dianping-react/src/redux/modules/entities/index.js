import { combineReducers } from "redux";
import products from "./products";
import orders from "./orders";
import comments from "./comments";
import shops from "./shops";
import keywords from "./keywords";

const rootReducer = combineReducers({
  products,
  orders,
  shops,
  comments,
  keywords,
});

export default rootReducer;

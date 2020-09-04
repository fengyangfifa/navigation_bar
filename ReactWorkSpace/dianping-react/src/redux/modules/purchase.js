import { createSelector } from "reselect";

import { getProductDetail } from "./entities/products";
import { actions as orderActions, AVAILABLE_TYPE } from "./entities/orders";

const initialState = {
  quantity: 1,
  showTip: false,
};

export const types = {
  // 购买数量
  SET_ORDER_QUANTITY: "PURCHASE/SET_ORDER_QUANTITY",
  CLOSE_TIP: "PURCHASE/CLOSE_TIP",
  // 提交
  SUBMIT_ORDER_REQUEST: "PURCHASE/SUBMIT_ORDER_REQUEST",
  SUBMIT_ORDER_SUCCESS: "PURCHASE/SUBMIT_ORDER_SUCCESS",
  SUBMIT_ORDER_FAILURE: "PURCHASE/SUBMIT_ORDER_FAILURE",
};

// action creators
export const actions = {
  // 设置下单数量
  setOrderQuantity: (quantity) => {
    return {
      type: types.SET_ORDER_QUANTITY,
      quantity,
    };
  },
  // 关闭tip
  closeTip: () => {
    return {
      type: types.CLOSE_TIP,
    };
  },
  // 提交
  submitOrder: (productId) => {
    return (dispatch, getState) => {
      dispatch({ type: types.SUBMIT_ORDER_REQUEST });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = getProductDetail(getState(), productId);
          const { quantity } = getState().purchase;
          const totalPrice = (product.currentPrice * quantity).toFixed(1);
          console.log(quantity, totalPrice);
          const text1 = `${quantity}张 | 总价：￥${totalPrice}`;
          const text2 = product.validityPeriod;
          const order = {
            title: `${product.shop}：${product.product}`,
            orderPicUrl: product.picture,
            channel: "团购",
            statusText: "待消费",
            text: [text1, text2],
            type: AVAILABLE_TYPE,
          };
          dispatch(orderActions.addOrder(order));
          dispatch({ type: types.SUBMIT_ORDER_SUCCESS });
        }, 500);
        resolve();
      });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ORDER_QUANTITY:
      return {
        ...state,
        quantity: action.quantity,
      };
    case types.CLOSE_TIP:
      return {
        ...state,
        showTip: false,
      };
    case types.SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        showTip: true,
      };
    default:
      return state;
  }
};

// selectors
export const getQuantity = (state) => {
  return state.purchase.quantity;
};

export const getTipStatus = (state) => {
  return state.purchase.showTip;
};

export const getProduct = (state, id) => {
  return getProductDetail(state, id);
};

// 使用createSelector优化计算，减少不必要的计算逻辑
export const getTotalPrice = createSelector(
  [getProduct, getQuantity],
  (product, quantity) => {
    if (!product) {
      return 0;
    }
    return (product.currentPrice * quantity).toFixed(1);
  }
);

export default reducer;

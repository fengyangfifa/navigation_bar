import createRecucer from "../../../utils/createRecucer";

export const schema = {
  name: "orders",
  id: "id",
};

// 已消费
export const USED_TYPE = 1;
// 待付款
export const TO_PAY_TYPE = 2;
// 可使用
export const AVAILABLE_TYPE = 3;
// 退款
export const REFUND_TYPE = 4;

export const types = {
  // 删除订单
  DELETE_ORDER: "ORDERS/DELETE_ORDER",
  // 新增评价
  ADD_COMMENT: "ORDERS/ADD_COMMENT",
  // 增加订单
  ADD_ORDER: "ORDERS/ADD_ORDER",
};

let orderIdCounter = 10;

export const actions = {
  deleteOrder: (orderId) => {
    return {
      type: types.DELETE_ORDER,
      orderId,
    };
  },
  // 新增评价
  addComment: (orderId, commentId) => {
    return {
      type: types.ADD_COMMENT,
      orderId,
      commentId,
    };
  },
  addOrder: (order) => {
    const orderId = `o-${orderIdCounter++}`;
    return {
      type: types.ADD_ORDER,
      orderId,
      order: {
        id: orderId,
        ...order,
      },
    };
  },
};

const normalReducer = createRecucer(schema.name);

const reducer = (state = {}, action) => {
  if (action.type === types.DELETE_ORDER) {
    const { [action.orderId]: deleteOrder, ...restOrders } = state;
    return restOrders;
  } else if (action.type === types.ADD_COMMENT) {
    return {
      ...state,
      [action.orderId]: {
        ...state[action.orderId],
        commentId: action.commentId,
      },
    };
  } else if (action.type === types.ADD_ORDER) {
    return {
      ...state,
      [action.orderId]: action.order,
    };
  } else {
    return normalReducer(state, action);
  }
};

export default reducer;

// selectors
export const getOrderById = (state, id) => {
  return state.entities.orders[id];
};

export const getAllOrders = (state) => {
  return state.entities.orders;
}
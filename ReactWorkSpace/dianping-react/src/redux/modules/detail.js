import { combineReducers } from "redux";

import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema as shopSchema, getShopById } from "./entities/shops";
import { schema as productSchema, getProductDetail, getProductById } from "./entities/products";

const initialState = {
  product: {
    isFetching: false,
    id: null,
  },
  relatedShop: {
    id: null,
    isFetching: false,
  },
};

export const types = {
  // 获取产品详情开始
  FETCH_PRODUCT_DETAIL_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  // 获取产品详情成功
  FETCH_PRODUCT_DETAIL_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCESS",
  // 获取产品详情失败
  FETCH_PRODUCT_DETAIL_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",
  // 获取关联店铺开始
  FETCH_SHOP_REQUEST: "DETAIL/FETCH_SHOP_REQUEST",
  // 获取关联店铺成功
  FETCH_SHOP_SUCCESS: "DETAIL/FETCH_SHOP_SUCCESS",
  // 获取关联店铺失败
  FETCH_SHOP_FAILURE: "DETAIL/FETCH_SHOP_FAILURE",
};

export const actions = {
  // 获取商品详情
  loadProductDetail: (id) => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(), id);
      if (product) {
        return dispatch(fetchProductDetailSuccess(id));
      }
      const endpoint = url.getProductDetail(id);
      return dispatch(fetchProductDetail(endpoint, id));
    };
  },
  // 获取店铺信息
  loadShopById: (id) => {
    return (dispatch, getState) => {
      const shop = getShopById(getState(), id);
      if (shop) {
        return dispatch(fetchProductByIdSuccess(id));
      }
      const endpoint = url.getShopById(id);
      return dispatch(fetchShopById(endpoint, id));
    };
  },
};

const fetchProductDetailSuccess = (id) => {
  return {
    type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
    id,
  };
};

const fetchProductByIdSuccess = (id) => {
  return {
    type: types.FETCH_SHOP_SUCCESS,
    id,
  };
};

const fetchProductDetail = (endpoint, id) => {
  return {
    [FETCH_DATA]: {
      types: [
        types.FETCH_PRODUCT_DETAIL_REQUEST,
        types.FETCH_PRODUCT_DETAIL_SUCCESS,
        types.FETCH_PRODUCT_DETAIL_FAILURE,
      ],
      endpoint,
      schema: productSchema,
    },
    id,
  };
};

const fetchShopById = (endpoint, id) => {
  return {
    [FETCH_DATA]: {
      types: [
        types.FETCH_SHOP_REQUEST,
        types.FETCH_SHOP_SUCCESS,
        types.FETCH_SHOP_FAILURE,
      ],
      endpoint,
      schema: shopSchema,
    },
    id,
  };
};

// reducer
const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        id: action.id,
        isFetching: false,
      };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        id: null,
      };
    default:
      return state;
  }
};

const relatedShop = (state = initialState.relatedShop, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_SHOP_SUCCESS:
      return {
        ...state,
        id: action.id,
        isFetching: false,
      };
    case types.FETCH_SHOP_FAILURE:
      return {
        ...state,
        isFetching: false,
        id: null,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  product,
  relatedShop,
});

// selectors
// 获取商品详情
export const getProduct = (state, id) => {
  return getProductDetail(state, id);
};

// 获取与商品关联的店铺信息
export const getRelatedShop = (state, productId) => {
  const product = getProductById(state, productId);
  const shopId = product ? product.nearestShop : null;
  if (shopId) {
    return getShopById(state, shopId);
  }
  return null;
};

export default reducer;

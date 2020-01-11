import {
  ADD_COUNTER, 
  ADD_TO_CART, 
  CHANGE_CHECKED,
  CHANGE_ALL_CHECKED
} from './mutation-types'

export default {
  addCart ({commit, state}, {product}) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => {
        return item.iid === product.iid;
      });
      if (oldProduct){
        commit(ADD_COUNTER, {oldProduct});
        resolve('当前的商品数量加 + 1');
      } else {
        product.count = 1;
        product.checked = true;
        commit(ADD_TO_CART, {product});
        resolve('添加了新的商品');
      }  
    });
  },

  changeCheck ({commit}, {product}) {
    commit(CHANGE_CHECKED, {product});
  },

  changeAllChecked ({commit}, {flag}) {
    commit(CHANGE_ALL_CHECKED, {flag})
  }
}
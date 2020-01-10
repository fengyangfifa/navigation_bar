import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  addCart ({commit, state}, {product}) {
    let oldProduct = state.cartList.find(item => {
      return item.iid === product.iid;
    });
    if (oldProduct){
      commit(ADD_COUNTER, {oldProduct});
    } else {
      product.count = 1;
      commit(ADD_TO_CART, {product});
    }
  }
}
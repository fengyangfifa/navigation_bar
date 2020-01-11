import {
  ADD_COUNTER, 
  ADD_TO_CART, 
  CHANGE_CHECKED,
  CHANGE_ALL_CHECKED
} from './mutation-types'

export default {
  [ADD_COUNTER] (state, {oldProduct}) {
    oldProduct.count++;
  },
  [ADD_TO_CART] (state, {product}) {
    state.cartList.push(product);
  },
  [CHANGE_CHECKED] (state, {product}) {
    product.checked = !product.checked;
  },
  [CHANGE_ALL_CHECKED] (state, {flag}) {
    state.cartList.forEach(item => {
      item.checked = flag;
    });
  }
}
import createRecucer from "../../../utils/createRecucer";

export const schema = {
  name: "products",
  id: "id",
};

// selectors
export const getProductDetail = (state, id) => {
  const product = state.entities.products[id];
  return product && product.detail && product.purchaseNotes ? product : null;
};

export const getProductById = (state, id) => {
  return state.entities.products[id];
}

const reducer = createRecucer(schema.name);

export default reducer;

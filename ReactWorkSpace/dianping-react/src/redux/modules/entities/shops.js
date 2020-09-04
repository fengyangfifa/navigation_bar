import createRecucer from "../../../utils/createRecucer";

export const schema = {
  name: "shops",
  id: "id",
};

// selectors
export const getShopById = (state, id) => {
  const shop = state.entities.shops[id];
  return shop;
};

const reducer = createRecucer(schema.name);

export default reducer;

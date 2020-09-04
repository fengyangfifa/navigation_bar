import createRecucer from "../../../utils/createRecucer";

export const schema = {
  name: "keywords",
  id: "id",
};

const reducer = createRecucer(schema.name);

// selectors
export const getKeywordById = (state, id) => {
  return state.entities.keywords[id];
};

export default reducer;

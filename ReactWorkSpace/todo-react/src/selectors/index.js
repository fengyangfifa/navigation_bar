import { createSelector } from "reselect";

export const getText = (state) => state.get("text");

export const getFilter = (state) => state.get("filter");

// const getTodos = (state) => {
//   return state.getIn(["todos", "data"]);
// };

// // 只有当todos和filter改变时才会执行，减少不必要的计算逻辑
// export const getVisibleTodos = createSelector(
//   [getTodos, getFilter],
//   (todos, filter) => {
//     console.log('getVisibleTodos');
//     switch (filter) {
//       case "all":
//         return todos;
//       case "completed":
//         return todos.filter((t) => t.get("completed"));
//       case "active":
//         return todos.filter((t) => !t.get("completed"));
//       default:
//         return new Error("Unknow filter: " + filter);
//     }
//   }
// );

export const getVisibleTodos = (state) => {
  // const {
  //   todos: { data },
  //   filter,
  // } = state;
  const data = state.getIn(["todos", "data"]);
  const filter = state.get("filter");
  console.log('getVisibleTodos');
  switch (filter) {
    case "all":
      return data;
    case "completed":
      return data.filter((t) => t.get("completed"));
    case "active":
      return data.filter((t) => !t.get("completed"));
    default:
      return new Error("Unknow filter: " + filter);
  }
};

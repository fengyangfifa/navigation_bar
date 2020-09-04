import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
import AddTodoContainer from "../containers/AddTodoContainer";
import TodoListContainer from "../containers/TodoListContainer";
import FooterContainer from "../containers/FooterContainer";
class App extends Component {
  render() {
    return (
      <div>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       filter: "all",
//     };
//     this.nextTodoId = 0;
//   }

//   getVisibleTodos = () => {
//     const currentFilter = this.state.filter;
//     return this.state.todos.filter((item) => {
//       if (currentFilter === "active") {
//         return !item.completed;
//       } else if (currentFilter === "completed") {
//         return item.completed;
//       } else {
//         return true;
//       }
//     });
//   };

//   addTodo = (text) => {
//     const todo = {
//       id: this.nextTodoId++,
//       text,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, todo],
//     });
//   };

//   toggleTodo = (id) => {
//     const newTodos = this.state.todos.map((item) => {
//       return item.id === id ? { ...item, completed: !item.completed } : item;
//     });
//     this.setState({
//       todos: newTodos,
//     });
//   };

//   setVisibilityFilter = (filter) => {
//     this.setState({
//       filter: filter,
//     });
//   };

//   render() {
//     const { filter } = this.state;
//     const todos = this.getVisibleTodos();
//     return (
//       <div>
//         <AddTodo addTodo={this.addTodo} />
//         <TodoList todos={todos} toggleTodo={this.toggleTodo} />
//         <Footer
//           filter={filter}
//           setVisibilityFilter={this.setVisibilityFilter}
//         />
//       </div>
//     );
//   }
// }

export default App;

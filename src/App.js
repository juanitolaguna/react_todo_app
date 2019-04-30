import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario cart" },
      { id: 3, content: "read a book" }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    if (todo.content.trim() !== "") {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];

      this.setState({
        todos: todos
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-primary">Todo's</h1>
          <br />
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <br />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

export default class AddForm extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add new TODO: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
        </form>
      </div>
    );
  }
}

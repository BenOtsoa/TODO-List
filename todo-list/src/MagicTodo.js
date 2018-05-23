import React, { Component } from "react";

import "./MagicTodo.css";

class MagicTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      enabled: false
    };
    this.newTodo = this.newTodo.bind(this);
    this.submission = this.submission.bind(this);
    this.setID = this.setID.bind(this);
  }

  setID(e) {
    if (e.keyCode === 13) {
      let id = Date.now();
      this.setState({ id });
    }
  }

  newTodo(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submission(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
  }
  render() {
    return (
      <form
        className="form-group MagicTodo"
        onSubmit={this.submission}
        onKeyDown={this.setID}
      >
        <div className="form-group MagicTodo">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="To Do, à faire au plus vite"
            onChange={this.newTodo}
          />
        </div>
      </form>
    );
  }
}

export default MagicTodo;

import React, { Component } from "react";
import "./Liste.css";
import Todo from "./Todo";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            removeOne={() => this.props.removeOne(todo)}
            cocher={this.props.cocher}
          />
        ))}
      </ul>
    );
  }
}

export default Liste;

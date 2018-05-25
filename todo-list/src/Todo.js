import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  modfiCSS() {}

  handleCheckbox(e) {
    if (this.state.checked === true) {
      this.setState({ checked: false });
    } else {
      this.setState({ checked: true });
    }
    this.props.cocher(this.props.todo, e.target.checked);
  }
  render() {
    let styleContent = "";
    if (this.state.checked === true) {
      styleContent = "styledChecked";
    }

    return (
      <div className="todo">
        <li className={styleContent}>
          <input
            type="checkbox"
            name="todo"
            id="todo"
            onClick={this.handleCheckbox}
          />
          {this.props.todo.title}
          <div className="supp" onClick={this.props.removeOne}>
            X
          </div>
        </li>
      </div>
    );
  }
}

export default Todo;

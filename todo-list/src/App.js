import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MagicTodo from "./MagicTodo";
import Liste from "./Liste";
import FooterList from "./FooterList";
import BarreRecherche from "./BarreRecherche";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "One",
          enabled: false
        },
        {
          id: 2,
          title: "Two",
          enabled: false
        },
        {
          id: 3,
          title: "Three",
          enabled: false
        },
        {
          id: 4,
          title: "Four",
          enabled: false
        }
      ]
    };
    this.todoPlusUn = this.todoPlusUn.bind(this);
    this.todoMoinsUn = this.todoMoinsUn.bind(this);
    this.cocher = this.cocher.bind(this);
    this.search = this.search.bind(this);
  }

  todoPlusUn(newTodo) {
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  todoMoinsUn(todo) {
    console.log("chérichéri");
    const tab = this.state.todos.filter(elt => elt.id !== todo.id);
    this.setState({ todos: tab });
    // sinon on passe en param depuis liste (todo) que l'on ramène dans la fonction, puis on peut faire (ma solution, mais on préférera ramener tout l'objet)
    // let todos = [...this.state.todos];
    // todos.splice(index, 1);
    // this.setState({ todos });
  }

  cocher(todo, checked) {
    const index = this.state.todos.findIndex(elt => elt.id === todo.id);
    const tab = [...this.state.todos];
    tab[index].enabled = checked;
    this.setState({ todos: tab });
  }

  filterCocheDecoche() {
    return this.state.todos.filter(elt => elt.enabled === false).length;
  }

  search(compare) {
    const maRegex = new RegExp(compare);
    const tab = this.state.todos.filter(elt => maRegex.test(elt.title));
    this.setState({ todos: tab });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Todo Checklist</h1>
          <MagicTodo addTodo={this.todoPlusUn} todos={this.state.todos} />
          <Liste
            todos={this.state.todos}
            removeOne={this.todoMoinsUn}
            cocher={this.cocher}
          />
        </div>
        <div className="container">
          <BarreRecherche comparaison={this.search} />
        </div>
        <FooterList nombreRestant={this.filterCocheDecoche()} />
      </div>
    );
  }
}

export default App;

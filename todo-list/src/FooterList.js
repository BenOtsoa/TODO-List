import React, { Component } from "react";

class FooterList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p>Nombre de tâches restantes {this.props.nombreRestant}</p>;
  }
}

export default FooterList;

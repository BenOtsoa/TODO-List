import React, { Component } from "react";

class BarreRecherche extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="recherche"
        id="recherche"
        onChange={e => this.props.comparaison(e.target.value)}
      />
    );
  }
}
//e => this.props.comparaison(e.target.value)
export default BarreRecherche;

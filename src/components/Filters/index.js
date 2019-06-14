import React, { Fragment } from "react";

class Filters extends React.Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="pokemon">Búsqueda</label>
        <input
          type="text"
          className="search-input"
          name="pokemon"
          id="pokemon"
          placeholder="Pikachu"
          value={this.props.pokemon}
          onChange={this.props.onChangeInput}
        />
      </Fragment>
    );
  }
}

export default Filters;

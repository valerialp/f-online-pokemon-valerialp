import React from "react";
import "./styles.scss";

class Filters extends React.Component {
  render() {
    return (
      <section className="search__container">
        <label htmlFor="pokemon" className="search-label">Búsqueda</label>
        <input
          type="text"
          className="search-input"
          name="pokemon"
          id="pokemon"
          placeholder="Filtrar pokemons por nombre..."
          value={this.props.pokemon}
          onChange={this.props.onChangeInput}
        />
      </section>
    );
  }
}

export default Filters;

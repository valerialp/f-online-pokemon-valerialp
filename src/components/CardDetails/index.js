import React from "react";
import "./styles.scss";

class CardDetails extends React.Component {
  render() {
    const pokemon = this.props.info.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    const evolution = this.props.evo.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    // const imageEvolution = this.props.info.find(item => evolution.evolves_from_species.name ? item.name === evolution.evolves_from_species.name : null);
    // // const image = imageEvolution.sprites.front_default;
    // console.log(imageEvolution)
    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{evolution.evolves_from_species.name}</p>
      </div>
    );
  }
}

export default CardDetails;

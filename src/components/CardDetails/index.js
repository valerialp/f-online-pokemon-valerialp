import React, { Fragment } from "react";
import Loading from "../Loading";
import pokeball from "../../images/pokeball.svg";
import "./styles.scss";

class CardDetails extends React.Component {
  render() {
    const pokemon = this.props.info.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    const evolution = this.props.evo.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    const imageEvolution = this.props.info.find(item =>
      evolution.evolves_from_species.name
        ? item.name === evolution.evolves_from_species.name
        : null
    );
    const image = imageEvolution.sprites.front_default;
    return (
      <Fragment>
        {pokemon && evolution ? (
          <div className="card-details__container">
            <div className="card-details__info">
              <img
                className="image-details"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <img src={pokeball} alt="logo pokemon" className="info-icon" />
              <p className="info-name">
                {pokemon.id} {pokemon.name}
              </p>
              {pokemon.types.map(item => (
                <p className={"type " + item.type.name}>{item.type.name} </p>
              ))}
              <div className="hp-pkemon">
                <p className="hp-stat">{pokemon.stats[5].stat.name}: </p>
                <progress
                  className="hp"
                  max="150"
                  value={pokemon.stats[5].base_stat}
                >
                  {" "}
                </progress>
              </div>
            </div>
            <div className="card-details__stats">
              <div className="stats__container">
                <div className="triangle1" />
                <div className="triangle2" />
                <div className="triangle3" />
                <div className="triangle4" />
                <div className="triangle5" />
              </div>
            </div>
            {/* <div className="card-details__abilities--evolution"> */}
            <section className="card-details__characteristics">
              <h3 className="title characteristics">Características</h3>
              <p>Altura: {pokemon.height}</p>
              <p>Peso: {pokemon.weight}</p>
            </section>
            <section className="card-details__abilities">
              <h3 className="title abilities">Habilidades</h3>
              {pokemon.abilities.map(item => (
                <p>{item.ability.name}</p>
              ))}
            </section>
            {/* </div> */}
            <section className="card-details__evolution">
              <h3 className="title evolution">Evoluciones</h3>
              <img src={image} alt={imageEvolution.name} />
              {image ? <i class="fas fa-arrow-right"></i> : null}
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </section>
          </div>
        ) : (
          <Loading />
        )}
      </Fragment>
    );
  }
}

export default CardDetails;

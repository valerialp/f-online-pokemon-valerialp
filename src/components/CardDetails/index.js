import React, { Fragment } from "react";
import { Chart } from "react-google-charts";
import Loading from "../Loading";
import getEvolutionChain from "../../services/getEvolutionChain";
import pokeball from "../../images/pokeball.svg";
import "./styles.scss";

class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evolutions: []
    };
    const pokemon = this.props.pokemons.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
  }

  componentDidUpdate() {
    this.fetchEvolutions();
  }
  fetchEvolutions() {
    const evolution = this.props.evo.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    evolution
      ? getEvolutionChain(evolution.evolution_chain.url).then(data => {
          const evo1 = data.chain.species.name;
          const evo2 = data.chain.evolves_to[0].species.name;
          const evo3 = data.chain.evolves_to[0].evolves_to[0].species.name;
          this.setState({ evolutions: [evo1, evo2, evo3] });
        })
      : console.log("loading data");
  }

  transformDataToPieHole(pokemon) {
    let stats = [["pokemon", "habilidades"]];
    for (let i = 0; i < pokemon.stats.length - 1; i++) {
      const stat = [pokemon.stats[i].stat.name, pokemon.stats[i].base_stat];
      stats.push(stat);
    }
    return stats;
  }

  render() {
    const pokemon = this.props.pokemons.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    const evolution = this.props.evo.find(
      item => item.id === parseInt(this.props.match.params.id)
    );
    const imageEvolution = evolution
      ? this.props.pokemons.find(item =>
          evolution.evolves_from_species
            ? item.name === evolution.evolves_from_species.name
            : null
        )
      : null;
    const image = imageEvolution ? imageEvolution.sprites.front_default : null;
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
              <Chart
                chartType="PieChart"
                width="250px"
                height="200px"
                background="transparent"
                data={this.transformDataToPieHole(pokemon)}
                options={{
                  slices: [
                    {
                      color: "#6b6bff"
                    },
                    {
                      color: "#1e1eff"
                    },
                    {
                      color: "#c20303"
                    },
                    {
                      color: "#ff2c2c"
                    },
                    {
                      color: "#EE8268"
                    }
                  ],
                  chartArea: {
                    top: "40",
                    left: "10",
                    width: "90%",
                    height: "80%",
                    stroke: "#1C1C1C"
                  },
                  backgroundColor: "transparent",
                  pieSliceBorderColor: "#856D56",
                  pieSliceTextStyle: {
                    color: "#1C1C1C",
                    bold: true
                  },
                  legend: {
                    position: "rigth",
                    alignment: "start",
                    textStyle: {
                      color: "#fff",
                      fontSize: 10
                    }
                  },
                  title: "Habilidades",
                  pieHole: 0.4,
                  is3D: false,
                  titleTextStyle: {
                    color: "#856D56",
                    fontSize: 20
                  }
                }}
              />
            </div>
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
            <section className="card-details__evolution">
              <h3 className="title evolution">Evoluciones</h3>
              {image ? (
                <Fragment>
                  <img src={image} alt={pokemon.name} />
                  <i class="fas fa-arrow-right" />
                </Fragment>
              ) : null}
              <img
                src={pokemon.sprites.front_default}
                alt={imageEvolution ? imageEvolution.name : null}
              />
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

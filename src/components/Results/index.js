import React from "react";
import Card from "../Card";
import Loading from "../Loading";
import "./styles.scss";
import { Link } from "react-router-dom";

class Results extends React.Component {
  render() {
    const { pokemons, byName, evolution} = this.props;
    return (
      <ul className="list">
        {pokemons.length ? (
          pokemons
            .filter(item => (byName ? item.name.includes(byName) : true))
            .map(item => {
              const name = item.name;
              const evo = evolution.find(item => item.name === name);
              const key = item.id;
              return (
                <Link to={`/pokemon/${key}`} key={key}>
                  <li className="card" id={key} key={key}>
                    <Card item={item} evo={evo} />
                  </li>
                </Link>
              );
            })
        ) : (
          <Loading />
        )}
      </ul>
    );
  }
}

export default Results;

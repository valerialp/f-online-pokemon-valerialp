import React from "react";
import Card from "../Card";
import "./styles.scss";
import { Link } from "react-router-dom";

class Results extends React.Component {
  render() {
    const { info, pokemon, evolution} = this.props;
    return (
      <ul className="list">
        {info.length ? (
          info
            .filter(item => (pokemon ? item.name.includes(pokemon) : true))
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
          <p>Loading...</p>
        )}
      </ul>
    );
  }
}

export default Results;

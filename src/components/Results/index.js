import React from "react";
import Card from "../Card";
import "./styles.scss";
import { Link } from "react-router-dom";

class Results extends React.Component {
  render() {
    const { info, pokemon } = this.props;
    console.log(info)
    return (
      <ul className="list">
        {info.length ? (
          info
            .filter(item => (pokemon ? item.name.includes(pokemon) : true))
            .map(item => {
              console.log(item)
              const key = item.id;
              return (
                <Link to={`/pokemon/${key}`} key={key}>
                  <li className="card" id={key} key={key}>
                    <Card item={item} />
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

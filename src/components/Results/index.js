import React from "react";
import Card from "../Card";
import "./styles.scss";

class Results extends React.Component {
  render() {
    const { info, pokemon } = this.props;
    return (
      <ul className="list">
        {info.length ? (
          info
            .filter(item => item.name.includes(pokemon))
            .map(item => {
              const key = item.id;
              return (
                <li className="card" key={key}>
                  <Card item={item} />
                </li>
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

import React from "react";
import Card from '../Card';

class Results extends React.Component {
  render() {
    const { data, pokemon } = this.props;
    return (
      <ul>
        {data.length
          ? data
              .filter(item => item.name.includes(pokemon))
              .map(item => {
                return (
                  <li className="card-pokemon" key={item.id}>
                    <Card item={item}/>
                  </li>
                );
              })
          : <p>Loading...</p>}
      </ul>
    );
  }
}

export default Results;

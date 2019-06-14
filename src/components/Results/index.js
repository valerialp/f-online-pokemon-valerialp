import React from "react";

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
                  <li>
                    <p>hola</p>
                  </li>
                );
              })
          : <p>Loading...</p>}
      </ul>
    );
  }
}

export default Results;

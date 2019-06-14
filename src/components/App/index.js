import React from "react";
import "./styles.scss";
import Filters from "../Filters";
import Results from "../Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pokemon: ""
    };

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then(response => response.json())
      .then(data => {
        const dataIndex = data.results.map((item, index) => {
          return { ...item, id: index + 1 };
        });
  
        const dataInfo = [];
  
        return dataIndex.map(item =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${item.id}`)
            .then(response => response.json())
            .then(item => {
              dataInfo.push(item);
              return dataInfo;
            })
            .then(dataInfo => this.setState({info:dataInfo}))
        );
      });

  }

  handleChangeInputSearch(e) {
    const { value } = e.target;
    this.setState({
      pokemon: value
    });
  }

  render() {
    return (
      <div className="App">
        <Filters
          pokemon={this.state.pokemon}
          onChangeInput={this.handleChangeInputSearch}
        />
        <Results pokemon={this.state.pokemon} data={this.state.data} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./styles.scss";
import Filters from "../Filters";
import Results from "../Results";
import { getData } from "../../services/getData";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      pokemon: ""
    };

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
  }

  componentDidMount() {
    // console.log(getData());
    // // getData().then(dataInfo => {
    // //   dataInfo.sort((a, b) => a.id - b.id);
    // //   this.setState({ info: dataInfo });
    // // });;
    this.getData();
  }

  getData() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
      .then(response => response.json())
      .then(data => {
        const dataInfo = [];

        return data.results.map(item =>
          fetch(item.url)
            .then(response => response.json())
            .then(item => {
              dataInfo.push(item);
              return dataInfo;
            })
            .then(dataInfo => {
              dataInfo.sort((a, b) => a.id - b.id);
              this.setState({ info: dataInfo });
            })
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
        <div className="black-left" />
        <div className="black-right" />
        <div className="red-left" />
        <div className="red-right" />

        <Filters
          pokemon={this.state.pokemon}
          onChangeInput={this.handleChangeInputSearch}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Results pokemon={this.state.pokemon} info={this.state.info} />
            )}
          />
          <Route path="/pokemon/:id"  />
        </Switch>
        <Results pokemon={this.state.pokemon} info={this.state.info} />
      </div>
    );
  }
}

export default App;

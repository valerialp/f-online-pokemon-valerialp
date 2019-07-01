import React from "react";
import "./styles.scss";
import Filters from "../Filters";
import Results from "../Results";
import CardDetails from "../CardDetails";
import getData from "../../services/getData";
import getDetail from "../../services/getDetail";
import getEvolution from "../../services/getEvolution";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      evolution: [],
      byName: ""
    };

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    getData().then(data => {
      const pokemonData = data.results.map(item => getDetail(item.url));
      Promise.all(pokemonData).then(responses => {
        this.setState({
          pokemons: responses
        });
        const evolution = responses.map(item => getEvolution(item.id));

        Promise.all(evolution).then(evolution =>
          this.setState({
            evolution: evolution
          })
        );
      });
    });
  }

  handleChangeInputSearch(e) {
    const { value } = e.target;
    this.setState({
      byName: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="background" />
        <Filters
          byName={this.state.byName}
          onChangeInput={this.handleChangeInputSearch}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Results
                byName={this.state.byName}
                pokemons={this.state.pokemons}
                evolution={this.state.evolution}
              />
            )}
          />
          <Route
            path="/pokemon/:id"
            render={routerProps => (
              <CardDetails
                pokemons={this.state.pokemons}
                evo={this.state.evolution}
                match={routerProps.match}
              />
            )}
          />
        </Switch>
        <div className="licence-icons">
          Icons made by{" "}
          <a
            href="https://www.flaticon.es/autores/nikita-golubev"
            title="Nikita Golubev"
          >
            Nikita Golubev
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.es/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;

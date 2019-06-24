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
      info: [],
      evolution: [],
      pokemon: ""
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
          info: responses
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
      pokemon: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="background" />
        {/* <div className="black-left" />
        <div className="black-right" />
        <div className="red-left" />
        <div className="red-right" /> */}

        <Filters
          pokemon={this.state.pokemon}
          onChangeInput={this.handleChangeInputSearch}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Results
                pokemon={this.state.pokemon}
                info={this.state.info}
                evolution={this.state.evolution}
              />
            )}
          />
          <Route
            path="/pokemon/:id"
            render={routerProps => (
              <CardDetails
                info={this.state.info}
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

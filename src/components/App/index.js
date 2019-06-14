import React from 'react';
import './styles.scss';
import Filters from '../Filters';
import Results from '../Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[{name:'pikachu'}, {name:'mew'}, {name:'vulpix'}],
      pokemon:'',
    }

    this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this);
  }

  handleChangeInputSearch(e){
    const { value } = e.target;
    this.setState({
      pokemon: value,
    })
  }

  render() {
    return (
      <div className="App">
        <Filters pokemon={this.state.pokemon} onChangeInput={this.handleChangeInputSearch}/>
        <Results pokemon={this.state.pokemon} data={this.state.data}/>
      </div>
    );
  }
}

export default App;

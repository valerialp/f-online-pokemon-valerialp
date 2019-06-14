import React from 'react';
import './styles.scss';
import Filters from '../Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
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
      </div>
    );
  }
}

export default App;

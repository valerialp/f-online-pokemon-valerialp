import React from 'react';
import './styles.scss';
import Filters from '../Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Filters/>
      </div>
    );
  }
}

export default App;

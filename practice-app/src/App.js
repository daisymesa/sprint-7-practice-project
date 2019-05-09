import React from 'react';
import './App.css';

import Content from "./components/Content";
import DataList from "./components/DataList";

import Data from "./components/Data";


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      lambdaFriends: Data
    }
  }

  render() {
    return (
      <div className="App">
        <DataList content={this.state.lambdaFriends} />
      </div>
    )
  }
}

export default App;

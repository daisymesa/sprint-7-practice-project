import React from 'react';
import './App.css';

import Content from "./components/Content";
import DataList from "./components/DataList";


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      content: Data
    }
  }

  render() {
    return (
      <div className="App">
        <DataList content={this.state.content} />
      </div>
    )
  }
}

export default App;

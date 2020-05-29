import React, { Component } from 'react';

import Header from './components/header/Header'
import routes from './routes'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;

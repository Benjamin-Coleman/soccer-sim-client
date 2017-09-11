import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import FixtureContainer from './components/FixtureContainer'

class App extends Component {

  state = {
    predictions: []
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path={'/competitions/:id/fixtures'} render={(match) => <FixtureContainer competition={match} />}/>
      </div>
    );
  }
}

export default App;

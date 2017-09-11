import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import FixtureContainer from './components/FixtureContainer'
import FixtureDetails from './components/FixtureDetails'
import Competitions from './components/Competitions'

class App extends Component {

  state = {
    predictions: []
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path={'/competitions/:id/fixtures'} render={(match) => <FixtureContainer competition={match} />}/>
        <Route path={'/competitions/:id/fixtures/:fixture'} render={(match) => <FixtureDetails fixture={match} />}/>
        <Route exact path="/competitions" component={Competitions} />
      </div>
    );
  }
}

export default App;

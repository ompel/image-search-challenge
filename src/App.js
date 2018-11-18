import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSadTear } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

library.add(faSearch, faSadTear);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;

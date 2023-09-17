import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Test from './components/pages/Test/Test.js';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/test" component={Test} />
  </Switch>
);

export default App;

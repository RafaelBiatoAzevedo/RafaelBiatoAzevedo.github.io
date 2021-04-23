import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Provider from './context/Provider';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={ Home } />
        <Route exact path="/info-planet" component={ Header } />
      </Provider>
    </Switch>
  );
}

export default App;

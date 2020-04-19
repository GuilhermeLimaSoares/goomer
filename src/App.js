import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;

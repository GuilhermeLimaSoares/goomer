import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Restaurants from './pages/restaurants';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/restaurantes" component={Restaurants} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

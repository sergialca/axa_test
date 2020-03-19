import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;

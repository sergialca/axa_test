import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/project-cards" component={Home} />
        <Redirect from="/" to="/project-cards" />
      </Switch>
    </div>
  );
}

export default App;

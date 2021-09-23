import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/details/:id" component={ Details } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// Api utilizada:
// https://www.thecocktaildb.com/api.php
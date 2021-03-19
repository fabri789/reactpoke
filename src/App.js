import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Inicio from "./components/Inicio";
import ListaPokemon from "./components/ListaPokemon";
import Mapa from "./components/mapa";
import Pokemon from "./components/Pokemon";

function App() {
  const [selectedTab, setSelectTab] = useState(1);
  const select = (event, newValue) => {
    setSelectTab(newValue);
  };

  return (
    <div className="App">
      <Router>
        <Inicio></Inicio>
        <Switch>
          <Route component={Mapa} path="/mapa"></Route>
          <Route component={ListaPokemon} path="/ListaPokemon"></Route>
          <Route component={Pokemon} path="/Pokemon/:id"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

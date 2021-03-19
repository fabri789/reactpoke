import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import MostrarLista from "./ListaPokemon";
import Mapa from "./mapa";
import Pokemon from "./Pokemon";

const Inicio = () => {
  const [selectedTab, setSelectTab] = useState(0);

  const select = (event, newValue) => {
    setSelectTab(newValue);
  };

  // if (selectedTab === null) return null;
  return (
    <React.Fragment>
      <div>
        <AppBar position="relative">
          <Tabs value={selectedTab} onChange={select}>
            <Tab component={Link} to="/mapa" label="Mapa" />
            <Tab component={Link} to="/ListaPokemon" label="Lista Pokemones" />
          </Tabs>
        </AppBar>
      </div>
      {/* {selectedTab === 0 && <Mapa></Mapa>}
      {selectedTab === 1 && <MostrarLista></MostrarLista>} */}
    </React.Fragment>
  );
};

export default Inicio;

import React, { useContext } from "react";
import Profile from "./Components/Player/Profile";
import { useLocation } from "react-router-dom";
import MasterContext from "../Context/";
import Status from "./Components/Player/Status";
import Header from "./Components/Header";
import Resistences from "./Components/Player/Resitences";
import Defenses from "./Components/Player/Defenses";
import Attributes from "./Components/Player/Attributes";
import Skills from "./Components/Player/Skills";
import Habilities from "./Components/Player/Habilities";
import Inventory from "./Components/Player/Inventory";

function PlayerPage() {
  const master = useContext(MasterContext);
  const { players } = master;

  const { pathname } = useLocation();
  const playerId = pathname.split("/")[2];

  return (
    players === undefined || players.length === 0 ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div>
        <Header title="FICHA DO CAÇADOR" showNavBar />
  
        <Profile id={ playerId } />

        <Status id={ playerId } />

        <Defenses id={ playerId } />

        <Resistences id={ playerId } />

        <Attributes id={ playerId } />

        <Skills id={ playerId } />

        <Habilities id={ playerId } />

        <Inventory id={ playerId } />
      </div>
    )
  );
}

export default PlayerPage;
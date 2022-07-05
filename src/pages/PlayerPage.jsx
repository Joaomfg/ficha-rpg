import React, { useContext, useEffect, useRef } from "react";
import Profile from "./Components/Player/Profile";
import { useLocation } from "react-router-dom";
import MasterContext from "../Context/";
import Status from "./Components/Player/Status";

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
        <h1>FICHA DO CACADOR</h1>
  
        <Profile id={ playerId } />

        <Status id={ playerId } />
      </div>
    )
  );
}

export default PlayerPage;
import React, { useContext } from "react";
import Profile from "./Components/Profile";
import { useLocation } from "react-router-dom";
import MasterContext from "../Context/";

function PlayerPage() {
  const master = useContext(MasterContext);
  const { players } = master;

  const { pathname } = useLocation();
  const playerId = pathname.split("/")[2];
  console.log(playerId);

  return (
    players === undefined || players.length === 0 ? (
      <div>
        <h1>Loading...</h1>
      </div>
    ) : (
      <div>
        <h1>FICHA DO CACADOR</h1>
  
        <Profile id={ playerId } />
      </div>
    )
  );
}

export default PlayerPage;
import React, { useContext } from "react";
import StatusBar from "./StatusBar";
import MasterContext from "../../../Context/";

function Status({ id }) {
  const master = useContext(MasterContext);
  const { players, changeStatus } = master;

  const player = players.find((p) => p.id === parseFloat(id));
  const { pv, pvM, pe, peM, ps, psM } = player;

  return (
    <div>
      <h2>STATUS</h2>

      <StatusBar
        id={ id }
        title="Vida"
        color="red"
        p={pv}
        pM={pvM}
      />
      <StatusBar
        id={ id }
        title="P.E"
        color="green"
        p={pe}
        pM={peM}
      />
      <StatusBar
        id={ id }
        title="Sanidade"
        color="blue"
        p={ps}
        pM={psM}
      />
    </div>
  );
}

export default Status;

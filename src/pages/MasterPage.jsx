import React, { useContext } from "react";
import MasterContext from "../Context/";

function MasterPage() {
  const master = useContext(MasterContext);
  const { name } = master;

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default MasterPage;

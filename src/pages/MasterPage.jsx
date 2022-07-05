import React from "react";
import Header from "./Components/Header";
import PlayerDisplay from "./Components/Master/PlayerDisplay";

function MasterPage() {
  return (
    <div>
      <Header title="PAINEL DO MESTRE" showNavBar={false} />
      <PlayerDisplay />
    </div>
  );
}

export default MasterPage;

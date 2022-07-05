import React, { useState } from "react";
import PropTypes from "prop-types";
import MyContext from "../index";

export default function MasterProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [id, setId] = useState(0);

  // player example
  //   {
  //    id: 1,
  //    name: "Player 1",
  //    img: 'url/avatar',
  //    pv: 10,
  //    pvM: 10,
  //    pe: 10,
  //    peM: 10,
  //    ps: 10,
  //    psM: 10,
  //    diceHistory: [
  //      {
  //        [type]: value,
  //      },
  //    ],
  //   }

  // Funcao que vai puxar do sql para definir o id
  // setCurrentId = (id) => {}
  
  const createPlayer = (name) => {
    const newPlayer = {
        id,
        name,
        pv: 0,
        pvM: 0,
        pe: 0,
        peM: 0,
        ps: 0,
        psM: 0,
    }
    console.log('opa');
    
    setPlayers([...players, newPlayer]);
    setId(id + 1);
  };

  const removePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  }

  const changeStatus = (id, title, pAtual, pMax) => {
    const numberId = parseFloat(id);
    let updatedPlayers = '';
    if (title === 'Vida') {
      updatedPlayers = players.map((player) => {
        if (player.id === numberId) {
          player.pv = pAtual;
          player.pvM = pMax;
        }
        return player;
      }
      );
    } else if (title === 'P.E') {
      updatedPlayers = players.map((player) => {
        if (player.id === numberId) {
          player.pe = pAtual;
          player.peM = pMax;
        }
        return player;
      }
      );
    } else {
      updatedPlayers = players.map((player) => {
        if (player.id === numberId) {
          player.ps = pAtual;
          player.psM = pMax;
        }
        return player;
      }
      );
    }
    console.log(updatedPlayers);

    setPlayers(updatedPlayers);
  }

  const contextValue = {
    players,
    setPlayers,
    createPlayer,
    removePlayer,
    changeStatus,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

MasterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

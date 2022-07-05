import React, { useState, useContext, useEffect } from "react";
import MasterContext from "../../Context/";

function Profile({ id }) {
  const master = useContext(MasterContext);
  const { players, setPlayers } = master;

  const [playerName, setPlayerName] = useState("");
  const [name1, setName1] = useState("");
  const [origin, setOrigin] = useState("");
  const [className, setClass] = useState("");
  const [nex, setNex] = useState(0);
  const [patent, setPatent] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setName1(players[id].name);
  }, [])
  
  const handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;

    switch (name) {
      case "playerName":
        setPlayerName(value);
        break;
      case "name":
        setName1(value);
        break;
      case "origin":
        setOrigin(value);
        break;
      case "className":
        setClass(value);
        break;
      case "nex":
        setNex(value);
        break;
      case "patent":
        setPatent(value);
        break;
      case "path":
        setPath(value);
        break;
      default:
        break;
    }
  };

  const saveProfile = () => {
    // Essa funcao vai salvar as infos no SQL tambem!
    const player = players.find((player) => player.id === parseFloat(id));
    player.name = name1;
    
    const newPlayers = players.filter((player) => player.id !== parseFloat(id));
    
    setPlayers([...newPlayers, player]);
  };

  return (
    <div>
      <h3>DETALHES DO CAÇADOR</h3>

      <div>
        <label htmlFor="playerName">
          NOME DO JOGADOR
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            name="playerName"
            id="playerName"
          />
        </label>

        <label htmlFor="name">
          NOME DO CAÇADOR
          <input
            type="text"
            value={name1}
            onChange={handleChange}
            name="name"
            id="name"
          />
        </label>

        <label htmlFor="origin">
          ORIGEM
          <input
            type="text"
            value={origin}
            onChange={handleChange}
            name="origin"
            id="origin"
          />
        </label>

        <label htmlFor="class">
          CLASSE
          <input
            type="text"
            value={className}
            onChange={handleChange}
            name="class"
            id="class"
          />
        </label>

        <label htmlFor="nex">
          NEX
          <input
            type="text"
            value={nex}
            onChange={handleChange}
            name="nex"
            id="nex"
          />
        </label>

        <label htmlFor="patent">
          PATENTE
          <input
            type="text"
            value={patent}
            onChange={handleChange}
            name="patent"
            id="patent"
          />
        </label>

        <label htmlFor="path">
          TRILHA
          <input
            type="text"
            value={path}
            onChange={handleChange}
            name="path"
            id="path"
          />
        </label>

        <button type="button" onClick={() => saveProfile()}>
          SALVAR
        </button>
      </div>
    </div>
  );
}

export default Profile;

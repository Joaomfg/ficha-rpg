import React, { useContext, useState } from "react";
import NewPlayer from "../Components/Modals/NewPlayer";
import MasterContext from "../../Context/";
import { Link } from "react-router-dom";

function PlayerDisplay() {
  const master = useContext(MasterContext);
  const { players, removePlayer } = master;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>Caçadores</h3>

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          +
        </button>
      </div>

      <div>
        {players.map(({ id, name, pv, pvM, pe, peM, ps, psM }) => (
          <div key={id}>
            <span>{name}</span>
            <span>{`${pv}/${pvM}`}</span>
            <span>{`${pe}/${peM}`}</span>
            <span>{`${ps}/${psM}`}</span>

            <button type="button" onClick={() => removePlayer(id)}>
              delete
            </button>

            <Link to={ `/player/${id}` }>
                <button
                type="button"
                >
                ficha
                </button>
            </Link>
          </div>
        ))}
      </div>

      {isOpen && <NewPlayer closeModal={setIsOpen} />}
    </div>
  );
}

export default PlayerDisplay;

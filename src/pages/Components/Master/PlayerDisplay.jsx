import React, { useContext, useState } from "react";
import NewPlayer from "../Modals/NewPlayer";
import MasterContext from "../../../Context";
import { Link } from "react-router-dom";
import { heart } from "../../helpers/";

function PlayerDisplay() {
  const master = useContext(MasterContext);
  const { players, removePlayer } = master;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-solid border-2 border-white-500 w-11/12 m-auto mt-10">
      <div className="flex justify-between items-center p-5">
        <h3 className="font-medium leading-tight text-4xl mt-0 mb-2 text-white-600">
          Fichas dos Caçadores
        </h3>

        <button
          className="px-6 py-1 border-2 border-blue-400 text-white-600 font-semibold text-3xl leading-tight rounded bg-purple-900 hover:bg-purple-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          +
        </button>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {players.map(({ id, name, pv, pvM, pe, peM, ps, psM }) => (
          <div className="flex flex-col border-4 border-white-400 w-96 rounded bg-gray-900 p-5 my-5 mx-3" key={id}>
            <span className="text-4xl mb-5">{name}</span>
            <div className="flex flex-row items-start">

              <div className="flex flex-col">
                <span className="text-3xl text-red-600">{`${heart} ${pv}/${pvM}`}</span>
                <span className="text-3xl text-green-600">{`PE ${pe}/${peM}`}</span>
                <span className="text-3xl text-blue-600">{`SAN ${ps}/${psM}`}</span>
              </div>

              <div className="flex flex-col ml-10">
                <button className="border-2 rounded p-3 bg-black" type="button" onClick={() => removePlayer(id)}>
                  D
                </button>

                <Link to={`/player/${id}`}>
                  <button className="border-2 rounded p-3 bg-black" type="button">F</button>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {isOpen && <NewPlayer closeModal={setIsOpen} />}
    </div>
  );
}

export default PlayerDisplay;

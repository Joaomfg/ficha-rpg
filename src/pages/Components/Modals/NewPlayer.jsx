import React, { useState, useContext } from "react";
import styles from "./Modal.module.css";
import MasterContext from "../../../Context/";

function NewPlayer({ closeModal }) {
  const masterContext = useContext(MasterContext);
  const { createPlayer } = masterContext;

  const [name, setName] = useState("");

  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  const createAndClose = () => {
    createPlayer(name);
    closeModal(false);
  };

  return (
    <div
      onClick={() => closeModal(false)}
      className="w-screen h-screen fixed top-0 left-0 flex justify-center content-center items-center bg-black bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-10/12 bg-black flex flex-col p-25 border-solid border-1 border-white-500"
      >
        <div className="modal-content border-solid border-2 border-white-500 shadow-lg relative flex flex-col w-full pointer-events-auto bg-black bg-clip-padding outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-start justify-between p-4 rounded-t-md">
            <h1 className="text-3xl font-medium leading-normal text-white-800">
              Novo Caçador(a)
            </h1>

            <button
              className="btn-close box-content w-4 h-4 p-1 text-xl text-white border-none rounded-none"
              type="button"
              onClick={() => closeModal(false)}
            >
              X
            </button>
          </div>

          <div className="modal-body relative p-4">
            <label
              className="form-label inline-block mb-2 text-2xl text-white-700"
              htmlFor="hunterName"
            >
              Nome:
              <input
                className="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-white-700
                bg-black bg-clip-padding
                border-b border-solid border-white-300
                transition
                ease-in-out
                m-0
                focus:text-white-700 focus:bg-black focus:focus:outline-none
              "
                id="hunterName"
                type="text"
                value={name}
                onChange={handleName}
              />
            </label>
          </div>

          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 rounded-b-md">
            <button
              className="px-4 py-1 border-2 w-10/12 border-blue-400 text-white-600 font-semibold text-xl leading-tight rounded bg-purple-900 hover:bg-purple-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => createAndClose()}
              type="button"
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPlayer;

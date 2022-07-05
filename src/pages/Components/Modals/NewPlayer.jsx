import React, { useState, useContext } from "react";
import styles from "./Modal.module.css";
import MasterContext from "../../../Context/";

function NewPlayer({ closeModal }) {
  const masterContext = useContext(MasterContext);
  const { createPlayer } = masterContext;
  
    const [name, setName] = useState("");

  const handleName = ({ target: { value } }) => {
    setName(value);
  }

  const createAndClose = () => {
    createPlayer(name);
    closeModal(false);
  }
  
  return (
    <div onClick={() => closeModal(false)} className={styles.modalBackground}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <div className={styles.close}>
          <button type="button" onClick={() => closeModal(false)}>
            X
          </button>
        </div>

        <div className={styles.title}>
          <h1>Novo Caçador(a)</h1>
        </div>

        <div className={styles.body}>
          <label htmlFor="hunterName">
            Nome:
            <input
              id="hunterName"
              type="text"
              value={name}
              onChange={handleName}
            />
          </label>
        </div>

        <div className="footer">
          <button onClick={ () => createAndClose() } type="button">Criar</button>
        </div>
      </div>
    </div>
  );
}

export default NewPlayer;

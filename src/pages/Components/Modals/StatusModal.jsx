import React, { useState, useContext } from "react";
import styles from "./Modal.module.css";
import MasterContext from "../../../Context";

function StatusModal({ closeModal, id, title, p, pM }) {
  const masterContext = useContext(MasterContext);
  const { changeStatus } = masterContext;

  const [pAtual, setPAtual] = useState(p);
  const [pMax, setPMax] = useState(pM);
  const [showAlert, setShowAlert] = useState(false);

  const handleStatus = ({ target }) => {
    const { value, name } = target;
    if (name === "pAtual") {
      setPAtual(value);
    }
    if (name === "pMax") {
      setPMax(value);
    }
  };

  const createAndClose = () => {
    if (parseInt(pAtual) < 0 || parseInt(pAtual) > pMax) {
      setShowAlert(true);
    } else {
      changeStatus(id, title, pAtual, pMax);
      closeModal(false);
    }

  };

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
          <h1>{title}</h1>

          <p>
            Selecione a sua pontuação atual e máxima respectivamente
            <br />
            Atenção! A pontuação máxima deve ser maior que a pontuação atual e
            não são aceitos valore negativos
          </p>

          {showAlert && (
            <div className={styles.alert}>
              <p> Valor inválido! </p>
              </div>
          )}
        </div>

        <div className={styles.body}>
          <label htmlFor="pAtual">
            Pontos Atuais:
            <input
              id="pAtual"
              name="pAtual"
              type="text"
              value={pAtual}
              onChange={(event) => handleStatus(event)}
            />
          </label>

          <label htmlFor="pMax">
            Pontos Máximos:
            <input
              id="pMax"
              name="pMax"
              type="text"
              value={pMax}
              onChange={(event) => handleStatus(event)}
            />
          </label>
        </div>

        <div className="footer">
          <button onClick={() => createAndClose()} type="button">
            Definir
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusModal;

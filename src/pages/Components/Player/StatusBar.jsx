import React, { useEffect, useState } from "react";
import StatusModal from "../Modals/StatusModal";

function StatusBar({ id, title, color, p, pM }) {
  const [pAtual, setPAtual] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const atual = (p * 100) / pM;
    setPAtual(atual);
  }, [p, pM]);

  return (
    <div>
      <h3>{title}</h3>

      <div style={{ backgroundColor: "grey", width: "100%", height: "40px" }}>
        <div
          style={{
            backgroundColor: `${color}`,
            width: `${pAtual}%`,
            height: "40px",
          }}
        ></div>
      </div>

      <span onClick={() => setIsOpen(!isOpen)}>{`${p}/${pM}`}</span>

      {isOpen && (
        <StatusModal id={id} title={title} p={p} pM={pM} closeModal={setIsOpen} />
      )}
    </div>
  );
}

export default StatusBar;

import React, { useState } from "react";

function Habilities() {
  const [habilities, setHabilities] = useState([]);

  const addHability = () => {
    const newHbility = {
      name: "",
      description: "",
    };

    setHabilities([...habilities, newHbility]);
  };

  const editHability = ({ target }) => {
    const { name, value, id } = target;
    const newHabilities = [...habilities];
    newHabilities[id][name] = value;
    setHabilities(newHabilities);
  };

  return (
    <div>
      <h2>HABILIDADES</h2>

      <div style={{ overflowY: "scroll" }}>
        <ul style={{ listStyle: "none" }}>
          {habilities.map((hability, i) => (
            <li key={i}>
              <input
                type="text"
                name="name"
                id={i}
                onChange={(event) => editHability(event)}
                value={hability.name}
                placeholder="Nome da Habilidade"
              />
              <textarea
                name="description"
                id={i}
                value={hability.description}
                onChange={(event) => editHability(event)}
                placeholder="Descrição da Habilidade"
              ></textarea>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={() => addHability()}>
        +
      </button>
    </div>
  );
}

export default Habilities;

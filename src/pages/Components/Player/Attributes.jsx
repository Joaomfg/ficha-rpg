import React, { useState } from "react";
import { checkValue } from "../../helpers/";

function Attributes({ id }) {
  const [forc, setFor] = useState(1);
  const [agi, setAgi] = useState(1);
  const [int, setInt] = useState(1);
  const [pre, setPre] = useState(1);
  const [vig, setVig] = useState(1);

  const handleDefenses = ({ target }) => {
    const { name } = target;
    const { value } = target;
    const valor = checkValue(value);

    switch (name) {
      case "forc":
        setFor(valor);
        break;
      case "agi":
        setAgi(valor);
        break;
      case "int":
        setInt(valor);
        break;
      case "pre":
        setPre(valor);
        break;
      case "vig":
        setVig(valor);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>ATRIBUTOS</h2>

      <label htmlFor="forc">
        FOR
        <input
          name="forc"
          onChange={(event) => handleDefenses(event)}
          value={forc}
          type="number"
        />
      </label>

      <label htmlFor="agi">
        AGI
        <input
          name="agi"
          onChange={(event) => handleDefenses(event)}
          value={agi}
          type="number"
        />
      </label>

      <label htmlFor="int">
        INT
        <input
          name="int"
          onChange={(event) => handleDefenses(event)}
          value={int}
          type="number"
        />
      </label>

      <label htmlFor="pre">
        PRE
        <input
          name="pre"
          onChange={(event) => handleDefenses(event)}
          value={pre}
          type="number"
        />
      </label>

      <label htmlFor="vig">
        VIG
        <input
          name="vig"
          onChange={(event) => handleDefenses(event)}
          value={vig}
          type="number"
        />
      </label>
    </div>
  );
}

export default Attributes;

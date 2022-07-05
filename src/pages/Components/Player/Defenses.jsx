import React, { useState } from "react";
import { checkValue } from "../../helpers/";

function Defenses({ id }) {
  const [passive, setPassive] = useState(0);
  const [block, setBlock] = useState(0);
  const [dodge, setDodge] = useState(0);

    const handleDefenses = ({ target }) => {
        const { name } = target;
        const { value } = target;
        const valor = checkValue(value);
    
        switch (name) {
            case "passive":
            setPassive(valor);
            break;
            case "block":
            setBlock(valor);
            break;
            case "dodge":
            setDodge(valor);
            break;
            default:
            break;
        }
    }

  return (
    <div>
      <h2>DEFESA</h2>

        <label htmlFor="passive">
            Passiva
            <input
                name="passive"
                onChange={(event) => handleDefenses(event)}
                value={passive}
                type="number"
            />
        </label>

        <label htmlFor="block">
            Bloqueio
            <input
                name="block"
                onChange={(event) => handleDefenses(event)}
                value={block}
                type="number"
            />
        </label>

        <label htmlFor="dodge">
            Esquiva
            <input
                name="dodge"
                onChange={(event) => handleDefenses(event)}
                value={dodge}
                type="number"
            />
        </label>
    </div>
  );
}

export default Defenses;

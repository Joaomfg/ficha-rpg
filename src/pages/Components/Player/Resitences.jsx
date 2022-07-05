import React, { useState } from "react";
import { checkValue } from "../../helpers/";

function Defenses({ id }) {
  const [acid, setAcid] = useState(0);
  const [balistic, setBalistic] = useState(0);
  const [cutting, setCutting] = useState(0);
  const [electric, setElectric] = useState(0);
  const [fire, setFire] = useState(0);
  const [cold, setCold] = useState(0);
  const [impact, setImpact] = useState(0);
  const [mental, setMental] = useState(0);
  const [blood, setBlood] = useState(0);
  const [death, setDeath] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [knoledge, setKnoledge] = useState(0);
  const [drilling, setDrilling] = useState(0);
  const [poison, setPoison] = useState(0);
  
  const handleDefenses = ({ target }) => {
    const { name } = target;
    const { value } = target;
    const valor = checkValue(value);

    switch (name) {
      case "acid":
        setAcid(valor);
        break;
      case "balistic":
        setBalistic(valor);
        break;
      case "cutting":
        setCutting(valor);
        break;
      case "electric":
        setElectric(valor);
        break;
      case "fire":
        setFire(valor);
        break;
      case "cold":
        setCold(valor);
        break;
      case "impact":
        setImpact(valor);
        break;
      case "mental":
        setMental(valor);
        break;
      case "blood":
        setBlood(valor);
        break;
      case "death":
        setDeath(valor);
        break;
      case "energy":
        setEnergy(valor);
        break;
      case "knoledge":
        setKnoledge(valor);
        break;
      case "drilling":
        setDrilling(valor);
        break;
      case "poison":
        setPoison(valor);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>RESISTENCIAS</h2>

      <label htmlFor="acid">
        Ácido
        <input
          name="acid"
          onChange={(event) => handleDefenses(event)}
          value={acid}
          type="number"
        />
      </label>

      <label htmlFor="balistic">
        Balístico
        <input
          name="balistic"
          onChange={(event) => handleDefenses(event)}
          value={balistic}
          type="number"
        />
      </label>

      <label htmlFor="cutting">
        Corte
        <input
          name="cutting"
          onChange={(event) => handleDefenses(event)}
          value={cutting}
          type="number"
        />
      </label>

      <label htmlFor="electric">
        Eletrico
        <input
          name="electric"
          onChange={(event) => handleDefenses(event)}
          value={electric}
          type="number"
        />
      </label>

      <label htmlFor="fire">
        Fogo
        <input
          name="fire"
          onChange={(event) => handleDefenses(event)}
          value={fire}
          type="number"
        />
      </label>

      <label htmlFor="accoldid">
        Frio
        <input
          name="cold"
          onChange={(event) => handleDefenses(event)}
          value={cold}
          type="number"
        />
      </label>

      <label htmlFor="impact">
        Impacto
        <input
          name="impact"
          onChange={(event) => handleDefenses(event)}
          value={impact}
          type="number"
        />
      </label>

      <label htmlFor="mental">
        Mental
        <input
          name="mental"
          onChange={(event) => handleDefenses(event)}
          value={mental}
          type="number"
        />
      </label>

      <label htmlFor="blood">
        Sangue
        <input
          name="blood"
          onChange={(event) => handleDefenses(event)}
          value={blood}
          type="number"
        />
      </label>

      <label htmlFor="death">
        Morte
        <input
          name="death"
          onChange={(event) => handleDefenses(event)}
          value={death}
          type="number"
        />
      </label>

      <label htmlFor="energy">
        Energia
        <input
          name="energy"
          onChange={(event) => handleDefenses(event)}
          value={energy}
          type="number"
        />
      </label>

      <label htmlFor="knoledge">
        Conhecimento
        <input
          name="knoledge"
          onChange={(event) => handleDefenses(event)}
          value={knoledge}
          type="number"
        />
      </label>

      <label htmlFor="drilling">
        Perfuração
        <input
          name="drilling"
          onChange={(event) => handleDefenses(event)}
          value={drilling}
          type="number"
        />
      </label>

      <label htmlFor="poison">
        Veneno
        <input
          name="poison"
          onChange={(event) => handleDefenses(event)}
          value={poison}
          type="number"
        />
      </label>
    </div>
  );
}

export default Defenses;

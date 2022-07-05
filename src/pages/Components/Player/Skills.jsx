import React, { useState } from "react";
import { checkValue } from "../../helpers/";

function Skills({ id }) {
  const [acrobacia, setAcrobacia] = useState(0);
  const [adestramento, setAdestramento] = useState(0);
  const [artes, setArtes] = useState(0);
  const [atletismo, setAtletismo] = useState(0);
  const [atualidades, setAtualidades] = useState(0);
  const [ciencia, setCiencia] = useState(0);
  const [crime, setCrime] = useState(0);
  const [diplomacia, setDiplomacia] = useState(0);
  const [enganacao, setEnganacao] = useState(0);
  const [fortitude, setFortitude] = useState(0);
  const [furtividade, setFurtividade] = useState(0);
  const [iniciativa, setIniciativa] = useState(0);
  const [intimidacao, setIntimidacao] = useState(0);
  const [intuicao, setIntuicao] = useState(0);
  const [investigacao, setInvestigacao] = useState(0);
  const [luta , setLuta] = useState(0);
  const [medicina, setMedicina] = useState(0);
  const [ocultismo, setOcultismo] = useState(0);
  const [percepcao, setPercepcao] = useState(0);
  const [pilotagem, setPilotagem] = useState(0);
  const [pontaria, setPontaria] = useState(0);
  const [profissao, setProfissao] = useState(0);
  const [reflexos, setReflexos] = useState(0);
  const [religiao, setReligiao] = useState(0);
  const [sobrevivencia, setSobrevivencia] = useState(0);
  const [tatica, setTatica] = useState(0);
  const [tecnologia, setTecnologia] = useState(0);
  const [vontade, setVontade] = useState(0);

  const handleDefenses = ({ target }) => {
    const { name } = target;
    const { value } = target;
    const valor = checkValue(value);

    switch (name) {
        case "acrobacia":
            setAcrobacia(valor);    
            break;
        case "adestramento":
            setAdestramento(valor);
            break;
        case "artes":
            setArtes(valor);
            break;
        case "atletismo":
            setAtletismo(valor);
            break;
        case "atualidades":
            setAtualidades(valor);
            break;
        case "ciencia":
            setCiencia(valor);
            break;
        case "crime":
            setCrime(valor);
            break;
        case "diplomacia":
            setDiplomacia(valor);
            break;
        case "enganacao":
            setEnganacao(valor);
            break;
        case "fortitude":
            setFortitude(valor);
            break;
        case "furtividade":
            setFurtividade(valor);
            break;
        case "iniciativa":
            setIniciativa(valor);
            break;
        case "intimidacao":
            setIntimidacao(valor);
            break;
        case "intuicao":
            setIntuicao(valor);
            break;
        case "investigacao":
            setInvestigacao(valor);
            break;
        case "luta":
            setLuta(valor);
            break;
        case "medicina":
            setMedicina(valor);
            break;
        case "ocultismo":
            setOcultismo(valor);
            break;
        case "percepcao":
            setPercepcao(valor);
            break;
        case "pilotagem":
            setPilotagem(valor);
            break;
        case "pontaria":
            setPontaria(valor);
            break;
        case "profissao":
            setProfissao(valor);
            break;
        case "reflexos":
            setReflexos(valor);
            break;
        case "religiao":
            setReligiao(valor);
            break;
        case "sobrevivencia":
            setSobrevivencia(valor);
            break;
        case "tatica":
            setTatica(valor);
            break;
        case "tecnologia":
            setTecnologia(valor);
            break;
        case "vontade":
            setVontade(valor);
            break;
      default:
        break;
    }
  };

  return (
    <div>
        <h2>PERÍCIAS</h2>

        <label htmlFor="acrobacia">
            Acrobacia
            <input
                type="number"
                name="acrobacia"
                id="acrobacia"
                value={acrobacia}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="adestramento">
            Adestramento
            <input
                type="number"
                name="adestramento"
                id="adestramento"
                value={adestramento}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="artes">
            Artes
            <input
                type="number"
                name="artes"
                id="artes"
                value={artes}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="atletismo">
            Atletismo
            <input
                type="number"
                name="atletismo"
                id="atletismo"
                value={atletismo}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="atualidades">
            Atualidades
            <input
                type="number"
                name="atualidades"
                id="atualidades"
                value={atualidades}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="ciencia">
            Ciência
            <input
                type="number"
                name="ciencia"
                id="ciencia"
                value={ciencia}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="crime">
            Crime
            <input
                type="number"
                name="crime"
                id="crime"
                value={crime}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="diplomacia">
            Diplomacia
            <input
                type="number"
                name="diplomacia"
                id="diplomacia"
                value={diplomacia}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="enganacao">
            Enganação
            <input
                type="number"
                name="enganacao"
                id="enganacao"
                value={enganacao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="fortitude">
            Fortitude
            <input
                type="number"
                name="fortitude"
                id="fortitude"
                value={fortitude}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="furtividade">
            Furtividade
            <input
                type="number"
                name="furtividade"
                id="furtividade"
                value={furtividade}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="iniciativa">
            Iniciativa
            <input
                type="number"
                name="iniciativa"
                id="iniciativa"
                value={iniciativa}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="intimidacao">
            Intimidação
            <input
                type="number"
                name="intimidacao"
                id="intimidacao"
                value={intimidacao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="intuicao">
            Intuição
            <input
                type="number"
                name="intuicao"
                id="intuicao"
                value={intuicao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="investigacao">
            Investigação
            <input
                type="number"
                name="investigacao"
                id="investigacao"
                value={investigacao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="luta">
            Luta
            <input
                type="number"
                name="luta"
                id="luta"
                value={luta}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="medicina">
            Medicina
            <input
                type="number"
                name="medicina"
                id="medicina"
                value={medicina}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="ocultismo">
            Ocultismo
            <input
                type="number"
                name="ocultismo"
                id="ocultismo"
                value={ocultismo}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="percepcao">
            Percepção
            <input
                type="number"
                name="percepcao"
                id="percepcao"
                value={percepcao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="pilotagem">
            Pilotagem
            <input
                type="number"
                name="pilotagem"
                id="pilotagem"
                value={pilotagem}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="pontaria">
            Pontaria
            <input
                type="number"
                name="pontaria"
                id="pontaria"
                value={pontaria}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="profissao">
            Profissão
            <input
                type="number"
                name="profissao"
                id="profissao"
                value={profissao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>

        <label htmlFor="reflexos">
            Reflexos
            <input
                type="number"
                name="reflexos"
                id="reflexos"
                value={reflexos}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        
        <label htmlFor="religiao">
            Religião
            <input
                type="number"
                name="religiao"
                id="religiao"
                value={religiao}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="sobrevivencia">
            Sobrevivência
            <input
                type="number"
                name="sobrevivencia"
                id="sobrevivencia"
                value={sobrevivencia}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="tatica">
            Tática
            <input
                type="number"
                name="tatica"
                id="tatica"
                value={tatica}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="tecnologia">
            Tecnologia
            <input
                type="number"
                name="tecnologia"
                id="tecnologia"
                value={tecnologia}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
        <label htmlFor="vontade">
            Vontade
            <input
                type="number"
                name="vontade"
                id="vontade"
                value={vontade}
                onChange={(event) => handleDefenses(event)}
            />
        </label>
    </div>
  );
}

export default Skills;

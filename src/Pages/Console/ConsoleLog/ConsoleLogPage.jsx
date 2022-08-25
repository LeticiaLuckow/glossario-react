import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const ConsoleLog = () => {
  const [valor, setValor] = useState();
  const inputChange = (e) => {
    setValor(e.target.value);
    console.log(e);
  };

  return (
    <div>
      <Descricao
        desc={
          'o console.log é utilizado para escrever no console do navegador algum texto ou alguma variavel. Geralmente é utilizado para validar o valor de uma variável ou se algum trecho de código foi executado. Abra o console para verificar o que está acontecendo.'
        }
      />
      <input value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é: {valor}</p>
      <button onClick={() => console.log('valor do input é', valor)}>
        Escrever valor no console
      </button>

      <Codigo texto={code} />
    </div>
  );
};

export default ConsoleLog;

import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const UseStateInput = () => {
  const [valor, setValor] = useState(999);
  const inputChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <Descricao
        desc={
          'Uma forma comum de controlar o valor de um input é utilizando o useState. Nesse caso o valor do input precisa ser o valor do estado, e a função de set do estado será chamada no evento de change, ou keyUp do input, com o valor recebido do evento (e.target.value)'
        }
      />
      <input value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é: {valor}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default UseStateInput;

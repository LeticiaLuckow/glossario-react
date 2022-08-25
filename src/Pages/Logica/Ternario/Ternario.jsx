import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const Ternario = () => {
  const [valor, setValor] = useState();
  const [maior, setMaior] = useState('menor');

  const inputChange = (e) => {
    const valorInput = e.target.value;
    setValor(valorInput);
    setMaior(valorInput > 10 ? 'maior' : 'menor');
  };

  return (
    <div>
      <Descricao
        desc={
          'O operador ternário é uma forma resumida de escrever uma condição if/else. Funciona basicamente como: CONDIÇÃO ? RESULTADO CASO ELA SEJA ATENDIDA : RESULTADO CASO ELA NÃO SEJA ATENDIDA'
        }
      />
      <input value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é: {valor}</p>
      <p>valor do input é {maior} que 10</p>

      <Codigo texto={code} />
    </div>
  );
};

export default Ternario;

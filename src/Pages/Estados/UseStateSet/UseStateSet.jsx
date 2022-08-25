import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const UseStateSet = () => {
  const [valor, setValor] = useState(999);

  return (
    <div>
      <Descricao
        desc={
          'O segundo parâmetro criado no useState é uma função responsável por alterar do valor do estado. Ele deve sempre se chamar "set" + "nome do estado"'
        }
      />
      <button onClick={() => setValor(Math.floor(Math.random() * 10))}>
        alterar para valor aleatório
      </button>
      <button onClick={() => setValor(Math.floor(55))}>
        alterar valor para 55
      </button>
      <p>valor atual do estado é: {valor}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default UseStateSet;

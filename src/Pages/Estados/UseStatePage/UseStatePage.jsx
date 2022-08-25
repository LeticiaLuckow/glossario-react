import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const UseStatePage = () => {
  const [valor, setValor] = useState(999);
  return (
    <div>
      <Descricao
        desc={
          'UseState é usado para controlar estados dentro do React. Basicamente os estados são a forma que o react trabalha com valores variáveis (no javascript ou outra bibliotecas se usaria "let" ou "var" para trabalhar com esses valores variados). O valor inicial do useState é o valor que fica dentro dos parênteses'
        }
      />
      <p>valor inicial do estado é: {valor}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default UseStatePage;

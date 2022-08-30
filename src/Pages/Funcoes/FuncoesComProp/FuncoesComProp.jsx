import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FuncoesComProp = () => {
  const [valor, setValor] = useState(0);
  const alterarValor = (valorRecebido) => {
    setValor(valorRecebido);
  };
  return (
    <div>
      <Descricao
        desc={
          'As funções podem receber propriedades e executar um trecho de código com base nelas. As funções podem receber qualquer tipo de parâmetro, seja número, string, arrays, objetos e etc. Os parâmetos recebidos ficam dentro dos parênteses da arrow function. Ex: (parametroA, parametroB) => { ... }'
        }
      />
      <p>
        Criar exemplo com varios botões onde cada um passa um valor diferente
      </p>
      <p>O valor do estado é {valor}</p>
      <button onClick={() => alterarValor(1)}> 1 </button>
      <button onClick={() => alterarValor(2)}> 2 </button>
      <button onClick={() => alterarValor(3)}> 3 </button>
      <button onClick={() => alterarValor(4)}> 4 </button>
      <button onClick={() => alterarValor(99)}> 99 </button>
      <Codigo texto={code} />
    </div>
  );
};

export default FuncoesComProp;

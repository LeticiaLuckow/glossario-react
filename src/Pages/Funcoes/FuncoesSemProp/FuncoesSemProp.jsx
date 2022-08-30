import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FuncoesSemProp = () => {
  const [valor, setValor] = useState(0);
  const alterarValor = () => {
    // valor + 1 também pode ser escrito como valor++
    setValor(valor + 1);
  };
  return (
    <div>
      <Descricao
        desc={
          'As funções podem não receber nenhum propriedade e executarão seu código sem depender de nenhum parâmetro'
        }
      />

      <p>Criar exemplo com um botão que sempre incrementa o valor em 1</p>
      <p>valor foi somado {valor} vezes</p>
      <button onClick={alterarValor}> +1 </button>
      <Codigo texto={code} />
    </div>
  );
};

export default FuncoesSemProp;

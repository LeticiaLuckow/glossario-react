import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FuncoesTypeScript = () => {
  const [valor, setValor] = useState<number>();
  const alterarValor = (valorRecebido: number) => {
    setValor(valorRecebido);
  };
  return (
    <div>
      <Descricao
        desc={
          'A diferença entre se trabalhar com JS e TS é basicamente o fato de que o typescript possui tipagem, ou seja, cada pâmetro recebido por uma função por exemplo deve ser explicitamente declarado de qual tipo será. Se na função for definido que ela deve receber um "number" e durante o desenvolvimento você tentar passar uma "string" como parâmetro o código não irá compilar. Além disso com typescript o compilador (no caso o vsCode) consegue saber exatamente quais parâmetros estão presentes em uma função, componente, variável ou objeto, facilitando a visualização durante o desenvolvimento. Arquivos com typescript devem ter a extensão TSX.'
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

export default FuncoesTypeScript;

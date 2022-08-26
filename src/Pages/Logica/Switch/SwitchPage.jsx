import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const SwitchPage = () => {
  const [valor, setValor] = useState();
  const [texto, setTexto] = useState();

  const inputChange = (e) => {
    const valorInput = e.target.valueAsNumber;
    setValor(valorInput);

    switch (valorInput) {
      case 0:
        setTexto('Desligado');
        break;
      case 1:
        setTexto('Ligado');
        break;
      default:
        setTexto('insira 0 ou 1');
    }
  };

  return (
    <div>
      <Descricao
        desc={
          'O Switch executa um trecho de código para cada valor recebido. E pode executar um código padrão caso o valor atual não esteja listado (default)'
        }
      />

      <input type="number" value={valor} onChange={inputChange} />

      <p> o valor do input é {valor}</p>
      <p>{texto}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default SwitchPage;

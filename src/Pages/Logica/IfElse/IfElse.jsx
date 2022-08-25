import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const IfElse = () => {
  const [valor, setValor] = useState(999);
  const [maior, setMaior] = useState('maior');
  const inputChange = (e) => {
    const valorInput = e.target.value;
    setValor(valorInput);
    if (valorInput > 30) {
      setMaior('maior');
    } else {
      setMaior('menor');
    }
  };

  return (
    <div>
      <Descricao
        desc={'If / Else é uma operação lógica para validar um condição'}
      />
      <input value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é {maior} que 30</p>

      <Codigo texto={code} />
    </div>
  );
};

export default IfElse;

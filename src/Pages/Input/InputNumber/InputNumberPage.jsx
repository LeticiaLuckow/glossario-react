import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const InputNumberPage = () => {
  const [valor, setValor] = useState(999);
  const inputChange = (e) => {
    setValor(e.target.valueAsNumber);
  };

  return (
    <div>
      <Descricao
        desc={
          'Input type number é utilizado em inputs que devem receber valor numérico. Para lermos o seu valor no evento com número podemos utilizar: e.target.valueAsNumber'
        }
      />
      <input type={'number'} value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é: {valor}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default InputNumberPage;

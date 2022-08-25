import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const InputTextPage = () => {
  const [valor, setValor] = useState('lalala');
  const inputChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <Descricao
        desc={
          'Input type text é utilizado para inserir um texto, retornando no seu evento (e.target.value) uma string'
        }
      />
      <input type={'text'} value={valor} onChange={inputChange} />
      <p>valor atual do estado/input é: {valor}</p>
      <Codigo texto={code} />;
    </div>
  );
};

export default InputTextPage;

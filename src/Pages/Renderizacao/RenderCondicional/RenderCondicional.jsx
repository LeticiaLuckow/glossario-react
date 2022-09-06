import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderCondicional = () => {
  const [exibir, setExibir] = useState();
  const inputChange = (e) => {
    setExibir(e.target.value === 'true');
  };

  return (
    <div>
      <Descricao
        desc={
          'Uma renderização condicional pode ser utilizado para determinar quando um elemento deve ou não aparecer na tela.'
        }
      />

      <input
        type="radio"
        name="exibir"
        id="exibir"
        value={true}
        onChange={inputChange}
      />
      <label for="exibir">exibir</label>

      <input
        type="radio"
        name="exibir"
        id="nao-exibir"
        value={false}
        onChange={inputChange}
      />
      <label for="nao-exibir">não exibir</label>

      <>
        {exibir && (
          <p>Esse texto é exibido apenas quando a varíavel exibir é true</p>
        )}
      </>

      <Codigo texto={code} />
    </div>
  );
};

export default RenderCondicional;

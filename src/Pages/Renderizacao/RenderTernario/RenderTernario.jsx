import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderTernario = () => {
  const [azul, setAzul] = useState(false);
  const inputChange = (e) => {
    setAzul(e.target.value === 'true');
  };
  return (
    <div>
      <Descricao
        desc={
          'O operator ternário pode ser utilizado para difinir se será exibido um elemento A ou um elemento B'
        }
      />

      <input
        type="radio"
        name="cor"
        id="azul"
        value={true}
        onChange={inputChange}
      />
      <label for="azul">azul</label>

      <input
        type="radio"
        name="cor"
        id="vermelho"
        value={false}
        onChange={inputChange}
      />
      <label for="vermelho">vermelho</label>

      <p>
        Criar exemplo com um input radio que determina qual elemento será
        exibido
      </p>
      <>
        {azul ? (
          <p style={{ color: 'blue' }}>Texto azul exibido</p>
        ) : (
          <p style={{ color: 'red' }}>Texto vermelho exibido</p>
        )}
      </>
      <Codigo texto={code} />
    </div>
  );
};

export default RenderTernario;

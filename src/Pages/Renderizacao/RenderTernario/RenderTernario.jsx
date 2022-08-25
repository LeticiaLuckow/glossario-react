import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderTernario = () => {
  return (
    <div>
      <Descricao
        desc={
          'O operator ternário pode ser utilizado para difinir se será exibido um elemento A ou um elemento B'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com um input radio que determina qual elemento será
        exibido
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default RenderTernario;

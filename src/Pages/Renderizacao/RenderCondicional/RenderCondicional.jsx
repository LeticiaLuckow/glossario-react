import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderCondicional = () => {
  return (
    <div>
      <Descricao
        desc={
          'Uma renderização condicional pode ser utilizado para determinar quando um elemento deve ou não aparecer na tela.'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com um input radio com as opções "Não Exibir" e "Exibir" e
        uma renderização condicional para o um elemento p
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default RenderCondicional;

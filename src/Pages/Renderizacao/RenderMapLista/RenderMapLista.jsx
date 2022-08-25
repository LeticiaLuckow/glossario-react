import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderMapLista = () => {
  return (
    <div>
      <Descricao
        desc={
          'Através da função map podemos exibir uma lista de componentes através de um array. Cada elemento renderizado precisa receber a propriedade key, que é um valor que identifica esse elemento'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo que exiba uma lista de nomes vindas de um array
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default RenderMapLista;

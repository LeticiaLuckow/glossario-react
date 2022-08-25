import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const ComponenteComProp = () => {
  return (
    <div>
      <Descricao
        desc={
          'Um componente pode ser criado e não receber nenhuma propriedade, ou receber uma ou mais propriedades, podendo ser strings, números, funções, objetos, etc... O exemplo a seguir recebe um texto como propriedade'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com exemplo com um componente aqui renderizando um texto
        que é passado como propriedade
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteComProp;

import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const ComponenteComFuncao = () => {
  return (
    <div>
      <Descricao
        desc={
          'Um componente pode ser criado e não receber nenhuma propriedade, ou receber uma ou mais propriedades, podendo ser strings, números, funções, objetos, etc... O exemplo a seguir recebe uma função'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo passando console.log como parametro de função
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteComFuncao;

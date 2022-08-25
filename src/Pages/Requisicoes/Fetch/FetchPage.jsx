import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FetchPage = () => {
  return (
    <div>
      <Descricao
        desc={
          'Fetch é a forma padrão do js de se realizar chamadas para APIs. As requisições podem ser do tipo GET, POST, PUT e DELETE'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo realizando uma requição a uma API e exibindo algum valor
        retornado por ela
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default FetchPage;

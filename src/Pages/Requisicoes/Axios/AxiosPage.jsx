import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const AxiosPage = () => {
  return (
    <div>
      <Descricao
        desc={
          'Axios é uma biblioteca muito utlizada para realização requisições para as APIs. Tem a mesma funcionalidade da função Fetch porém é uma solução mais completa'
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

export default AxiosPage;

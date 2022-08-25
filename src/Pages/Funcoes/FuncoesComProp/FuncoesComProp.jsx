import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const FuncoesComProp = () => {
  return (
    <div>
      <Descricao
        desc={
          'As funções podem não receber nenhum propriedade e executarão seu código sem depender de nenhum parâmetro'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com varios botões onde cada um passa um valor diferente
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default FuncoesComProp;

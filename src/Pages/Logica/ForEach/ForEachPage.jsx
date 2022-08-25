import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const ForEachPage = () => {
  return (
    <div>
      <Descricao
        desc={
          'O forEach percorre todas as posições de um array, retornando o valor da posição atual. Abra o console para visualizar o array sendo listado item por item. O forEach também pode receber um segundo parâmetro que simboliza a posição atual do array que está sendo lida'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com um array de strings e em cada uma das posições
        realizar um console.log do valor atual.
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default ForEachPage;

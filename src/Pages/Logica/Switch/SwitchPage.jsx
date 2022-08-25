import { useState } from 'react';
import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const SwitchPage = () => {
  return (
    <div>
      <Descricao
        desc={
          'O Switch executa um trecho de código para cada valor recebido. E pode executar um código padrão caso o valor atual não esteja listado (default)'
        }
      />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Em Construção</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Criar exemplo com input: Valor 0 exibir "desligado", valor 1 exibir
        "ligado", outro valor exibir: "insira 0 ou 1"
      </p>

      <Codigo texto={code} />
    </div>
  );
};

export default SwitchPage;

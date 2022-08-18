import { useState } from 'react';
import Descricao from '../../../components/Descricao';
const For = () => {
  const [valor, setValor] = useState();
  const [soma, setSoma] = useState(0);
  const inputChange = (e) => {
    const valorInput = e.target.value;
    setValor(valorInput);
    let somaAtual = 0;
    if (valorInput <= 30)
      for (let i = 0; i <= valorInput; i++) somaAtual = somaAtual + i;
    setSoma(somaAtual);
  };

  return (
    <div>
      <Descricao
        desc={
          'For é um Loop que irá executar algo em um intervalo determinado. Nesse caso ele vai de 0 até o valor do input somando todos os número nesse intervalo. (0 + 1 + 2 +3 + 4 +...)'
        }
      />
      <input
        min="0"
        max={'10'}
        type="number"
        value={valor}
        onChange={inputChange}
      />
      <p>
        valor do somatorio de 0 a {valor} é {soma}
      </p>
      {valor > 30 && (
        <p style={{ color: 'red' }}>O valor deve ser menor ou igual a 30</p>
      )}
    </div>
  );
};

export default For;

import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const RenderMapLista = () => {
  const nomes = ['João', 'Francisco', 'José'];

  return (
    <div>
      <Descricao
        desc={
          'Através da função map podemos exibir uma lista de componentes através de um array. Cada elemento renderizado precisa receber a propriedade key, que é um valor que identifica esse elemento'
        }
      />
      <p>Criar exemplo que exiba uma lista de nomes vindas de um array</p>

      {nomes.map((bolinha) => (
        <p key={bolinha}>{bolinha}</p>
      ))}

      <Codigo texto={code} />
    </div>
  );
};

export default RenderMapLista;

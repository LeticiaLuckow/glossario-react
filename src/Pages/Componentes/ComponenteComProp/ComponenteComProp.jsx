import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const ComponentFilho = ({ texto, numero }) => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      {texto}, {numero}
    </p>
  );
};

const ComponenteComProp = () => {
  return (
    <div>
      <Descricao
        desc={
          'Um componente pode ser criado e não receber nenhuma propriedade, ou receber uma ou mais propriedades, podendo ser strings, números, funções, objetos, etc... O exemplo a seguir recebe um texto como propriedade'
        }
      />

      <ComponentFilho texto="Texto Recebido pelo filho" numero={2} />
      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteComProp;

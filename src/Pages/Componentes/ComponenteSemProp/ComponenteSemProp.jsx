import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const ComponentFilho = () => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      Texto renderizado pelo componente Filho
    </p>
  );
};
const ComponenteSemProp = () => {
  return (
    <div>
      <Descricao
        desc={
          'Um componente pode ser criado e não receber nenhuma propriedade, ou receber uma ou mais propriedades, podendo ser strings, números, funções, objetos, etc... O exemplo a seguir não possui nenhuma propriedade'
        }
      />

      <ComponentFilho />

      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteSemProp;

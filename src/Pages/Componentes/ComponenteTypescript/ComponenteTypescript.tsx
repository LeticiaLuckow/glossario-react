import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

type ComponentFilhoType = {
  texto: string;
  numero: number;
};
const ComponentFilho = ({ texto, numero }: ComponentFilhoType) => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      {texto}, {numero}
    </p>
  );
};

const ComponenteTypescript = () => {
  return (
    <div>
      <Descricao
        desc={
          'Um componente Typescript que recebe propriedades, precisa ter as suas propriedades tipadas, descrevendo qual o tipo esperado para cada parâmetro'
        }
      />

      <ComponentFilho texto="Texto Recebido pelo filho" numero={2} />
      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteTypescript;

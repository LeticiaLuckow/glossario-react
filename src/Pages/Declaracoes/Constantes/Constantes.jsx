import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const Constantes = () => {
  const valorConstante = 3;
  const stringConstante = 'valor: ';
  return (
    <div>
      <Descricao desc={'Constantes são valores que não se alteram'} />
      {stringConstante} {valorConstante}
      <Codigo texto={code} />
    </div>
  );
};

export default Constantes;

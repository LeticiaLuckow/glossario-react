import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const ArrayPage = () => {
  const arrayConstante = [2, 4, 10];
  return (
    <div>
      <Descricao
        desc={
          'Array é um conjunto de informações, podem ser vários numeros ou várias strings. Para pegar o tamanho do array basta usar .length'
        }
      />
      <p>a primeira posição do array é {arrayConstante[0]}</p>
      <p>a segunda posição do array é {arrayConstante[1]}</p>
      <p>o tamanho do array é {arrayConstante.length}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default ArrayPage;

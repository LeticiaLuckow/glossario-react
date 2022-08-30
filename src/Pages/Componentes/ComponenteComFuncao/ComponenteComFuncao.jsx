import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';

const ComponentFilho = ({ func }) => {
  return <button onClick={func}>Clique Aqui</button>;
};

const ComponenteComFuncao = () => {
  const consoleLogFun = () => {
    console.log('Função declarada no pai');
  };
  return (
    <div>
      <Descricao
        desc={
          'Um componente pode ser criado e não receber nenhuma propriedade, ou receber uma ou mais propriedades, podendo ser strings, números, funções, objetos, etc... O exemplo a seguir recebe uma função'
        }
      />

      <ComponentFilho func={consoleLogFun} />
      <Codigo texto={code} />
    </div>
  );
};

export default ComponenteComFuncao;

import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const ForEachPage = () => {
  const stringArray = ['Leticia', 'Paulo', 'Ruth', 'Leonardo', 'Analu'];
  const consoleFunction = () => {
    stringArray.forEach((nome, posicao) => {
      console.log('nome', nome);
      console.log('posição', posicao);
    });
  };
  return (
    <div>
      <Descricao
        desc={
          'O forEach percorre todas as posições de um array, retornando o valor da posição atual. Abra o console para visualizar o array sendo listado item por item. O forEach também pode receber um segundo parâmetro que simboliza a posição atual do array que está sendo lida'
        }
      />

      <button onClick={consoleFunction}>
        escrever valores do array no console
      </button>

      <Codigo texto={code} />
    </div>
  );
};

export default ForEachPage;

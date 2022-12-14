import Codigo from '../../../components/Codigo';
import Descricao from '../../../components/Descricao';
import { code } from './code';
const Objetos = () => {
  const objetoConstante = {
    nome: 'Lucas',
    idade: 30,
    sexo: 'masculino',
  };
  return (
    <div>
      <Descricao
        desc={
          'Objeto é um conjunto de chave e valores. Cada valor é acessado através do nome que é dado para ele e pode conter qualquer tipo de informação.'
        }
      />
      <p>O nome é: {objetoConstante.nome}</p>
      <p>A idade é: {objetoConstante.idade}</p>
      <p>O sexo é: {objetoConstante.sexo}</p>

      <Codigo texto={code} />
    </div>
  );
};

export default Objetos;

import Descricao from '../../../components/Descricao';

const Constantes = () => {
  const valorConstante = 3;
  const stringConstante = 'valor: ';
  return (
    <div>
      <Descricao desc={'Constantes são valores que não se alteram'} />
      {stringConstante} {valorConstante}
    </div>
  );
};

export default Constantes;

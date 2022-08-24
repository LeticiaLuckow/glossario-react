import { useState } from 'react';
import Descricao from '../../../components/Descricao';
const InputCheckboxPage = () => {
  const [portugues, setPortugues] = useState(false);
  const [ingles, setIngles] = useState(false);
  const [espanhol, setEspanhol] = useState(false);

  return (
    <div>
      <Descricao
        desc={
          'Input type checkbok é utilizado para permitir que o usuário selecione um ou mais valores dentro de uma lista pré definida'
        }
      />
      <input
        type="checkbox"
        id="portugues"
        value="pt"
        onChange={(e) => {
          setPortugues(e.target.checked);
        }}
      />
      <label for="portugues">portugues</label>
      <br />{' '}
      <input
        type="checkbox"
        id="ingles"
        value="en"
        onChange={(e) => {
          setIngles(e.target.checked);
        }}
      />
      <label for="ingles">ingles</label>
      <br />
      <input
        type="checkbox"
        id="espanhol"
        value="es"
        onChange={(e) => {
          console.log(e);
          setEspanhol(e.target.checked);
        }}
      />
      <label for="espanhol">espanhol</label>
      <p>Idiomas:</p>
      <p>{portugues && <span>pt</span>}</p>
      <p>{ingles && <span>en</span>}</p>
      <p>{espanhol && <span>es</span>}</p>
    </div>
  );
};

export default InputCheckboxPage;

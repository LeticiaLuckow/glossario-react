import { useState } from 'react';
import Descricao from '../../../components/Descricao';
const InputRadioPage = () => {
  const [valor, setValor] = useState();
  const inputChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <div>
      <Descricao
        desc={
          'Input type radio é utilizado para seleção de um valor dentro das opções pre definidas. Nesse modo de input apenas um valor pode ser selecionado'
        }
      />
      <input
        type="radio"
        name="idioma"
        id="portugues"
        value="pt"
        onChange={inputChange}
      />
      <label for="portugues">portugues</label>
      <br />{' '}
      <input
        type="radio"
        name="idioma"
        id="ingles"
        value="en"
        onChange={inputChange}
      />
      <label for="ingles">ingles</label>
      <br />
      <input
        type="radio"
        name="idioma"
        id="espanhol"
        value="es"
        onChange={inputChange}
      />
      <label for="espanhol">espanhol</label>
      <p>Idioma: {valor}</p>
    </div>
  );
};

export default InputRadioPage;

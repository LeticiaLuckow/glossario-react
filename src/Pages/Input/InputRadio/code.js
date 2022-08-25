export const code = ` const [valor, setValor] = useState();

const inputChange = (e) => {
  setValor(e.target.value);
};

//Nos eventos de change salvamos no estado o valor do input que foi selecionado ("value")
<input
  type="radio"
  name="idioma"
  id="portugues"
  value="pt"
  onChange={inputChange}
/>
<label for="portugues">portugues</label>

<input
  type="radio"
  name="idioma"
  id="ingles"
  value="en"
  onChange={inputChange}
/>
<label for="ingles">ingles</label>

<input
  type="radio"
  name="idioma"
  id="espanhol"
  value="es"
onChange={inputChange}
/>
<label for="espanhol">espanhol</label>
`;

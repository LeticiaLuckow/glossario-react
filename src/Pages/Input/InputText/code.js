export const code = `const [valor, setValor] = useState('lalala');

const inputChange = (e) => {
  setValor(e.target.value);
};

//O input recebe o valor do estado e no evento change ele altera o valor do estado com base no valor resultando do evento (e.target.value)
<input type='text' value={valor} onChange={inputChange} />

`;

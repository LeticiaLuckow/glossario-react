export const code = `const [valor, setValor] = useState(999);

//No change do input pegamos o valor numérico no evento em e.target.valueAsNumer
const inputChange = (e) => {
  setValor(e.target.valueAsNumber);
};

<input type='number' value={valor} onChange={inputChange} />

`;

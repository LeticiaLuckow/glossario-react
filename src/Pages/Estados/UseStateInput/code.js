export const code = `  const [valor, setValor] = useState(999);

const inputChange = (e) => {
  setValor(e.target.value);
};

//o input recebe a função inputChange que será responsável por atualizar o estado
<input value={valor} onChange={inputChange} />
`;

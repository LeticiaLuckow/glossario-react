export const code = `//O valor inicial do estado é 999
//value: varíavel que armazena o valor do estado
//setValue: Função que altera o valor do estado (value)

const [value, setValue] = useState(999);

//O clique do botão altera o valor do estado para 55
<button onClick={() => setValor(55)}>
  alterar valor para 55
</button>

//O clique do botão altera o valor do estado para um número aleatório retornado pela funcão Math.random()
<button onClick={() => setValor(Math.floor(Math.random() * 10))}>
  alterar para valor aleatório
</button>
`;

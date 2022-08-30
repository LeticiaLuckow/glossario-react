export const code = `const [valor, setValor] = useState(0)

const alterarValor = () => {
  setValor(valor + 1)
}

<button onClick={alterarValor}> +1 </button>
`;

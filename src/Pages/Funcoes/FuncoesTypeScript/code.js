export const code = `const [valor, setValor] = useState(0)

const alterarValor = (valorRecebido) => {
  setValor(valorRecebido)
}

<button onClick={() => alterarValor(1)}> 1 </button>
<button onClick={() => alterarValor(2)}> 2 </button>
<button onClick={() => alterarValor(3)}> 3 </button>
<button onClick={() => alterarValor(4)}> 4 </button>
<button onClick={() => alterarValor(5)}> 5 </button>
`;

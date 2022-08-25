export const code = `let x = "0";
const [valor, setValor] = useState()
const [texto, setTexto] = useState()

switch (valor) {
  case 0:
    setTexto("Desligado");
    break;
  case 1:
    setTexto("Ligado");
    break;
  default:
    setTexto("insira 0 ou 1");
}
`;

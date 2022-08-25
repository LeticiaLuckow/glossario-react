export const code = `
const ComponentFilho = ({func}) => {
  return (
    <button onClick={func}>Clique Aqui</button>
  )
}

// Opção 1
const ComponentePai = () => {
  consoleLogFun = () => {
    console.log("Função declarada no pai")
  }

  return (
    <ComponenteFilho func={consoleLogFun} />
  )
}

// Opção 2
const ComponentePai2 = () => {
  return (
    <ComponenteFilho func={() => console.log("Função criada diretamente na prop")} />
  )
}
`;

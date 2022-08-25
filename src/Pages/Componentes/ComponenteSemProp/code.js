export const code = `
const ComponentFilho = () => {
  return (
    <p>Texto renderizado pelo componente Filho</p>
  )
}

const ComponentePai = () => {
  return (
    <ComponenteFilho />
  )
}

`;

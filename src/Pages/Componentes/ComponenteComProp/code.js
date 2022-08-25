export const code = `
const ComponentFilho = ({texto}) => {
  return (
    <p>{texto}</p>
  )
}

const ComponentePai = () => {
  return (
    <ComponenteFilho texto="Texto Recebido pelo filho" />
  )
}

`;

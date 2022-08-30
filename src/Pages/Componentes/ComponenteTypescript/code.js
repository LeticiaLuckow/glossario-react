export const code = `
type ComponentFilhoType = {
  texto: string
}
const ComponentFilho = ({texto}: ComponentFilhoType) => {
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

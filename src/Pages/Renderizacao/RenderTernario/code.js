export const code = `const [azul, setAzul] = useState(false)

// Neste caso "azul" é um boolano, e podemos verificar se é true ou falso utiliando apenas o nome da variável
// azul ? ... é a mesma coisa que dizer azul === true ? ...
return(
  <>
    {azul ? (
      <p style={{color: blue}}>Texto azul exibido<p/>
    ) : (
      <p style={{color: red}}>Texto vermelho exibido<p/>
    )}
  </>
)
`;

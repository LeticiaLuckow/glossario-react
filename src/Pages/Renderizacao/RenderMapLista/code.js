export const code = `const nomes = ["João", "Francisco", "José"]

return (
  <>
    {nomes.map(nome => (
      <p key={nome}>{nome}</p>
    ))}
  </>
)
`;

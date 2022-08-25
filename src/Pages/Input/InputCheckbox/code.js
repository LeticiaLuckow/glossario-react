export const code = `const [portugues, setPortugues] = useState(false);

//A alteração na seleção do input altera o valor do estado para true ou false
<input
  type="checkbox"
  id="portugues"
  value="pt"
  onChange={(e) => {
    setPortugues(e.target.checked);
  }}
/>
`;

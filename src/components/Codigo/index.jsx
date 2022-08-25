import { CopyBlock, dracula } from 'react-code-blocks';

const Codigo = ({ texto }) => {
  return (
    <div style={{ marginTop: '36px' }}>
      <p style={{ fontWeight: 'bold' }}>Exemplo de código: </p>
      <CopyBlock
        theme={dracula}
        text={texto}
        language="jsx"
        showLineNumbers={false}
        wrapLines={false}
      />
    </div>
  );
};

export default Codigo;

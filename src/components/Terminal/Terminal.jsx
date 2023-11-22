import "./Terminal.css";

export const Terminal = ({ compileResult, compileError, compileErrorLex }) => {
  // LOGICA

  return (
    <div id="output">
      <div className="window">Alba Project Terminal</div>
      <div id="terminal-code">
        {compileResult.map((result, index) => (
          <p key={index}>{result}</p>
        ))}

        {compileError.map((result, index) => (
          <p key={index}>{result}</p>
        ))}

        {compileErrorLex.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
};

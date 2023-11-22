import React, { useState, useEffect, useRef } from "react";
import "./CodeInput.css";

export const CodeInput = ({ setCode, code, codeInput, setCodeInput }) => {
  const [lineNumber, setLineNumber] = useState(1);
  const textareaRef = useRef(null);

  const initialHeight = 300;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setLineNumber((prevLineNumber) => prevLineNumber + 1);
    }
  };

  const handleInputChange = () => {
    const inputText = textareaRef.current.value;

    // Divide el texto usando el punto y coma como delimitador y filtra elementos vacíos
    let codeArray = inputText.split(";").filter((item) => item.trim() !== "");

    setCode(codeArray);
    setLineNumber(codeArray.length);
    setCodeInput(inputText);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const lineHeight = 30;
    const newHeight = Math.max(initialHeight, lineHeight * lineNumber);
    textareaRef.current.style.height = `${newHeight}px`;

    window.requestAnimationFrame(() => {
      textareaRef.current.style.height = `${newHeight}px`;
    });
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [lineNumber]);

  return (
    <div className="code-terminal">
      <form id="form">
        <div className="line-numbers-wrapper">
          <div className="line-numbers">
            {Array.from({ length: lineNumber }, (_, index) => (
              <span key={index}>{index + 1}</span>
            ))}
          </div>
          <textarea
            ref={textareaRef}
            id="text-area"
            name="code"
            style={{ height: `${initialHeight}px` }}
            onKeyDown={handleKeyDown}
            value={codeInput}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

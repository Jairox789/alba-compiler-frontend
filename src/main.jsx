import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CompilerProvider } from "./context/CompilerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CompilerProvider>
    <App />
  </CompilerProvider>
);

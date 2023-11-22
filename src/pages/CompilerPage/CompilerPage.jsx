import { useState } from "react";
import { CodeInput } from "../../components/CodeInput/CodeInput";
import { Terminal } from "../../components/Terminal/Terminal";
import "./CompilerPage.css";
import { useCompiler } from "../../context/CompilerContext";
import { CodeInputKids } from "../../components/CodeInputKids/CodeInputKids";
import { Modal } from "../../components/Modal/Modal";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export function CompilerPage() {
  const {
    compileResult,
    compileError,
    compileErrorLex,
    gramatica,
    resetStates,
  } = useCompiler();

  const [modalState, setModalState] = useState(false);
  const [code, setCode] = useState([]);
  const [codeInput, setCodeInput] = useState("");
  const [downloadButtonDisabled, setDownloadButtonDisabled] = useState(true);

  async function enviarDatos(platform) {
    if (compileError.length > 0 || compileErrorLex.length > 0) {
      alert("No se puede compilar con errores");
    } else {
      const datos = {
        out: compileResult,
        platform: platform,
      };

      const opciones = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };

      try {
        const respuesta = await fetch(
          "https://alba-compiler-backend.vercel.app/compile",
          opciones
        );

        if (!respuesta.ok) {
          throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const archivoBinario = await respuesta.blob();
        const blob = new Blob([archivoBinario], {
          type: "application/octet-stream",
        });

        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "app.exe";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  const compile = async () => {
    resetStates();

    const formattedCode = code.map((item) => item.trim() + ";").join("\n");
    await gramatica.parse(formattedCode);

    if (compileError.length > 0 || compileErrorLex.length > 0) {
      setDownloadButtonDisabled(true);
    } else {
      setDownloadButtonDisabled(false);
    }
  };

  const reorderCode = (newCode) => {
    const formattedCode = newCode
      .map((item, index) => {
        // Si es el último elemento, agrega un punto y coma al final
        return index === newCode.length - 1 ? item + ";" : item;
      })
      .join(";\n");

    setCodeInput(formattedCode);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="out_in">
          <div className="code_interactive">
            <h2>Código interactivo</h2>
            <CodeInputKids
              setCode={setCode}
              code={code}
              reorderCode={reorderCode}
            />
          </div>

          <div className="code_strict">
            <h2>Código estricto</h2>
            <CodeInput
              setCode={setCode}
              code={code}
              codeInput={codeInput}
              setCodeInput={setCodeInput}
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          id="compileButton"
          onClick={compile}
        >
          Compilar
        </button>

        <button
          className="btn btn-success"
          id="downloadButton"
          disabled={downloadButtonDisabled}
          onClick={() => {
            setModalState(true);
          }}
        >
          Descargar Ejecutable
        </button>

        <Terminal
          compileResult={compileResult}
          compileError={compileError}
          compileErrorLex={compileErrorLex}
        />

        <Modal
          modalState={modalState}
          setModalState={setModalState}
          tabTitle={"Compilar programa"}
        >
          <div className="compile_container">
            <div
              className="compiler_item"
              onClick={() => {
                enviarDatos("windows");
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/220/220215.png" />
              <p>Compilar para windows</p>
            </div>

            <div
              className="compiler_item"
              onClick={() => {
                enviarDatos("linux");
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" />
              <p>Compilar para Linux</p>
            </div>

            <div
              className="compiler_item"
              onClick={() => {
                enviarDatos("macos");
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2/2235.png" />
              <p>Compilar para MacOs</p>
            </div>
          </div>
        </Modal>
      </main>

      <Footer />
    </>
  );
}

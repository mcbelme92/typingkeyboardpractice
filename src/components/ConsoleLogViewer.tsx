import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ConsoleLogViewerProps {
  /**
   * Código JavaScript a ejecutar dentro del visor.
   * Si no se proporciona, se usará un código por defecto.
   */
  code?: string;
}

/**
 * Componente reutilizable que ejecuta código JavaScript y captura el output de `console.log()`.
 * Muestra tanto el código ejecutado como el resultado inline.
 *
 * @component
 * @param {ConsoleLogViewerProps} props - Propiedades del componente.
 * @param {string} [props.code] - Código a ejecutar. Si no se pasa, se usa un valor por defecto.
 * @returns {JSX.Element} Componente `ConsoleLogViewer`.
 *
 * @example
 * // Uso con código personalizado:
 * <ConsoleLogViewer code={`const mensaje = "Hola"; console.log(mensaje);`} />
 *
 * @example
 * // Uso sin props (usa código por defecto):
 * <ConsoleLogViewer />
 */
const ConsoleLogViewer: React.FC<ConsoleLogViewerProps> = ({ code }) => {
  // 🔹 Código por defecto si no se pasa `code`
  const defaultCode = `
const saludo = "Hola Mundo";
console.log(saludo);
  `;

  const [logResult, setLogResult] = useState<string>("");

  useEffect(() => {
    const capturedLogs: string[] = [];
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      capturedLogs.push(args.map(arg => JSON.stringify(arg)).join(", "));
      originalConsoleLog(...args);
    };

    try {
      eval(code ?? defaultCode); // 🔥 Ejecutamos el código pasado o el por defecto
    } catch (error) {
      console.error("Error ejecutando código:", error);
      capturedLogs.push(`Error: ${error}`);
    }

    console.log = originalConsoleLog;
    setLogResult(capturedLogs.join("\n"));
  }, [code, defaultCode]); // 🔹 Se ejecuta cada vez que cambie `code`

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        color: "#D4D4D4",
        fontFamily: "Consolas, 'Courier New', monospace",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "10px", color: "#FFA500" }}>
        🖥️ Console Log Output:
      </Typography>
      
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
${code ?? defaultCode}

// 🔍 Resultado:
${
  logResult
    ? `
console.log(${logResult});
    `
    : `
// (sin output)
    `
}
        `}
      </SyntaxHighlighter>
    </Box>
  );
};

export default ConsoleLogViewer;

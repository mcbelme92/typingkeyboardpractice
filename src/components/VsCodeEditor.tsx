import React from "react";
import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { formatCodeForTypingVscode } from "../utils/formatText"; // 🔥 Usa la nueva versión
import "./VsCodeEditor.css";

interface VSCodeEditorProps {
  code: string;
  cursorPosition: number;
}

const VsCodeEditor: React.FC<VSCodeEditorProps> = ({ code, cursorPosition }) => {
  // 🔹 Formatea el código antes de mostrarlo
  const formattedCode = formatCodeForTypingVscode(code);
  
  // 🔹 Función para ajustar correctamente la posición del cursor y evitar saltos innecesarios
  const getNextValidCursorPosition = (text: string, position: number): number => {
    let newPosition = position;

    // 🔥 Avanza en espacios en blanco hasta encontrar una letra o símbolo válido
    while (newPosition < text.length && /\s/.test(text[newPosition])) {
      newPosition++;
    }

    return newPosition;
  };

  // 🔥 Ajusta la posición real del cursor en función del texto procesado
  const adjustedCursorPosition = getNextValidCursorPosition(formattedCode, cursorPosition);

  // 🔹 Inserta la tilde `|` en la posición correcta dentro del código
  const highlightedCode = `${formattedCode.slice(0, adjustedCursorPosition)}|${formattedCode.slice(
    adjustedCursorPosition
  )}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E1E1E",
        borderRadius: "10px",
        padding: "20px",
        color: "#D4D4D4",
        fontFamily: "Consolas, 'Courier New', monospace",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.7)",
        width: "95%",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          fontSize: "20px",
          padding: "15px",
          borderRadius: "8px",
          width: "100%",
          overflowX: "auto",
        }}
        wrapLines={true}
        useInlineStyles={true}
      >
        {highlightedCode} {/* 🔥 Ahora el código es formateado automáticamente */}
      </SyntaxHighlighter>
    </Box>
  );
};

export default VsCodeEditor;

import React from "react";
import { Box,  } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface VSCodeEditorProps {
  code: string;
}

const VsCodeEditor: React.FC<VSCodeEditorProps> = ({ code }) => {
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
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default VsCodeEditor;

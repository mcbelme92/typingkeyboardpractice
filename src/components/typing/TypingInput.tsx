import React from "react";
import { TextField } from "@mui/material";

interface TypingInputProps {
  userInput: string;
  wrongKeys: string[] ; // 🔥 Teclas incorrectas
}

const TypingInput: React.FC<TypingInputProps> = ({ userInput, wrongKeys }) => {
  return (
    <TextField
      placeholder="Escribe aqui"
      value={userInput}
      fullWidth
      variant="outlined"
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#fff",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: wrongKeys.length > 0 ? "red" : "#757575", // 🔥 Marca borde en rojo si hay errores
          },
          "&:hover fieldset": {
            borderColor: "yellow",
          },
          "&.Mui-focused fieldset": {
            borderColor: "lightgreen",
          },
        },
        "& input": {
          color: "#fff",
          fontSize: "18px",
        },
      }}
    />
  );
};

export default TypingInput;

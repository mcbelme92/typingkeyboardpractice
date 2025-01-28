import React from "react";
import { TextField } from "@mui/material";

interface TypingInputProps {
  userInput: string;
}

const TypingInput: React.FC<TypingInputProps> = ({ userInput }) => {
  return (
    <TextField
      fullWidth
      value={userInput}
      variant="outlined"
      placeholder="Escribe aquí..."
      InputProps={{
        sx: {
          bgcolor: "#1e1e1e", // 🔥 Fondo oscuro VSCode
          color: "#d4d4d4", // 🔥 Texto en gris claro
          fontFamily: "Consolas, 'Courier New', monospace", // 🔥 Fuente VSCode
          fontSize: "16px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3c3c3c", // 🔥 Borde gris oscuro
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#007acc", // 🔥 Azul VSCode en hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#569cd6", // 🔥 Azul más fuerte cuando está enfocado
          },
        },
      }}
    />
  );
};

export default TypingInput;

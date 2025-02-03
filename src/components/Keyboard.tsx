import React from "react";
import { Box, Button } from "@mui/material";
import { keyboardLayout, specialKeyWidths } from "../data/keyboardConfig";
import { formatCodeForTyping } from "../utils/formatText";

interface KeyboardProps {
  currentKey: string;
  isShiftActive: boolean;
  isAltGrActive: boolean;
  wrongKeys: string[];
}

const Keyboard: React.FC<KeyboardProps> = ({ currentKey, isShiftActive, isAltGrActive, wrongKeys }) => {
  const layout = isAltGrActive ? "altGr" : isShiftActive ? "shift" : "normal";
  const formattedText = formatCodeForTyping(currentKey); 
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, mt: 4 }}>
      {keyboardLayout[layout].map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {row.map((key, index) => (
            <Button
              key={`${key}-${rowIndex}-${index}`}
              variant="contained"
              sx={{
                minWidth: specialKeyWidths[key] || "40px",
                height: "40px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                background: wrongKeys.includes(key)
                  ? "red" // 🔥 Marca en rojo las teclas incorrectas
                  : key === formattedText
                  ? "linear-gradient(45deg, #ffcc00, #ff6600)" // 🔥 Fondo especial para la tecla correcta
                  : key === "Shift" && isShiftActive
                  ? "blue" // 🔥 Resalta Shift si está activo
                  : "rgba(30, 30, 30, 0.9)",
                color: "#fff",
                boxShadow: key === formattedText ? "0px 0px 20px 5px rgba(255, 255, 0, 0.8)" : "0px 0px 10px 2px rgba(0, 255, 255, 0.3)",
                animation: key === formattedText ? "pulse 1s infinite" : undefined, // 🔥 Añade animación solo en la tecla correcta
                "&:hover": {
                  background: "linear-gradient(45deg, #00ffcc, #ff33cc)",
                  boxShadow: "0px 0px 15px 4px rgba(255, 255, 255, 0.8)",
                },
                "@keyframes pulse": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.1)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
            >
              {key}
            </Button>
          ))}
        </Box>
      ))}

      {/* Barra espaciadora */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "300px",
            height: "40px",
            fontSize: "16px",
            textTransform: "none",
            borderRadius: "8px",
            background: currentKey === " " ? "linear-gradient(45deg, #ffcc00, #ff6600)" : "rgba(30, 30, 30, 0.9)",
            color: "#fff",
            boxShadow: currentKey === " " ? "0px 0px 20px 5px rgba(255, 255, 0, 0.8)" : "0px 0px 10px 2px rgba(0, 255, 255, 0.3)",
            animation: currentKey === " " ? "pulse 1s infinite" : undefined,
            "&:hover": {
              background: "linear-gradient(45deg, #ff6600, #ff33cc)",
              boxShadow: "0px 0px 15px 4px rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          ⎵
        </Button>
      </Box>
    </Box>
  );
};

export default Keyboard;

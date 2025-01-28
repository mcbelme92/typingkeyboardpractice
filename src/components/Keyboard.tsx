import React from "react";
import { Box, Button } from "@mui/material";
import { keyboardLayout, specialKeyWidths } from "../data/keyboardConfig";

interface KeyboardProps {
  currentKey: string;
  isShiftActive: boolean;
  isAltGrActive: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({ currentKey, isShiftActive, isAltGrActive }) => {
  const layout = isAltGrActive ? "altGr" : isShiftActive ? "shift" : "normal";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, mt: 4 }}>
      {keyboardLayout[layout].map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {row.map((key, index) => (
            <Button
              key={`${key}-${rowIndex}-${index}`} // 🔥 Clave única para evitar errores
              variant="contained"
              sx={{
                minWidth: specialKeyWidths[key] || "40px",
                height: "40px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: "8px",
                background: key === currentKey ? "linear-gradient(45deg, #ffcc00, #ff6600)" : "rgba(30, 30, 30, 0.9)",
                color: "#fff",
                boxShadow: key === currentKey ? "0px 0px 20px 5px rgba(255, 255, 0, 0.8)" : "0px 0px 10px 2px rgba(0, 255, 255, 0.3)",
                animation: key === currentKey ? "pulse 1s infinite" : "glow 2s infinite",
                "&:hover": {
                  background: "linear-gradient(45deg, #00ffcc, #ff33cc)",
                  boxShadow: "0px 0px 15px 4px rgba(255, 255, 255, 0.8)",
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
            background: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(30, 30, 30, 0.9))`,
            color: "#fff",
            boxShadow: currentKey === " " ? "0px 0px 20px 5px rgba(255, 255, 0, 0.8)" : "0px 0px 10px 2px rgba(0, 255, 255, 0.3)",
            animation: currentKey === " " ? "pulse 1s infinite" : "glow 2s infinite",
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

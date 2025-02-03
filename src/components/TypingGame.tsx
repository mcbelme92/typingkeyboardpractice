import React from "react";
import { Box, Typography } from "@mui/material";
import { useTyping } from "../hooks/useTyping";
import TypingInput from "./typing/TypingInput";

interface TypingGameProps {
  targetText: string;
  onTypingComplete: () => void;
}

const TypingGame: React.FC<TypingGameProps> = ({ targetText, onTypingComplete }) => {
  const { userInput, wrongKeys, errorMessage } = useTyping(targetText, onTypingComplete);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <TypingInput userInput={userInput} wrongKeys={wrongKeys} />
      
      {/* 🔥 Mensaje de error si se escribe mal */}
      {errorMessage && (
        <Typography
          sx={{
            color: "red",
            mt: 2,
            fontWeight: "bold",
            animation: "blink 1s infinite",
            "@keyframes blink": {
              "0%": { opacity: 1 },
              "50%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default TypingGame;

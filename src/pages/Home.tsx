import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import Keyboard from "../components/Keyboard";
import VsCodeEditor from "../components/VsCodeEditor";
import TypingGame from "../components/TypingGame";
import { snippets } from "../data/snippets";
import { useTyping } from "../hooks/useTyping";
import { formatCodeForTypingVscode } from "../utils/formatText";
import Explanation from "../components/Explanation";


const Home: React.FC = () => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false); // 🔹 Controla si se muestra la explicación

  const handleNextSnippet = () => {
    setShowExplanation(false); // 🔥 Oculta la explicación
    setCurrentSnippetIndex((prev) => (prev + 1) % snippets.length);
  };

  const handleTypingComplete = () => {
    setShowExplanation(true); // 🔥 Muestra la explicación antes de avanzar
  };

  const { userInput, currentKey, isShiftActive, isAltGrActive, isCompleted, wrongKeys } = useTyping(
    snippets[currentSnippetIndex].code,
    handleTypingComplete
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Aprende Código Tipando
        </Typography>
        <VsCodeEditor
          code={snippets[currentSnippetIndex].code}
          cursorPosition={formatCodeForTypingVscode(userInput).length}
        />

        {!isCompleted || !showExplanation ? (
          <>
            <TypingGame
              targetText={snippets[currentSnippetIndex].code}
              onTypingComplete={handleTypingComplete}
            />
            <Keyboard
              currentKey={currentKey}
              isShiftActive={isShiftActive}
              isAltGrActive={isAltGrActive}
              wrongKeys={wrongKeys}
            />
          </>
        ) : (
          <Explanation
            title="Detalles del Código"
            content={snippets[currentSnippetIndex].explanation}
            onConfirm={handleNextSnippet}
          />
        )}
      </Box>
    </Container>
  );
};

export default Home;

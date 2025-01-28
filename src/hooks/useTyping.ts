import { useState, useEffect } from "react";
import { shiftCharacters, altGrCharacters } from "../data/keyboardConfig";

export const useTyping = (text: string, onComplete: () => void) => {
  const [userInput, setUserInput] = useState("");
  const [currentKey, setCurrentKey] = useState(text[0] || "");
  const [isShiftActive, setIsShiftActive] = useState(
    shiftCharacters.has(text[0]) || /[A-Z]/.test(text[0])
  );
  const [isAltGrActive, setIsAltGrActive] = useState(altGrCharacters.has(text[0]));
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setUserInput("");
    setCurrentKey(text[0] || "");
    setIsShiftActive(shiftCharacters.has(text[0]) || /[A-Z]/.test(text[0])); // 🔥 Detecta mayúsculas
    setIsAltGrActive(altGrCharacters.has(text[0]));
    setIsCompleted(false);
  }, [text]);

  useEffect(() => {
    if (userInput === text) {
      setIsCompleted(true);
      onComplete();
    }
  }, [userInput, text, onComplete]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isCompleted) return;

      const keyPressed = event.key;

      if (keyPressed === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1));
        const nextKey = text[userInput.length - 1] || text[0];

        setCurrentKey(nextKey);
        setIsShiftActive(shiftCharacters.has(nextKey) || /[A-Z]/.test(nextKey)); // 🔥 Si la anterior letra era mayúscula, activa Shift
        setIsAltGrActive(altGrCharacters.has(nextKey));
        return;
      }

      if (keyPressed === text[userInput.length]) {
        setUserInput((prev) => {
          const newInput = prev + keyPressed;
          const nextKey = text[newInput.length] || "";

          setCurrentKey(nextKey);
          setIsShiftActive(shiftCharacters.has(nextKey) || /[A-Z]/.test(nextKey)); // 🔥 Shift activo si es mayúscula
          setIsAltGrActive(altGrCharacters.has(nextKey));
          return newInput;
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [text, userInput, isCompleted]);

  return { userInput, currentKey, isShiftActive, isAltGrActive, setUserInput, isCompleted };
};

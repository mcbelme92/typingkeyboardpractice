import { useState, useEffect } from "react";
import { shiftCharacters, altGrCharacters } from "../data/keyboardConfig";
import { formatCodeForTyping } from "../utils/formatText";

export const useTyping = (text: string, onComplete: () => void) => {
  const formattedText = formatCodeForTyping(text); // 🔥 Formateamos el código correctamente

  const [userInput, setUserInput] = useState("");
  const [currentKey, setCurrentKey] = useState(formattedText[0] || "");
  const [isShiftActive, setIsShiftActive] = useState(
    shiftCharacters.has(formattedText[0]) || /^[A-Z]$/.test(formattedText[0])
  );
  const [isAltGrActive, setIsAltGrActive] = useState(altGrCharacters.has(formattedText[0]));
  const [wrongKeys, setWrongKeys] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setUserInput("");
    setCurrentKey(formattedText[0] || "");
    setIsShiftActive(shiftCharacters.has(formattedText[0]) || /^[A-Z]$/.test(formattedText[0]));
    setIsAltGrActive(altGrCharacters.has(formattedText[0]));
    setWrongKeys([]);
    setIsCompleted(false);
    setErrorMessage(null);
  }, [formattedText]);

  useEffect(() => {
    if (userInput === formattedText) {
      setIsCompleted(true);
      onComplete();
    }
  }, [userInput, formattedText, onComplete]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isCompleted) return;
    
      const keyPressed = event.key;
      console.log("Tecla presionada:", keyPressed);
    
      // 🔹 Evita marcar Shift, AltGr, Control, y CapsLock como errores
      if (["Shift", "AltGraph", "Control", "CapsLock"].includes(keyPressed)) {
        return;
      }
    
      // 🔥 Si hay errores, solo permitir `Backspace`
      if (wrongKeys.length > 0 && keyPressed !== "Backspace") {
        setErrorMessage("Corrige el error con Backspace antes de continuar.");
        return; // ⛔ Bloquea escritura hasta que se corrija
      }
    
      if (keyPressed === "Backspace") {
        setUserInput((prev) => {
          const newInput = prev.slice(0, -1);
          const newCurrentKey = formattedText[newInput.length] || formattedText[0];
    
          setCurrentKey(newCurrentKey);
          setIsShiftActive(shiftCharacters.has(newCurrentKey) || /^[A-Z]$/.test(newCurrentKey));
          setIsAltGrActive(altGrCharacters.has(newCurrentKey));
          setWrongKeys([]); // 🔥 Borra errores al corregir
          setErrorMessage(null); // 🔥 Quita mensaje de error
          return newInput;
        });
        return;
      }
    
      const expectedChar = formattedText[userInput.length];
    
      // 🔥 PERMITIR TILDES (cuando primero se presiona la tilde y luego la vocal)
      if (expectedChar.normalize("NFD") === keyPressed.normalize("NFD")) {
        setUserInput((prev) => {
          const newInput = prev + keyPressed;
          const newCurrentKey = formattedText[newInput.length] || "";
    
          setCurrentKey(newCurrentKey);
          setIsShiftActive(shiftCharacters.has(newCurrentKey) || /^[A-Z]$/.test(newCurrentKey));
          setIsAltGrActive(altGrCharacters.has(newCurrentKey));
          setErrorMessage(null); // 🔥 Si acierta, borra el mensaje de error
    
          return newInput;
        });
      } 
      // 🔹 Permitir la tilde (`´`) temporalmente sin marcarla como error
      else if (keyPressed === "Dead") {
        console.log("Esperando siguiente tecla para completar acento...");
        return;
      } 
      // 🔥 Si la tecla es incorrecta, marcar error y bloquear escritura
      else {
        setWrongKeys((prev) => [...prev, keyPressed]);
        setErrorMessage("Escribiste mal. Presiona Backspace para corregir.");
      }
    };
    
    
  
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [text, userInput, isCompleted, wrongKeys.length, formattedText]);
  

  return {
    userInput,
    currentKey,
    isShiftActive,
    isAltGrActive,
    wrongKeys,
    errorMessage,
    setUserInput,
    isCompleted,
  };
};

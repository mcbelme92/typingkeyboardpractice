import React, { createContext, useContext, useState, ReactNode } from "react";

// 🔹 Definir la interfaz del contexto
interface TypingContextProps {
  currentSnippetIndex: number;
  setCurrentSnippetIndex: React.Dispatch<React.SetStateAction<number>>;
}

// 🔹 Crear el contexto con un valor por defecto
const TypingContext = createContext<TypingContextProps | undefined>(undefined);

// 🔹 Definir el Provider con los tipos correctos
interface TypingProviderProps {
  children: ReactNode;
}

export const TypingProvider: React.FC<TypingProviderProps> = ({ children }) => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState<number>(0);

  return (
    <TypingContext.Provider value={{ currentSnippetIndex, setCurrentSnippetIndex }}>
      {children}
    </TypingContext.Provider>
  );
};

// 🔹 Hook personalizado para usar el contexto de manera segura
// eslint-disable-next-line react-refresh/only-export-components
export const useTypingContext = (): TypingContextProps => {
  const context = useContext(TypingContext);
  if (!context) {
    throw new Error("useTypingContext debe ser usado dentro de un TypingProvider");
  }
  return context;
};

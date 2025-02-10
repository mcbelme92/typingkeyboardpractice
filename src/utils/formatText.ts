export const formatCodeForTyping = (text?: string): string => {
  if (!text) return ""; // 🔹 Si es undefined o null, retorna string vacío
  
  return text
    .trim() // 🔥 Elimina espacios en blanco al inicio y final
    .replace(/\s*\n\s*/g, "\n") // 🔥 Ajusta saltos de línea
    .replace(/\t+/g, " "); // 🔥 Reemplaza tabulaciones con un solo espacio
};

export const formatCodeForTypingVscode = (code: string): string => {
  // 🔹 Verifica si el código tiene pocas líneas (es decir, que todo esté en una sola línea)
  const lineCount = code.split("\n").length;

  if (lineCount <= 2) { // Si hay pocas líneas, intenta reformatear automáticamente
    return code
      .replace(/;\s*/g, ";\n")  // Salto de línea después de cada ;
      .replace(/{\s*/g, "{\n")  // Salto de línea después de {
      .replace(/}\s*/g, "\n}")  // Salto de línea antes de }
      .replace(/\n\s*\n/g, "\n") // Elimina dobles saltos de línea innecesarios
      .trim();
  }

  return code; // Si ya tiene varias líneas, se devuelve sin cambios
};



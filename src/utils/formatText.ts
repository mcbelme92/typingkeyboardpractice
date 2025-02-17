/**
 * Formatea el código para que sea más fácil de escribir en el juego de tipeo.
 * 
 * @param {string} [text] - El texto a formatear. Puede ser `undefined` o `null`.
 * @returns {string} - El texto formateado, sin espacios innecesarios y con saltos de línea ajustados.
 *
 * @example
 * const inputCode = "   console.log('Hola');  \n   ";
 * const formattedCode = formatCodeForTyping(inputCode);
 * console.log(formattedCode); // "console.log('Hola');"
 */
export const formatCodeForTyping = (text?: string): string => {
  if (!text) return ""; // 🔹 Si es undefined o null, retorna string vacío
  
  return text
    .trim() 
    .replace(/\s*\n\s*/g, "\n") 
    .replace(/\t+/g, " ");
};

/**
 * Formatea el código para mejorar su visualización en el editor estilo VS Code.
 * 
 * @param {string} code - El código fuente a formatear.
 * @returns {string} - El código formateado con saltos de línea después de `{`, `;`, y `}` si tiene 2 líneas o menos.
 *
 * @example
 * const inputCode = "if(true){console.log('Hello');}";
 * const formattedCode = formatCodeForTypingVscode(inputCode);
 * console.log(formattedCode);
 * // if(true){
 * // console.log('Hello');
 * // }
 */
export const formatCodeForTypingVscode = (code: string): string => {
  const lineCount = code.split("\n").length;

  if (lineCount <= 2) { 
    return code
      .replace(/;\s*/g, ";\n")  
      .replace(/{\s*/g, "{\n")  
      .replace(/}\s*/g, "\n}")  
      .replace(/\n\s*\n/g, "\n")
      .trim();
  }

  return code; 
};

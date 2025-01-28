export const keyboardLayout = {
  normal: [
    ["º", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "'", "¡", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "`", "+"],
    ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "{", "}"],
    ["Shift", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "Shift"],
  ],
  shift: [
    ["ª", "!", '"', "·", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "^", "*"],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "[", "]"],
    ["Shift", ">", "Z", "X", "C", "V", "B", "N", "M", ";", ":", "_", "Shift"],
  ],
  altGr: [
    ["\\", "|", "@", "#", "~", "€", "¬", "{", "[", "]", "}", "`", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "", ""],
    ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "", ""],
    ["Shift", "<", "z", "x", "c", "v", "b", "n", "m", "", "", "", "Shift"],
  ],
};

// 🔥 Caracteres que requieren Shift automáticamente
export const shiftCharacters = new Set([
  "!", '"', "·", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "^", "*", "[", "]", "{", "}",
  ";", ":", "_", "Ñ", ">", "<", "¬", // Nuevos caracteres añadidos
]);

// 🔥 Caracteres que requieren AltGr automáticamente
export const altGrCharacters = new Set([
  "@", "#", "€", "~", "|", "\\", "`", "{", "[", "]", "}", "¬", // Caracteres especiales para AltGr
]);

// Tamaños de teclas especiales
export const specialKeyWidths: Record<string, string> = {
  Shift: "70px",
  Backspace: "70px",
  Caps: "70px",
  Tab: "70px",
  AltGr: "70px",
  Space: "300px",
};

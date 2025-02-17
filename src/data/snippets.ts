import { formatCodeForTypingVscode } from "../utils/formatText";

export const snippets = [
  {
    code: `const resultado = 3.1416; console.log("El área del círculo es:", resultado);`,
    explanation: "console.log",
  },
  {
    code: `function calcularAreaCirculo(radio) {const PI = 3.1416; return PI * radio * radio;}; let resultado = calcularAreaCirculo(5); console.log("El area del circulo es:", resultado);`,
    explanation:
      "Esta función calcula el área de un círculo dado un radio. Se usa una constante 'PI' y una función que multiplica el radio al cuadrado por PI.",
  },
  {
    code: formatCodeForTypingVscode(`console.log("El área del círculo es:", resultado);`),
    explanation: "console.log",
  },
  {
    code: formatCodeForTypingVscode('const variable = "Hola Mundo";'),
    explanation: "La variable 'variable' es una constante que almacena el texto 'Hola Mundo'.",
  },
  {
    code: formatCodeForTypingVscode(`const frutas = ["Manzana", "Banana", "Naranja", "Uva"]; frutas.forEach((fruta) => console.log(fruta));`),
    explanation: "Este código recorre un array de frutas y muestra cada elemento en la consola con 'forEach'.",
  }
];

/**
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

function addBinary(a, b) {
  // Suma los números decimales a y b
  let decimal = a + b;

  // Variable para almacenar el resultado binario
  let binary = "";

  while (decimal > 0) {
    // Agrega el resto obtenido al inicio de la cadena binaria
    binary = (decimal % 2) + binary;
    // Realiza la división entera del decimal entre 2
    decimal = Math.floor(decimal / 2);
  }

  // Si la suma de a y b es "0" retorna 0 de lo contrario retorna la cadena binary
  return a + b === 0 ? "0" : binary;
}
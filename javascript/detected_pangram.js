/**
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  // Creamos un array para almacenar las letras únicas.
  const letters = [];
  // Removemos todos los caracteres que no sean letras (ignoramos números, signos de puntuación y espacios en blanco).
  const textReplace = string.toLowerCase().replace(/[^a-zA-Z]/g, "");

  // Recorremos cada letra del texto sin caracteres no deseados.
  for (e in textReplace) {
    // Si la letra no se encuentra en el array de letras únicas, la añadimos.
    if (letters.indexOf(textReplace[e]) === -1) {
      letters.push(textReplace[e]);
    }
  }

  // Retornamos true si la cantidad de letras únicas es igual a 26.
  return letters.length === 26;
}

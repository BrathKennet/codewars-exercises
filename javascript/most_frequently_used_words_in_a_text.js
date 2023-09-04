/**
Write a function that, given a string of text (possibly with punctuation and line-breaks), 
returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
- A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
- Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
- Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, 
  or an empty array if a text contains no words.

Examples:

top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):
1. Avoid creating an array whose memory footprint is roughly as big as the input text.
2. Avoid sorting the entire array of unique words.

*/

function topThreeWords(text) {
  // Guardar las cantidades que se repiten
  const total = {};

  text
    .replace(/[^A-Za-z0-9_ ']/g, " ") // Reemplazar caracteres no alfanuméricos ni espacios.
    .split(" ") // Dividir el texto en palabras utilizando el espacio en blanco como separador.
    .forEach((v) => {
      if (v !== "'" && v !== "") {
        // Si la palabra no es una comilla simple ni está vacía.
        total[v.toLowerCase()] === undefined // Si la palabra no está en el objeto 'total'.
          ? (total[v.toLowerCase()] = 1) // Agregar la palabra al objeto 'total' con frecuencia 1.
          : total[v.toLowerCase()]++; // Incrementar la frecuencia si la palabra ya existe.
      }
    });

  return Object.entries(total) // Convertir el objeto 'total' en un array de pares clave-valor.
    .sort((a, b) => b[1] - a[1]) // Ordenar el array en orden descendente según la frecuencia.
    .slice(0, 3) // Tomar los tres primeros elementos del array (las palabras más frecuentes).
    .map((item) => item[0]); // Mapear el array para obtener solo las palabras.
}

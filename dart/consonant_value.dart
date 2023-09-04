/**
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, 
d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values 
"str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

Word values

Vowel-consonant lexicon

*/

import 'dart:math' as Math;

int solve(String s) {
  return s
      .toLowerCase() // Tranformar el texto en minúscula.
      .split(RegExp(
          r'([aeiou]+)')) // Separar el texto en un lista que filtre las vocales.
      .where((v) => v != '') // Eliminar elementos de la lista que son vacíos.
      .map((v) => v.codeUnits // Tranformar los elementos en Unicode UTF-16.
          .map(
              (v) => v - 96) // Restar a cada elemento 96 para enumerar desde 1.
          .reduce((value, element) =>
              value + element)) // Sumar los valores del valor de la lista.
      .reduce(
          (v, e) => Math.max(v, e)); // Determinar el máximo valor del iterable.
}

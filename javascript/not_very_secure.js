/**
In this example you have to validate if a user input string is alphanumeric. 
The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

*/

function alphanumeric(string) {
  // Verifica si la longitud de la cadena es 0 (cadena vacía).
  // Verifica si no se encontraron coincidencias y, por lo tanto, la cadena es alfanumérica.
  return string.length === 0 ? false : string.match(/[^A-Za-z0-9]/g) === null;
}
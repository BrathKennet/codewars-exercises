/**
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only 
once in the original string, or ")" if that character appears more than 
once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word) {
  // Convertimos la palabra a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas
  const textReplace = word.toLowerCase();
  let newText = "";

  // Recorremos cada letra en el texto
  for (let i = 0; i < textReplace.length; i++) {
    const currentLetter = textReplace[i];

    // Comprobamos si la letra actual aparece más de una vez en la cadena
    if (
      textReplace.indexOf(currentLetter) !==
      textReplace.lastIndexOf(currentLetter)
    ) {
      // Si la letra aparece más de una vez, agregamos ")" a la nueva cadena
      newText += ")";
    } else {
      // Si la letra aparece solo una vez, agregamos "(" a la nueva cadena
      newText += "(";
    }
  }

  // Retornamos la nueva cadena
  return newText;
}

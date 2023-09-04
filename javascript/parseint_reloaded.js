/**
In this kata we want to convert a string into an integer. 
The strings simply represent the numbers in words.

Examples:
- "one" => 1
- "twenty" => 20
- "two hundred forty-six" => 246
- "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

Additional Notes:

- The minimum number is "zero" (inclusively)
- The maximum number, which must be supported is 1 million (inclusively)
- The "and" in e.g. "one hundred and twenty-four" is optional, 
  in some cases it's present and in others it's not
- All tested numbers are valid, you don't need to validate them

*/

function parseIntP(string) {
  // Objeto que guarda las claves de los números
  const numberP = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 
    'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 
    'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
    'eighty': 80, 'ninety': 90, 'hundred': 100, 'thousand': 1000, 'million': 1000000
  };

  // Contador para omitir valores
  let cont = 0

  return string.toLowerCase().replaceAll(" and", "").replaceAll("-", " ").split(" ").reduce((a,v,i,m)=> {
    if (cont != 0){ // Evaluación del contador
      cont = cont - 1;
      a = a
    }
    else if (v === "hundred" || v === "thousand" || v === "million") // Si inclluye esas claves no hacer nada
      a = a
    else if (m[i + 1] === "hundred" && m[i + 2] === "thousand") // Si es multiplo 10000
      a = a + numberP[m[i + 1]] * numberP[m[i + 2]] * numberP[m[i]];
    else if (m[i + 1] === "hundred" && m[i + 3] === "thousand"){ // Si es multiplo 100000
      a = a + (numberP[m[i]] * numberP[m[i + 1]] * numberP[m[i + 3]]) + (numberP[m[i + 2]] * numberP[m[i + 3]])
      cont = 2
    }
    else if (m[i + 1] === "hundred" && m[i + 4] === "thousand"){ // Si es multiplo de 10000 y 100000
      a = a + (numberP[m[i]] * numberP[m[i + 1]] * numberP[m[i + 4]]) + (numberP[m[i + 2]] * numberP[m[i + 4]]) + (numberP[m[i + 3]] * numberP[m[i + 4]])
      cont = 3
    }
    else if ( m[i + 2] === "thousand"){ // SI es multiplo de 10000 y 1000
      a = a + (numberP[m[i]] * numberP[m[i + 2]]) + (numberP[m[i + 1]] * numberP[m[i + 2]])
      cont = 2
    }
    else if (m[i + 1] === "hundred" || m[i + 1] === "thousand" || m[i + 1] === "million") // Si es multiplo de 100
      a = a + numberP[m[i + 1]] * numberP[m[i]];
    else a = a + numberP[v]; // Numero menores a 100
    return a // Retornar el acumulador
  },0)

}

console.log(parseIntP("twenty-six thousand three hundred fifty-nine"));

/**
This is the Part II of Multiplying numbers as strings.

TODO
Multiply two numbers! Simple!

Rules
1. The arguments are passed as strings.
2. The numbers will be very large
3. The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. "-01.300"
4. Answer should be returned as string
5. The returned answer should not have leading or trailing zeroes (when applicable) e.g. 
"0123" and "1.100" are wrong, they should be "123" and "1.1"
6. Zero should not be signed and "-0.0" should be simply returned as "0".

*/

function multiply(str, ing) {
  // Determinar el signo final de la multiplicación
  const finalSign =
    str.includes("-") && ing.includes("-")
      ? ""
      : str.includes("-") || ing.includes("-")
      ? "-"
      : "";

  // Determinar cuantas decimales tiene cada numero
  const decimalA = str.split(".")[1] ? str.split(".")[1].length : 0;
  const decimalB = ing.split(".")[1] ? ing.split(".")[1].length : 0;

  // Eliminar los sginos decimales y negativos
  str = str.split("-").join("").split(".").join("");
  ing = ing.split("-").join("").split(".").join("");

  // Crear un array para almacenar los dígitos del resultado
  const result = new Array(str.length + ing.length).fill(0);

  // Iterar str través de los dígitos de la cadena 'str' y 'ing' en orden inverso
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = ing.length - 1; j >= 0; j--) {
      // Sumar el producto actual con el dígito en la posición correspondiente del resultado
      const sum = parseInt(str[i] * ing[j]) + result[i + j + 1];
      // Almacenar el dígito de las unidades de la suma en la posición i + j + 1
      result[i + j + 1] = sum % 10;
      // Llevar el dígito de las decenas hacia la posición i + j
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Convertir el array de dígitos en una cadena
  let resultS = result.join("");

  // Ubicar el punto de acuerdo a los decimales
  if (decimalA + decimalB > 0) {
    resultS =
      resultS.slice(0, -1 * (decimalA + decimalB)) +
      "." +
      resultS.slice(-1 * (decimalA + decimalB));
    resultS = resultS.replace(/0+$/, "");
  }

  //  Eliminar los ceros no significativos al inicio
  resultS = resultS.replace(/^0+/, "") || "0";

  // Si la cadena es '0' o '.' retornar '0'
  if (resultS === "0" || resultS === ".") return "0";

  // Quitar el signo '.' si es el caracter final
  if (resultS[resultS.length - 1] === ".") resultS = resultS.slice(0, -1);

  // Aumentar 0 si el signo '.' es el primer caracter
  if (resultS[0] === ".") resultS = "0" + resultS;

  // Retornar con el signo
  return finalSign + resultS;
}
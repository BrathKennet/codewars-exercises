/**
This is the first part. You can solve the second part here when you are done with this. 
Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

*/

function multiply(a, b) {
  // Crear un array para almacenar los dígitos del resultado
  const result = new Array(a.length + b.length).fill(0);

  // Iterar a través de los dígitos de la cadena 'a' y 'b' en orden inverso
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      // Sumar el producto actual con el dígito en la posición correspondiente del resultado
      const sum = parseInt(a[i] * b[j]) + result[i + j + 1];
      // Almacenar el dígito de las unidades de la suma en la posición i + j + 1
      result[i + j + 1] = sum % 10;
      // Llevar el dígito de las decenas hacia la posición i + j
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Convertir el array de dígitos en una cadena y eliminar los ceros no significativos
  return result.join("").replace(/^0+/, "") || "0";
}
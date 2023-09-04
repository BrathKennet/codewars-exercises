/**
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem 
to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) 
refers to taking the determinant of the 2x2 matrix created by crossing 
out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. 
if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

*/


function determinant(matrix) {
  let lengthMatrix = matrix.length;

  // Si la matriz es 1x1, el determinante es simplemente el valor único de la matriz
  if (lengthMatrix === 1) {
    return matrix[0][0];
  }

  // Si la matriz es 2x2, aplicamos la fórmula del determinante para matrices 2x2
  if (lengthMatrix === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  // Si la matriz es de 3x3 o más grande
  if (lengthMatrix >= 3) {
    let total = 0;
    while (lengthMatrix > 0) {
      total +=
        Math.pow(-1, 1 + (matrix.length - lengthMatrix + 1)) * // Factor de alternancia positivo/negativo
        determinant(cofactor(matrix, matrix.length - lengthMatrix)) * // Determinante del cofactor
        matrix[0][matrix.length - lengthMatrix]; // Elemento de la primera fila
      lengthMatrix--;
    }
    return total;
  }
}

// Función para calcular el cofactor de una matriz eliminando una fila y una columna
function cofactor(matrix, rowDelete) {
  // Crear una copia de la matriz original
  let matrixReduced = [...matrix.map((row) => [...row])];

  // Eliminar la primera fila
  matrixReduced.splice(0, 1);

  // Eliminar la columna correspondiente a 'rowDelete' en cada fila restante
  for (let i = 0; i < matrixReduced.length; i++) {
    matrixReduced[i].splice(rowDelete, 1);
  }

  return matrixReduced; // Devolver la matriz reducida
}
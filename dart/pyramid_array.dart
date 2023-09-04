/**
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s

*/

List<List<int>> pyramid(int n) {
  // Lista final a retornar.
  List<List<int>> finalPyramid = [];

  // Iterar mientras en numero sea mayor a 0.
  while (n > 0) {
    // Añadir nuevas listas a la Lista final.
    finalPyramid.add(List<int>.filled(n, 1));
    // Disminuir el número.
    n--;
  }

  // Retornar la Lista final de forma invertida.
  return finalPyramid.reversed.toList();
}

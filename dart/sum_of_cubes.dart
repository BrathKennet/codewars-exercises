/**
Write a function that takes a positive integer n, sums all the cubed values 
from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/

import 'dart:math';

int sumCubes(int n) {
  // Generar una lista con los numeros del 1 al n elevados al cubo.
  // Sumar los elementos de la lista.
  return List<int>.generate(n + 1, (int index) => pow(index, 3).toInt())
      .reduce((value, element) => value + element);
}
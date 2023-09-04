/**
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n^3, the cube above will 
have volume of (n-1)^3 and so on until the top which will have a volume of 1^3

You are given the total volume m of the building. Being 
given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be 
an integer m and you have to return the integer n such as n^3 + (n-1)^3 + (n-2)^3
+ ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1

*/

import 'dart:math';

int findNb(int m) {
  // Numero n de cubos.
  int k = 1;

  // Iterador.
  while (true) {
    // Restar al total el número n de cubos.
    m -= pow(k, 3).toInt();
    // Si el total es igual a 0, detener el ciclo.
    if (m == 0) break;
    // Si el total es menor a 0, detener el ciclo y convertir en número n de cubos a -1.
    if (m < 0) {
      k = -1;
      break;
    }
    //Incrementar el número n de cubos.
    k++;
  }

  // Retornar el número n de cubos.
  return k;
}

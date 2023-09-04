/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

int solution(int n) {
  // Si el número es menor o igual a 0, retornar 0.
  if (n <= 0) return 0;

  // Variable que se añadirá a la lista.
  int k = 0;
  // Lista que contiene los números que son múltiplos de 3 o 5.
  List<int> m = [];

  // Realizar el loop mientras la variable sea menor al número dado.
  while (k < n) {
    // Si la variable es múltiplo de 3 o 5, añadir a la lista.
    if (k % 3 == 0 || k % 5 == 0) m.add(k);
    // Incrementar el valor de la variable.
    k++;
  }

  // Retorna la suma de los elementos de la lista.
  return m.reduce((v, e) => v + e);
}
/**
I always thought that my old friend John was rather richer than he looked, 
but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:

- "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
- "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
- "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."

Could you tell me in each possible case:

1. how much money f he could possibly have ?
2. the cost c of a car?
3. the cost b of a boat?

So, I will have a better idea about his fortune. Note that if m-n is big enough, you might have a lot of possible answers.

Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers 
as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.

Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

Examples:
howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]

Explanation of the results for howmuch(1, 100):
- In the first answer his possible fortune is 37:
- so he can buy 7 boats each worth 5: 37 - 7 * 5 = 2
- or he can buy 9 cars worth 4 each: 37 - 9 * 4 = 1
- The second possible answer is 100:
- he can buy 7 boats each worth 14: 100 - 7 * 14 = 2
- or he can buy 9 cars worth 11: 100 - 9 * 11 = 1

Note
See "Sample Tests" to know the format of the return.

*/

List<List<String>> howmuch(int m, int n) {
  // Determinar el mínimo y máximo de los números dados.
  int min = m < n ? m : n;
  int max = m > n ? m : n;

  // Lista que almacenará las listas de String.
  List<List<String>> listT = [];

  List<int>.generate(max - min + 1,
          (int index) => min + index) // Generar los valores en una lista.
      .where((x) =>
          x % 7 == 2 &&
          x % 9 == 1) // Filtrar los elementos de acuerdo a los parámetros.
      .forEach((e) => listT.add([
            'M: $e',
            'B: ${e ~/ 7}',
            'C: ${e ~/ 9}'
          ])); // Añadir a la lista de String.

  // Retornar la lista de lista String.
  return listT;
}

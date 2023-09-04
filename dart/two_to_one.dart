/**
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

String longest(String a, String b) {
  // Concatenar los String y generar una lista con valores únicos.
  List<String> con = ((a + b).split('').toSet().toList());
  // Ordenar la lista.
  con.sort((a, b) => a.compareTo(b));
  // Retornar la lista en forma de String.
  return con.join('');
}

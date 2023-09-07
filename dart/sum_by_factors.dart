String sumOfDivided(List<int> l) {
  // Lista de Factores de todos los numeros de la lista.
  List<int> listFactors = [];

  for (int v in l) {
    // Iteración en los elementos de la lista.
    for (int e in factor(v)) {
      // Iteración en los elementos de los factores del elemento.
      if (!listFactors.contains(e))
        listFactors.add(e); // Añadir los factores a la lista general.
    }
  }

  listFactors.sort(); // Ordenar la Lista.

  String factS = ''; // String que contiene los factores y las sumas.

  for (int e in listFactors) {
    // iteración en la lista de factores.
    // Sumar los elementos que tienen factores en común.
    // Añadir con formato al String.
    factS += '($e ${l.where((v) => v % e == 0).reduce((a, v) => a + v)})';
  }

  return factS; //  Retornar el String.
}

/// Evaluar si un número es primo.
bool isPrime(int n) {
  if (n <= 1) return false; // Si es menor a uno retorna false.
  if (n <= 3) return true; // Si el numero es 2 o 3 retorna true.
  if (n % 2 == 0 || n % 3 == 0)
    return false; // Si el numero es divisible por 2 o 3 retorna false.
  // Evaluar si es divisible por los demás números y retornar false.
  for (int i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  // Retornar true por defecto si no es divisible por ningún número.
  return true;
}

/// Retornar la lista de factores de un número.
List<int> factor(int n) {
  if (n < 0) n *= -1; // Si el número es negativo transformar a positivo.
  List<int> factorM = []; // Lista de factores que contiene el número.
  int i = 2; // Iterador iniciado en 2 para comprobar los factores.

  while (n != 1) {
    // Si el iterador es primo y el numero es divisible por el iterador.
    if (isPrime(i) && n % i == 0) {
      n = n ~/ i; // Dividir el numero entre el factor.
      if (!factorM.contains(i))
        factorM.add(i); // Añadir a la lista si no existe el factor.
    } else {
      // Caso contrario añadir en 1 el iterador.
      i++;
    }
  }
  return factorM; // Retornar la lista de factores del número.
}

/**
Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :

"(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/


function primeFactors(n) {
  //Comprobar si un numero es primo.
  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  };

  const objNum = {}; //Objeto que guarda el primo con su respectivo exponente.
  let i = 2; // Inicializar los numeros primos.

  // Detener si el número es igual a 1.
  while (n !== 1) {
    // Encontrar factores primos y sus exponentes.
    if (isPrime(i) && n % i === 0) {
      n /= i;
      objNum[i] = (objNum[i] || 0) + 1;
    } else {
      i++;
    }
  }

  let primes = ""; // Cadena que contiene los primos y exponentes.
  Object.entries(objNum).forEach(([key, value]) => {
    // Recorrer el objeto y adaptarlo a la cadena.
    value === 1 ? (primes += `(${key})`) : (primes += `(${key}**${value})`);
  });

  return primes;
}

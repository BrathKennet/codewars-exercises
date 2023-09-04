/**
Sum of Pairs
Given a list of integers and a single sum value, return the first two values 
(parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, 
the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

*/

function sumPairs(ints, s) {
  // Crear un Map para almacenar números vistos y sus índices
  const numMap = new Map();

  // Recorrer cada elemento en el array ints
  for (let i = 0; i < ints.length; i++) {
    // Calcular el complemento necesario para alcanzar el valor objetivo s
    const complement = s - ints[i];

    // Comprobar si el complemento existe en el Map
    if (numMap.has(complement)) return [complement, ints[i]];

    // Si no se encuentra el complemento, agregar el número actual al Map
    numMap.set(ints[i], i);
  }

  // Si no se encuentra ningún par que cumpla con la condición, retornar undefined
  return undefined;
}

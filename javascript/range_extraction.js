/**
A format for expressing an ordered list of integers is to use a comma separated list of either

- individual integers
- or a range of integers denoted by the starting integer separated from the end integer 
  in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. 
  It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns 
a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

function range (list) {
  // Guarda los valores continuos en un objeto.
  const valuesC = {};

  // Recorrer la lista y guardar los valores.
  list.reduce((c, v) => {
    if (valuesC[c] === undefined) valuesC[c] = [v];
    else if (valuesC[c][valuesC[c].length - 1] + 1 === v) valuesC[c].push(v);
    else {
      c++;
      valuesC[c] = [v];
    }
    return c;
  }, 0);

  // Array para guardar los valores del objeto y agregarles formato.
  let resultM = [];

  // Agregar formato y guardar en el array.
  Object.keys(valuesC).forEach((k) => {
    (valuesC[k].length === 1) ? resultM.push(valuesC[k][0]) :
    (valuesC[k].length === 2) ? resultM.push(valuesC[k][0], valuesC[k][1]) :
    resultM.push(valuesC[k][0] + "-" + valuesC[k][valuesC[k].length - 1]);
  });

  // Retorne el array en forma de String.
  return resultM.join(",");
}
/**
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 
*/

// Variable para almacenar la concatenación del número y operando
let concat = "";

// Funciones para representar los números del 0 al 9
function zero() {
  return evaluate(concat, 0);
}

function one() {
  return evaluate(concat, 1);
}

function two() {
  return evaluate(concat, 2);
}

function three() {
  return evaluate(concat, 3);
}

function four() {
  return evaluate(concat, 4);
}

function five() {
  return evaluate(concat, 5);
}

function six() {
  return evaluate(concat, 6);
}

function seven() {
  return evaluate(concat, 7);
}

function eight() {
  return evaluate(concat, 8);
}

function nine() {
  return evaluate(concat, 9);
}

// Funciones para operadores matemáticos
function plus(a) {
  concat += `+${a}`;
}

function minus(a) {
  concat += `-${a}`;
}

function times(a) {
  concat += `*${a}`;
}

function dividedBy(a) {
  concat += `/${a}`;
}

// Función para evaluar la operación almacenada en "concat"
function evaluate(string, a) {
  switch (string[0]) {
    case "+":
      concat = "";
      return a + parseInt(string[1]);
    case "-":
      concat = "";
      return a - parseInt(string[1]);
    case "*":
      concat = "";
      return a * parseInt(string[1]);
    case "/":
      concat = "";
      return Math.trunc(a / parseInt(string[1]));
    default: {
      return a; // Si no se encuentra un operador, devuelve el número original
    }
  }
}

/* function zero(operation = null) {
  if (operation === null) return 0;
  return operation(0);
}

function one(operation = null) {
  if (operation === null) return 1;
  return operation(1);
}

function two(operation = null) {
  if (operation === null) return 2;
  return operation(2);
}

function three(operation = null) {
  if (operation === null) return 3;
  return operation(3);
}

function four(operation = null) {
  if (operation === null) return 4;
  return operation(4);
}

function five(operation = null) {
  if (operation === null) return 5;
  return operation(5);
}

function six(operation = null) {
  if (operation === null) return 6;
  return operation(6);
}

function seven(operation = null) {
  if (operation === null) return 7;
  return operation(7);
}

function eight(operation = null) {
  if (operation === null) return 8;
  return operation(8);
}

function nine(operation = null) {
  if (operation === null) return 9;
  return operation(9);
}

function plus(num) {
  return function (x) {
    return x + num;
  };
}

function minus(num) {
  return function (x) {
    return x - num;
  };
}

function times(num) {
  return function (x) {
    return x * num;
  };
}

function dividedBy(num) {
  return function (x) {
    return Math.floor(x / num);
  };
} */



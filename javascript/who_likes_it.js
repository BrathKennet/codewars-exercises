/**
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/


function likes(names) {
  const lengthList = names.length; // Obtenemos la cantidad de nombres en la lista.
  switch (lengthList) {
    // Caso en que no hay nombres en la lista.
    case 0: return "no one likes this";
    // Caso en que hay un nombre en la lista.
    case 1: return `${names[0]} likes this`;
    // Caso en que hay dos nombres en la lista.
    case 2: return `${names.join(" and ")} like this`;
    // Caso en que hay tres nombres en la lista.
    case 3: return `${names.slice(0, 2).join(", ")} and ${names[2]} like this`;
    // Caso en que hay más de tres nombres en la lista.
    default: return `${names.slice(0, 2).join(", ")} and ${lengthList - 2} others like this`;
  }
}
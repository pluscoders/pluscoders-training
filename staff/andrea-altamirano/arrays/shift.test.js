// tests

// case 1

var animals = ["pigs", "goats", "sheep", "cows"];
console.log(shift(animals));
// pigs
console.log(animals);
// ["goats", "sheep", "cows"]

// case 2

var names = ["Josefina", "Lucia", "Mateo", "Marta"];
console.log(shift(names));
// Josefina
console.log(names);
// ['Lucia', 'Mateo','Marta']

// case 3

var numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
console.log(shift(numbers));
// one
console.log(numbers);
// ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

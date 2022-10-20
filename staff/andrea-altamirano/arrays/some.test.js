// tests

//case 1
var array1 = [5, 12, 8, 130, 44];
var result = some(array1, (element) => element > 10);
console.log(result);
// true

// case 2
var names = ["Josefina", "Matias", "Eguzkiñe", "Maider", "Aritz"];
var result = some(names, (element) => element === "Maider");
console.log(result);
// 'true

//case 1
var array1 = [5, 12, 8, 130, 44];
var result = some(array1, (element) => element > 150);
console.log(result);
// false

// case 2
var names = ["Josefina", "Matias", "Eguzkiñe", "Maider", "Aritz"];
var result = some(names, (element) => element === "Laura");
console.log(result);
// false

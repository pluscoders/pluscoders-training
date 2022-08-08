//test1
console.log(from("foo"));
// expected output: Array ["f", "o", "o"]

//test2
console.log(from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

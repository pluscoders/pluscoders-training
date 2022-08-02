function map(array, callback) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    result = callback(array[i]);
    newArray[i] = result;
  }
  return newArray;
}

//tests
//case 1
var number = [1, 4, 9, 16];
result = map(number, (x) => x * 2);
console.log(result);
// expected output: Array [2, 8, 18, 32]

//case 1
var number = [1, 4, 9, 16];
result = map(number, (x) => x * 10);
console.log(result);
// expected output: Array [10, 40, 90, 160]

//case 1
var number = [1, 4, 9, 16];
result = map(number, (x) => x + 2);
console.log(result);
// expected output: Array [3, 6, 11, 18]

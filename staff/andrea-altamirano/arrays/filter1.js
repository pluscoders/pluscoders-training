function filter(array, callback) {
  var arrayCopied = [];
  for (i = 0; i < array.length; i++) {
    result = callback(array[i]);
    if (result === true) arrayCopied[arrayCopied.length] = array[i];
  }
  return arrayCopied;
}

//tests
//case 1
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var result = filter(words, (word) => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//case 2
var number = [1, 4, 9, 16, 25, 36, 3, 5, 18];
var result = filter(number, (element) => element > 10);
console.log(result);
//16, 25, 36, 18

//case 3
var number = [1, 4, 9, 16, 25, 36, 3, 5, 18];
var result = filter(number, (element) => element < 10);
console.log(result);
//1, 4, 9, 3, 5

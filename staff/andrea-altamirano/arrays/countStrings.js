function countStrings(array) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    var c = array[i];
    var type = typeof c;

    if (type == "string") {
      count++;
    }
  }
  return count;
}
// tests
console.log(
  countStrings([true, "one", false, 1, 3, {}, "three", function () {}, []])
);
// 3

console.log(countStrings([1, "2", "3", 4, 5, "6", 7, 8, 9, "10"]));
// 4

console.log(countStrings(["1", "2", "3", 4, 5, "6", 7, 8, "9", "10"]));
// 6

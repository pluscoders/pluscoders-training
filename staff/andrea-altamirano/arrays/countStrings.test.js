// tests
console.log(
  countStrings([true, "one", false, 1, 3, {}, "three", function () {}, []])
);
// 2

console.log(countStrings([1, "2", "3", 4, 5, "6", 7, 8, 9, "10"]));
// 4

console.log(countStrings(["1", "2", "3", 4, 5, "6", 7, 8, "9", "10"]));
// 6

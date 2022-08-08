function countStrings(array) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") count++;
  }

  return count;
}

/*
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
*/

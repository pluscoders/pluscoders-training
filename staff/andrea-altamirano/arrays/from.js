function from(string, callback) {
  var newArray = [];
  if (callback === undefined)
    for (var i = 0; i < string.length; i++) {
      newArray[i] = string[i];
    }

  for (var i = 0; i < string.length; i++) {
    var result = callback(string[i]);
    newArray[i] = result;
  }
  return newArray;
}

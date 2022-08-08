function map(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

/*
function map(array, callback) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    result = callback(array[i]);
    newArray[i] = result;
  }
  return newArray;
}*/

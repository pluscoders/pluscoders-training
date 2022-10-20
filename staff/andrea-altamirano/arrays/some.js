function some(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}

/*
function some(array, callback) {
  for (var i = 0; i < array.length; i++) {
    result = callback(array[i]);

    if (result === true) return true;
  }
  return false;
}
*/

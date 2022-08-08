function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    var result = callback(array[i]);

    if (!result) return false;
  }
  return true;
}

/*
function every(array, callback) {
    for (var i = 0; i < array.length; i++)
        if (!callback(array[i]))
            return false

    return true
}*/

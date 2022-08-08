function forEach(array, callback) {
  var aux = "";
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

/*
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element)
    }
}*/

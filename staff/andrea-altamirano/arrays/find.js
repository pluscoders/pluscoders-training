function find(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) return array[i];
  }
  return undefined;
}
/*
// HINT Array.prototype.find
function find(array, callback) {
  for (var i = 0; i < array.length; i++) {
    var aux = array[i];

    var result = callback(aux);

    if (result === true) return aux;
  }
}*/

function at(array, value) {
  var aux = "";
  if (value > 0) aux = array[value];
  else if (value < 0) aux = array[array.length + value];
  return aux;
}

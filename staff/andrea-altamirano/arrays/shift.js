function shift(array) {
  var aux = array[0];
  for (var i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  return aux;
}

/*
reemplazar el elemento ubicado en 0 por el siguiente y asi sucesivamente
for para ir pasando por los elementos
animals = ["pigs", "goats", "sheep", "cows"]
animals = ["goats","goats", "sheep", "cows"]
animals = ["goats","sheep", "sheep", "cows"]
animals = ["goats","sheep", "cows", "cows"]
Eliminar el ultimo elemento del array acortando la length

function shift(array) {
    var first = array[0]

    for (var i = 1; i < array.length; i++)
        array[i - 1] = array[i]

    array.length = array.length - 1

    return first
}
*/

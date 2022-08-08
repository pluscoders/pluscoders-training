function indexOf(array, value) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

/*
function indexOf(array, value) {
    // TODO

     -generar la variable que cuenta
     -for  para ir avanzando
     - la nueva variable con la posicion del array 
     - comparar la variable anterior con lo que estamos buscando
    - sie s true devolver la posicion
    - si es false que continue
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (element === value) {
            return i
        }
    }

    return -1
}
*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

/*
function includes(array, value) {
    // TODO
    /*
    -for  para ir pasando por el array
    -comprobar si esa parte del array es igual a value
    - si es true return true
     -si es false return false
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (element === value) return true
    }

    return false
}*/

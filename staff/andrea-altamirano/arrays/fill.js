function fill(array, value1, value2, value3) {
  if (value3 === undefined) value3 = array.length;
  if (value2 === undefined) value2 = 0;

  for (var i = value2; i <= value3; i++) {
    array[i] = value1;
  }
  return array;
}

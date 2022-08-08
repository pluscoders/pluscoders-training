function findLast(array, callback) {
  for (i = array.length - 1; i >= 0; i--) {
    if (callback(array[i])) return array[i];
  }
  return undefined;
}

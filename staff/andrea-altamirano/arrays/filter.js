function filter(array, callback) {
  var filterResult = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) filterResult[filterResult.length] = array[i];
  }
  return filterResult;
}
/*
function filter(array, callback) {
  var arrayCopied = [];
  for (i = 0; i < array.length; i++) {
    result = callback(array[i]);
    if (result === true) arrayCopied[arrayCopied.length] = array[i];
  }
  return arrayCopied;
}*/

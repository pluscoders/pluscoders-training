function join(array, separator) {
  var string = "";

  if (separator === undefined) separator = ",";

  for (var i = 0; i < array.length; i++) {
    string = string + array[i];

    if (i < array.length - 1) string = string + separator;
  }

  return string;
}

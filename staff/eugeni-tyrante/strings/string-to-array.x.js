function stringToArray(text) {
  var arr = '';
  var i = 0;
  while(i < text.length) {
    arr += text[i] + ","; i++;
  }
  console.log(arr);
}

stringToArray('Bo dia')
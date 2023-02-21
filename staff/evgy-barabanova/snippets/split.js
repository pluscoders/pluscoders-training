function split(text, pattern) {
  var result = [];
  var temp;

  for (var i = 0; i < text.length; i++) {
    
      if (text[i] != pattern && i < text.length - 1) {
        temp += text[i];
      }

      else if (text[i] != pattern && i == text.length - 1)
      {
        temp += text[i];
        result.push(temp);
      } 

      else {
        result.push(temp);
        temp = '';
      }
  }
  return result
}

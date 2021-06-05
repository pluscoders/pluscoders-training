function search(text, pattern){
  var index = ''
  var j = 0
  var m = -1
  for(var i = 0; i < text.length; i++){
  var char = text[i]
  if (char == pattern[j]){
      index += char
      j++
      if (m == -1)
          m = i}
  else {
      j = 0}
  }

  if (char == undefined){
    return "ERROR: text must be a valid string!"}
     if (pattern[j] == undefined){
    return "ERROR: pattern is undefined."}

  if (index == pattern)
  return m
  else {
  return -1}
}

search(text, pattern)
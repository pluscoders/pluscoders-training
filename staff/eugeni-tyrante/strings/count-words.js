function countWords(text) {
  var arr = []
  var res = ''
  var count = 0
  for(var i = 0; i < text.length; i++) {
      res += text[i]
      
      if(text[i] == ' ') {
          arr[count] = res
          count++
          res = ''
      }
      if(i == text.length - 1) {
           arr[count] = res
           count++
      }
  }
return count
}

countWords('que pasa bro')
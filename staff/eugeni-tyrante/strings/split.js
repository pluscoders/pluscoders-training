function split(text, pattern) {
  var arr = []
  var pre = ''
  var ant = ''  
  var j = 0
  var count = 0
  
  for(var i = 0; i < text.length; i++) {
      if (pattern == '') {
          arr[count] = text[i]
          count++
      }
      else {
          if (text[i] == pattern[j]) {
              ant += text[i]
          if (ant[j] != pattern[j]) {
                 pre += ant
          }
              if(ant == pattern) {
                 arr[count] = pre
                 ant = ''
                 pre = ''
                 count++
              } else {
                 j++
              }
              if(j == pattern.length)
                 j = 0
          } else {
            pre += ant
            pre += text[i]
            ant = ''
            j = 0
          }
          if(i == text.length - 1){
                 arr[count] = pre
          }
      }
  }    
  return arr
  }

split('hello, world!', 'o')
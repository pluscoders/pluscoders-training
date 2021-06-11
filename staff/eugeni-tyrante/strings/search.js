function search(text, pattern) {
  var index = ''
  var j = 0
  var m = -1
  
  for(var i = 0; i < text.length; i++) {
      var char = text[i]

      if (char == pattern[j]) {
          index += char
          j++
          if (m == -1)
              m = i
          if (index == pattern)
                i = text.length
      } else {
        index = ''  
        j = 0
        m = -1
      }
  }

  if (index == pattern)
      return m
  else {
      return -1
  }
}

search("He W o W o W o o W oWo", "Wo")
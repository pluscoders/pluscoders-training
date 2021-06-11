function search(text, pattern) {
    var j = 0
    var m = -1
    
    for(var i = 0; i < text.length; i++) {
  
        if (text[i] == pattern[j]) {
            j++
            if (m == -1)
                m = i
            if (j == pattern.length)
                return m
        } else {
          j = 0
          m = -1
        }
    }
    return m
    }
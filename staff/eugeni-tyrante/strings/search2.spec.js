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

// 1

var spec = 'text "Hello, World!" and pattern "World" should return 7'

var found = search("Hello, World!", "World")

if(found === 7)
    console.log(spec)
else
    console.error(spec)

// 2

var spec = 'text "Hello, World!" and pattern "Hola" should return -1'

var found = search("Hello, World!", "Hola")

if(found=== -1)
    console.log(spec)
else
    console.error(spec)

// 3

var spec = 'text "123🅰️🅱️" and pattern "🅰️" should return 3'

var found = search("123🅰️🅱️", "🅰️")

if(found=== 3)
    console.log(spec)
else
    console.error(spec)
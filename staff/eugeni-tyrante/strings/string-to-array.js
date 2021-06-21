var arr = []
var count = 0
function stringToArray(text) {
    for (var i = 0; i < text.length; i++) {
        arr[i] = text[i]
  }
return arr
}

stringToArray('Hello World')
var countCharacters = function(text) {
    var count = 0

    for (var i = 0; i < text.length; i++) {
        var c = text[i]

        if (c !== ' ')
            count++
    }

    return count
}

// tests

console.log(countCharacters('hola mundo'))
// 9

console.log(countCharacters('ciao mondo'))
// 9

console.log(countCharacters('hello world'))
// 10

console.log(countCharacters('hola mon'))
  // 7

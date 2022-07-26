var numerify = function(text) {
    /*
    . text -> 'hola'
    . result -> ''
    . char -> 'h'
    . char === 'a'? yes -> result = result + '4'
    . char === 'e'? yes -> result = result + '3'
    . char === 'i'? yes -> result = result + '1'
    . char === 'o'? yes -> result = result + '0'
    . else -> result = result + char // 'h'
    . char -> 'o'
    . char === 'a'? yes -> result = result + '4'
    . char === 'e'? yes -> result = result + '3'
    . char === 'i'? yes -> result = result + '1'
    . char === 'o'? yes -> result = result + '0' // 'h0'
    . char -> 'l'
    . char === 'a'? yes -> result = result + '4'
    . char === 'e'? yes -> result = result + '3'
    . char === 'i'? yes -> result = result + '1'
    . char === 'o'? yes -> result = result + '0'
    . else -> result = result + char // 'h0l'
    . char -> 'a'
    . char === 'a'? yes -> result = result + '4' // 'h0l4'
    . return result
    */ 

    var result = ''

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if(char === 'a') result = result + '4'
        else if(char === 'e') result = result + '3'
        else if(char === 'i') result = result + '1'
        else if(char === 'o') result = result + '0'
        else result = result + char
    }

    return result
}

// tests

console.log(numerify('hola mundo'))
// h0l4 mund0

console.log(numerify('murcielago'))
// murc13l4g0

console.log(numerify('i love coding'))
// 1 l0v3 c0d1ng
function split(text, pattern) {
    if (typeof text !== 'string') throw new TypeError(text + ' is not a string')

    pattern = pattern.toString()

    var result = []
    var part = ''
    var j = 0

    for (var i = 0; i < text.length; i++) {
        var char = text[i]

        if (char === pattern[j]) {
            j++

            if (j === pattern.length) {
                result[result.length] = part
                
                part = ''
                
                j = 0
            }
        } else {
            part += char
            
            if (char !== pattern[j - 1])
                j = 0
        }
        
        if (i === text.length - 1) {
            result[result.length] = part
        }
    }

    return result
}
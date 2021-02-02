// Constructor function

function MutableString(string) {
    for (var i = 0; i < string.length; i++)
        this[i] = string[i]
    
    this.length = string.length
}

// var ms = new MutableString('   Hola, Mundo  !  ')


// ------------------------------------------------------------------------------ TRIM prototype

MutableString.prototype.trim = function() {
    var from = 0
    var to = this.length

    for (var i = 0; i < this.length; i++)
        if (this[i] === ' ') from++
        else break
    for (var i = this.length - 1; i > -1; i--)
        if (this[i] === ' ') to--
        else break

    var result = ''

    for (var i = from; i < to; i++) result += this[i]

    return result
}

// ms.trim()


// ------------------------------------------------------------------------------ CHARAT prototype

MutableString.prototype.charAt = function(i) {
    var result = ''
    if (i < this.length) result = this[i]

    return result
}

// ms.charAt(3)


// ------------------------------------------------------------------------------ STARTSWITH prototype

MutableString.prototype.starsWith = function(text, from) { 
    var letter = 0
    var result = false
    if (!from) var from = 0

    for (var i = from; i < this.length; i++)
        if (this[i] === text[letter])
            letter++
        else break

    if (letter === text.length)
        result = true

    return result
}

// ms.starsWith('Hola', 3)


// ------------------------------------------------------------------------------ ENDSWITH prototype

MutableString.prototype.endsWith = function(text, from) {
    var letter = 0
    var result = false
    if (!from) var from = this.length
    from -= text.length

    for (var i = from; i < this.length; i++)
        if (this[i] === text[letter])
            letter++
        else break

    if (letter === text.length)
        result = true

    return result
}

// ms.endsWith('o  !', 17)


// ------------------------------------------------------------------------------ SLICE prototype

MutableString.prototype.slice = function(from, to) {
    var result = ''
    if (!to || to === -1) var to = this.length

    for (var i = from; i < to; i++)
        result += this[i]

    return result
}

// ms.slice(3, 6)
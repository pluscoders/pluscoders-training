function stringToArray(text) {
    var arrayString = []
    for(var i = 0; i < text.length; i++) {
        arrayString[i] = text.charAt(i)
    }
    return arrayString
}
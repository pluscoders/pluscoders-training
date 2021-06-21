function countWords(text) {
    var arr = []
    var res = ''
    var count = 0

    for (var i = 0; i < text.length; i++) {
        if (text[i] != '.' && text[i] != ',' && text[i] != '!' && text[i] != '?' && text[i] != ' ') {
            res += text[i]
        }

        if (text[i] == ' ' && res != '') {
            arr[count] = res
            count++
            res = ''
        }

        if (i == text.length - 1) {
            arr[count] = res
            count++
        }
    }

    return count
}
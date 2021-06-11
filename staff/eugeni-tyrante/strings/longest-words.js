function longestWords(text) {
    var arr = []
    var res = ''
    var ref = 0
    var count = 0
    for (var i = 0; i < text.length; i++) {

        if (text[i] != ' ' && text[i] != ',' && text[i] != '.' && text[i] != '!' && text[i] != '?' && text[i] != ':' && text[i] != ')') {
            res += text[i]
        }
        else {
            if (res.length > ref) {
                arr = []
                count = 0
                arr[count] = res
                count++
                ref = res.length
                res = ''
            }
            else if (ref == res.length) {
                arr[count] = res
                count++
                res = ''
            }
            else {
                res = ''
            }
        }
        if (i == text.length - 1) {
            if (res != '') {
                arr[count] = res
            }
        }
    }
    return arr
}

longestWords("Hello, Hello, cagarruta!")
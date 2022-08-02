/*
*/
function every(array, callback) {
    var final = []

    for (var i = 0; i < array.length; i++) {
        var result = callback(array[i])

        if (result === false) {
            return false
        } else { final[i] = array[i] }
    }

    if (final.length === array.length)
        return true
}
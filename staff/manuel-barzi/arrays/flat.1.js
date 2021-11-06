function flat(array) {
    var flatted = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (element instanceof Array) {
            for (var j = 0; j < element.length; j++) {
                var element2 = element[j]

                flatted[flatted.length] = element2
            }
        } else 
            flatted[flatted.length] = element
    }

    return flatted
}
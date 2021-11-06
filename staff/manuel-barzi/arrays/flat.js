function flat(array, depth) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    if (depth === undefined) depth = 1
    
    var flatted = []

    function iterate(array, nest) {
        for (var i = 0; i < array.length; i++) {
            var element = array[i]

            if (element instanceof Array && nest < depth) {
                iterate(element, nest + 1)
            } else 
                flatted[flatted.length] = element
        }
    }

    iterate(array, 0)

    return flatted
}
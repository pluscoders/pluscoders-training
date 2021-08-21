/**
 * TODO ...
 * 
 * @param {Array} array - The array.
 */
function concat(array, array2) { // WARN use arguments to support n input arrays!
    // TODO validate array

    var array3 = [...array, ...array2] // TODO re-do it without spread operator

    return array3
}


// las pruebas de MANU
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2)
(6) [1, 2, 3, 4, 5, 6]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat()
(3) [1, 2, 3]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(true)
(4) [1, 2, 3, true]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(true, false)
(5) [1, 2, 3, true, false]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2, [7, 8, 9], true, false, 'hola mundo')
(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo"]
var a1 = [1, 2, 3], a2 = [4, 5, 6]

a1.concat(a2, [7, 8, 9], [true, false, 'hola mundo'], [11, 12])
(14) [1, 2, 3, 4, 5, 6, 7, 8, 9, true, false, "hola mundo", 11, 12]

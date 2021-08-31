/**
 * Takes an original array and reverses it putting the first element in the last position
 *
 * @param array {Array} - The array to reverse its elements
 *
 * @returns {Array} - The elements in the array provided in the oposite order
 * @returns {Array} - Empty array When the provided array is empty
 *
 */
function reverse(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')

    var temp = []

    for (var i = array.length - 1; i > -1; i--) {
        temp[temp.length] = array[i]
    }

    for (var i = 0; i < temp.length; i++) {
        array[i] = temp[i]
    }

    // TODO optimise this function in a second version that just runs one for loop and it does not require to do it up the end (but the half)

    return array
}
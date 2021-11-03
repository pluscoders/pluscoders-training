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

    for (var i = 0; i < array.length / 2; i++) {

        var val1 = array(i)
        var val2 = array(array.length - i - 1)

        if (array[i] !== array[array.length - i - 1]) {
            array(i) = val2
            array(array.length - i - 1) = val1
        }
        
    }

    return array
}
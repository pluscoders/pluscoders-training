/**
 * Returns a new array with the elements from an original array indexed between the start and end value and introduces a new element to the original array
 *
 * @param {Number} start  - The array position where the splice will start and 
 * @param {Number} [start]  - This value indicates where will start the function
 * @param {Number} [end] - This value indicates where will end the function
 *
 * @returns {Array} - A new array with the elements between start and end or undefined if the values doesn't match
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function splice(start, deleteCount, element) {
    var removed = []
    var count = array.length

    if (start > array.length) {
        start = array.length
    }

    if (start < 0) {
        start = array.length + start
    }

    if (array.length + start === 0) {
        start = 0
    }

    if (deleteCount > array.length - start) {
        deleteCount = array.length
    }

    for (var i = start; i < array.length + 1; i++) {
        if (deleteCount > 0 && i === start) {
            removed[removed.length] = array[i]
            array[i] = element
        }

        if (deleteCount > 0 && i > start && i < array.length && removed.length < deleteCount) {
            removed[removed.length] = array[i]
            array[i] = array[i + deleteCount - 1]
        }

        if (deleteCount > 0 && i === array.length) {
            array.length = array.length - deleteCount + 1
        }

        if (deleteCount < 1 && i === start) {
            removed[removed.length] = array[i]
        }

        if (deleteCount < 1 && i > start && count > start) {
            array[count] = array[count - 1]
            count--
        }

        if (deleteCount < 1 && i > start && count === start) {
            array[start] = element
        }
    }

    return removed
}
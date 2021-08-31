/**
 * Returns a resulting value of the callback's interaction with every element in the provided array
 *
 * @param {Function} callback  - The function which will interact with the elements from the array 
 * @param {Number} [initialValue]  - This value indicates an starting value to interact with all the original array's elements
 *
 * @returns {Number} - A resulting value of the callback's interactions
 *
 * @throws {TypeError} - When any of the input parameters does not match the expected type
 */
function reduce(callback, initialValue) {
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    if (initialValue === undefined) {
        initialValue = array[0]
        var accumulator = array[0]

        for (var i = 1; i < array.length; i++) {
            var currentValue = array[i]
            accumulator = callback(accumulator, currentValue, i, array)
        }

        return accumulator

    }

    else {
        accumulator = initialValue

        for (var i = 0; i < array.length; i++) {
            currentValue = array[i]
            accumulator = callback(accumulator, currentValue, i, array)
        }

        return accumulator

    }
}

function callback(accumulator, currentValue, i, array) {
    return accumulator + currentValue
}
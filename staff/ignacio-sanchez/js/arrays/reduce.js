/**
 * Walk through the array element-by-element, at each step adding th curreny array value to the resulto from
 * the previous step, until there are no more elements to add.
 * 
 * @param {Number} [initialValue] - The value indicate the starting with the array's elements.
 * @param {Function} callback - The function to execute on each element in an array.
 * 
 * @returns {value} - The value that results from running the "reducer" callback function.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
function reduce(array, callback, initialValue) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    // var accumulator

    // if (initialValue === undefined)
    //     accumulator = array[0]
    // else
    //     accumulator = initialValue

    var accumulator = initialValue === undefined? array[0] : initialValue

    for (var i = initialValue === undefined? 1 : 0; i < array.length; i++) {
        var currentValue = array[i]

        accumulator = callback(accumulator, currentValue, i, array)
    }

    return accumulator
}

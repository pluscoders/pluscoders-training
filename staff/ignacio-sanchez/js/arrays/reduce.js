/**
 * Walk through the array element-by-element, at each step adding th curreny array value to the resulto from
 * the previous step, until there are no more elements to add.
 * 
 * @param {Array} array - The array.
 * @param {function} callback - The function to execute on each element in an array.
 * 
 * @returns {value} - The value that results from running the "reducer" callback function.
 * 
 * @throws {TypeError} - If the array parameter is not array.
 */
 function reduce(array) {
    if (!Array.isArray(array)) throw new TypeError(array + ' is not a array')

    for (var i = 1; i < this.length; i++) {
        this[this.length] = this[i]
    }

    return this.length
}

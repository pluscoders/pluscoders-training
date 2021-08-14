/**
 * Repeat a text as many times the number specifies.
 * 
 * @param string {string} - The text(s) to send as parameter.
 * @param times {string} - The number of times that text repeat.
 *
 * @returns [string] - The text repeated.
 * 
 * @throws {TypeError} - If the string parameter is not string.
 * @throws {TypeError} - If the number parameter is not number.
 */
function repeat(string, times) {
    if (typeof string !== 'string') throw new TypeError(string + ' is not a string')
    if (typeof times !== 'number') throw new TypeError(times + ' is not a number')

    var repeatedString = '';

    while (times > 0) {
        repeatedString += string;

        times--;
    }
    
    return repeatedString;
}
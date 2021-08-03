/**
 * Repeat a text as many times the number specifies.
 * 
 * @param string {string} - The text(s) to send as parameter.
 * @param times {string} - The number of times that text repeat.
 *
 * @returns [string] - The text repeated.
 */
function repeat(string, times) {
    // TODO validate string is a string
    // TODO validate times is a number

    var repeatedString = '';

    while (times > 0) {
        repeatedString += string;

        times--;
    }
    
    return repeatedString;
}
/**
 * Concatenate one or more text in a only text.
 *
 * @param () {string} - The text(s) to send as parameter.
 *
 * @returns [string] - The text concatenated.
 *
 * 
 */
function concat() {
    var concatenated = '';

    for (var i = 0; i < arguments.length; i++) {

        concatenated += arguments[i]
    }

    return concatenated
}


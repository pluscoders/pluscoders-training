/**
* Reverse the characters in a text.
*
* @param text {string} - The text to reverse.
*
* @returns {string} - The reversed text.
*/
function reverse(text) {
    var result = '';

    for (var i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result;
}


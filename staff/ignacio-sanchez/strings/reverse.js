/**
* Reverse the characters in a text.
*
* @param text {string} - The text to explore.
*
* @returns {string} - The reverse text.
*
*/
function reverse(text) {
    var result = '';

    for (var i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result;
}


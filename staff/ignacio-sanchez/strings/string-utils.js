/**
 * TODO
 * 
 * @param {*} char 
 * @returns 
 */
function isVoid(char) {
    return isSpace(char) || isTab(char) || isNewLine(char)
}

function isNotVoid(char) {
    return !isSpace(char) && !isTab(char) && !isNewLine(char)
}

function isUpperCase(char) {
    return /[A-Z0-9]/.test(char)
}

function isLowerCase(char) {
    return /[a-z0-9]/.test(char)
}

function isSpace(char) {
    return char === ' '
}

function isTab(char) {
    return char === '\t'
}

function isNewLine(char) {
    return char === '\n'
}
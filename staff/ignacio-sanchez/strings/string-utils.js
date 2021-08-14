/**
 * TODO
 * 
 * @param {string} isVoid - Void all the spaces, tabs and line breaks.
 *
 * @param {string} isNotVoid - Consider all spaces, tabs, and line breaks.
 *
 * @param {string} isUpperCase - Verify that all characters are uppercase.
 *
 * @param {string} isLowerCase - Verify that all characters are lowercase
 *
 * @param {string} isSpace - Verify that there is a space.
 *
 * @param {string} isTab - Verify that there is a Tab.
 *
 * @param {string} isNewLine - Verify that there is new line.
 *
 * @return {string} A string param
 */
function isVoid(char) {
    return isSpace(char) || isTab(char) || isNewLine(char)
}

/**
 * Checks a character is not a space, tabulation or a new line.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isNotVoid(char) {
    return !isSpace(char) && !isTab(char) && !isNewLine(char)
}

/**
 * 
 * @param {*} char 
 * @returns 
 */
function isUpperCase(char) {
    return /[A-Z0-9]/.test(char)
}

/**
 * 
 * @param {*} char 
 * @returns 
 */
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

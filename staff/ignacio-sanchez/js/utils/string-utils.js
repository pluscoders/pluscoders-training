/**
 * Checks a character is a space, tabulation or a new line.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
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
 * Checks a character is uppercase.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isUpperCase(char) {
    return /[A-Z0-9]/.test(char)
}

/**
 * Checks a character is lowercase.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isLowerCase(char) {
    return /[a-z0-9]/.test(char)
}
/**
 * Checks a character is a space.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isSpace(char) {
    return char === ' '
}
/**
 * Checks a character is a Tab.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isTab(char) {
    return char === '\t'
}
/**
 * Checks a character is a new line.
 * 
 * @param {string} char The character to evaluate.
 * 
 * @returns {boolean} 
 */
function isNewLine(char) {
    return char === '\n'
}

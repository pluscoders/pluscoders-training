/**
 * Asserts a condition is true, otherwise it shows an error (with the assertion message).
 * 
 * @param {boolean} condition The condition to evaluate.
 * @param {string} message The assertion message.
 */
function assert(condition, message) {
    if (!condition) console.error('Assertion failed: ' + message)
}
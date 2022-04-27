function validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) throw new TypeError('num is not a number')
}

function validateString(text) {
    if (typeof text !== 'string') throw new TypeError('str is not a string')
}

export {
    validateNumber,
    validateString
}
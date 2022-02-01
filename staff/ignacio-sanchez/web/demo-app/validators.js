function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (id.length < 10) throw new FormatError('id has less than 10 characters')
}
function validateFirstName(firstName) {
    if (typeof firstName !== 'string') throw new TypeError('first name is not a string')
    if (/\d+/.test(firstName)) throw new FormatError('first name contains numbers')
    if (firstName.length < 2) throw new FormatError('first name has less than 2 characters')
}

function validateLastName(lastName) {
    if (typeof lastName !== 'string') throw new TypeError('last name is not a string')
    if (/\d+/.test(lastName)) throw new FormatError('last name contains numbers')
    if (lastName.length < 2) throw new FormatError('last name has less than 2 characters')
}

function validateCity(city) {
    if (typeof city !== 'string') throw new TypeError('city is not a string')
    if (/\d+/.test(city)) throw new FormatError('city contains numbers')
    if (city.length < 2) throw new FormatError('city has less than 2 characters')
}

function validateCountry(country) {
    if (typeof country !== 'string') throw new TypeError('country is not a string')
    if (/\d+/.test(country)) throw new FormatError('country contains numbers')
    if (country.length < 2) throw new FormatError('country has less than 2 characters')
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (!isNaN(email)) throw new FormatError('email contains numbers')
    if (email.length < 6) throw new FormatError('email has less than 6 characters')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new FormatError('password has less than 8 characters')
}

function validateOldPassword(oldPassword) {
    if (typeof oldPassword !== 'string') throw new TypeError('old password is not a string')
    if (oldPassword.length < 8) throw new FormatError('old password has less than 8 characters')
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not function')
}

function validateToken (token) {
    if (typeof token !== 'string') throw new TypeError( 'token is not a string')

    const parts = token.split('.')

    const [header, payload, signature] = parts  

    if (!header) throw new Error ('header is not present in token')
    if (!header.trim()) throw new FormatError ('header is empty or blank')
    

    if (!payload) throw new Error ('payload is not present in token')
    if (!payload.trim()) throw new FormatError ('payload is empty or blank')

    if (!signature) throw new Error ('signature is not present in token')
    if (!signature.trim()) throw new FormatError ('signature is empty or blank')
}

function validateQuery(query) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (query.length < 3) throw new FormatError('query has less than 3 characters')
}
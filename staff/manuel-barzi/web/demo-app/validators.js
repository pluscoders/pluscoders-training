function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (id.length !== 10) throw new FormatError('id does not have 10 characters')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (/\d+/.test(name)) throw new FormatError('name contains numbers')
    if (name.length < 2) throw new Error('name has less than 2 characters')
}

function validateCity(city) {
    if (typeof city !== 'string') throw new TypeError('city is not a string')
    if (/\d+/.test(city)) throw new Error('city contains numbers')
    if (city.length < 2) throw new Error('city has less than 2 characters')
}

function validateCountry(country) {
    if (typeof country !== 'string') throw new TypeError('country is not a string')
    if (/\d+/.test(country)) throw new Error('country contains numbers')
    if (country.length < 2) throw new Error('country has less than 2 characters')
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username is not a string')
    if (/\d+/.test(username)) throw new Error('username contains numbers')
    if (username.length < 6) throw new Error('username has less than 6 characters')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new Error('password has less than 8 characters')
}

function validateOldPassword(password) {
    if (typeof password !== 'string') throw new TypeError('old password is not a string')
    if (password.length < 8) throw new Error('old password has less than 8 characters')
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')

    const parts = token.split('.')

    const [header, payload, signature] = parts

    if (!header) throw new Error('header not present in token')
    if (!header.trim()) throw new Error('header is empty or blank')

    if (!payload) throw new Error('payload not present in token')
    if (!payload.trim()) throw new Error('payload is empty or blank')

    if (!signature) throw new Error('signature not present in token')
    if (!signature.trim()) throw new Error('signature is empty or blank')
}
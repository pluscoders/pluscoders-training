function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (id.length !== 10) throw new Error('id does not have 10 characters')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (/\d+/.test(name)) throw new Error('name contains numbers')
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

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}
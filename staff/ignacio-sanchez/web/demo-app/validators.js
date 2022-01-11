function validateId(id) {
    if (typeof id != 'string') throw new TypeError('id is not a string')
    if (id.length < 10) throw new Error('id has less than 10 characters')
}
function validateFirstName(firstName) {
    if (typeof firstName != 'string') throw new TypeError('first name is not a string')
    if (/\d+/.test(firstName)) throw new Error('first name contains numbers')
    if (firstName.length < 2) throw new Error('first name has less than 2 characters')
}

function validateLastName(lastName) {
    if (typeof lastName != 'string') throw new TypeError('last name is not a string')
    if (/\d+/.test(lastName)) throw new Error('last name contains numbers')
    if (lastName.length < 2) throw new Error('last name has less than 2 characters')
}

function validateCity(city) {
    if (typeof city != 'string') throw new TypeError('city is not a string')
    if (/\d+/.test(city)) throw new Error('city contains numbers')
    if (city.length < 2) throw new Error('city has less than 2 characters')
}

function validateCountry(country) {
    if (typeof country != 'string') throw new TypeError('country is not a string')
    if (/\d+/.test(country)) throw new Error('country contains numbers')
    if (country.length < 2) throw new Error('country has less than 2 characters')
}

function validateEmail(email) {
    if (typeof email != 'string') throw new TypeError('email is not a string')
    if (!isNaN(email)) throw new Error('email contains numbers')
    if (email.length < 6) throw new Error('email has less than 6 characters')
}

function validatePassword(password) {
    if (typeof password != 'string') throw new TypeError('password is not a string')
    if (password.length < 8) throw new Error('password has less than 8 characters')
}
function validateFirstName(firstName) {
    if (typeof firstName != 'string') throw new Error('first name is not a string')
    if (/\d+/.test(firstName)) throw new Error('first name contains numbers')
    if (firstName.length < 2) throw new Error('first name has less than 2 characters')
}

function validateLastName(lastName) {
    if (typeof lastName != 'string') throw new Error('last name is not a string')
    if (/\d+/.test(lastName)) throw new Error('last name contains numbers')
    if (lastName.length < 2) throw new Error('last name has less than 2 characters')
}

function validateCity(city) {
    if (!isNaN(city)) throw new Error('city cannot be a number')
    if (city.length < 2)throw new Error('city has less than 2 characters')
}

function validateCountry(country) {
    if (!isNaN(country)) throw new Error('country cannot be a number')
    if (country.length < 2) throw new Error('country has less than 2 characters')
}
    
function validateEmail(email) {
    if (!isNaN(email)) throw new Error('email cannot be a number')
    if (email.length < 6) throw new Error('email has less than 6 characters')
}

function validatePassword(password) {
if (password.length < 8) throw new Error('password has less than 8 characters')
}
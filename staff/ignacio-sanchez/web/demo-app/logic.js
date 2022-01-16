// users

function registerUser(firstname, lastName, city, country, email, password, callback) {
    validateFirstName(firstname)
    validateLastName(lastName)
    validateCity(city)
    validateCountry(country)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const status = xhr.status

        if (status == 201) {
            callback(null)
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { firstname, lastName, city, country, username: email, password }

    const json = JSON.stringify(data)

    xhr.send(json)
}

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)

    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const status = xhr.status

        if (status == 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const token = data.token

            callback(null, token)
        } else if (status >= 400 && status < 500) {
            callback(new Error('client error'))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { username: email, password }

    const json = JSON.stringify(data)

    xhr.send(json)
}
function retriveUser(id) {
    validateId(id)

    const user = users.find(function (user) {
        return user.id === id
    })

    if (!user) throw new Error('user not found')

    return {
        firstname: user.firstname,
        lastname: user.lastname,
        city: user.city,
        country: user.country,
        email: user.email,
    }
}

// TODO function updateUser
/*
- validate properties (firstname, lastname, city, ....) (stand-by)
- find user by e-mail in users
- update properties in user
*/

function updateUser(id, firstname, lastName, city, country, email, password) {
    validateId(id)
    validateFirstName(firstname)
    validateLastName(lastName)
    validateCity(city)
    validateCountry(country)
    validateEmail(email)
    validatePassword(password)

    const user = users.find(function (user) {
        return user.id === id
    })

    if (!user) throw new Error('user not found')

    if (email !== user.email) {
        const exists = users.some(function (user) {
            return user.email === email
        })

        if (exists) throw new Error('email already exists')
    }

    user.firstname = firstname
    user.lastname = lastName
    user.city = city
    user.country = country
    user.email = email
    user.password = password
}

// vehicles

function searchVehicles(query, model) {
    const filtered = vehicles.filter(function (vehicle) {
        return vehicle.name.includes(query) && vehicle.name.includes(model)
    })

    return filtered
}
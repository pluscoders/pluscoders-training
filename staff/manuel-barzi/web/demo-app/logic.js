function registerUser(name, city, country, username, password, callback) {
    validateName(name)
    validateCity(city)
    validateCountry(country)
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const status = xhr.status

        if (status === 201) {
            callback(null)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { name, city, country, username, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const status = xhr.status

        if (status === 200) {
            const json = xhr.responseText

            const payload = JSON.parse(json)

            const token = payload.token

            callback(null, token)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { username, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

function retrieveUser(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            callback(null, user)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))
        } else if (status >= 500) {
            callback(new Error('server error'))
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

function updateUser(token, name, city, country, username, callback) {
    validateToken(token)
    validateName(name)
    validateCity(city)
    validateCountry(country)
    validateUsername(username)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const { status } = xhr

        if (status === 204) {
            callback(null)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { name, city, country, username }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

function updateUserPassword(token, oldPassword, password, callback) {
    validateToken(token)
    validateOldPassword(oldPassword)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
        const { status } = xhr

        if (status === 204) {
            callback(null)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new Error(error))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { oldPassword, password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

function unregisterUser(token, password, callback) {
    // TODO implement me
}

function searchVehicles(query) {
    const filtered = vehicles.filter(function (vehicle) {
        return vehicle.name.includes(query)
    })

    return filtered
}
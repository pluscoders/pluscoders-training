
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
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { firstname, lastName, city, country, username: email, password }

    const json = JSON.stringify(payload)

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

            const payload = JSON.parse(json)

            const token = payload.token

            callback(null, token)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { username: email, password }

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

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}


function updateUser(token, firstname, lastName, city, country, email, callback) {
    validateToken(token)
    validateFirstName(firstname)
    validateLastName(lastName)
    validateCity(city)
    validateCountry(country)
    validateEmail(email)
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

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    })

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { firstname, lastName, country, username: email }

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
    validateToken(token)
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

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { password }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

function searchVehicles(brand, model, callback) {
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr
        if (status === 200) {
            const { responseText: json } = xhr

            const vehicles = JSON.parse(json)

            callback(null, vehicles)
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?maker=${brand}&q=${model}`)

    xhr.send()

}

function retrieveVehicle(id, callback) {
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr
        if (status === 200) {
            const { responseText : json} = xhr

            const vehicles = JSON.parse(json)

            callback(null, vehicles)

        } else if (status >= 400 && status < 500) {
            const { responseText : json} = xhr 

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

    xhr.send()
}
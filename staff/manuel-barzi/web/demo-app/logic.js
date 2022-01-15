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
            callback(new Error('client error'))
        } else {
            callback(new Error('server error'))
        }
    })

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const data = { name, city, country, username, password }

    const json = JSON.stringify(data)

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

    const data = { username, password }

    const json = JSON.stringify(data)

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
            callback(new Error('client error'))
        } else if (status >= 500) {
            callback(new Error('server error'))
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

function updateUser(id, name, city, country, username, password) {
    validateId(id)
    validateName(name)
    validateCity(city)
    validateCountry(country)
    validateUsername(username)
    validatePassword(password)

    const user = users.find(function (user) {
        return user.id === id
    })

    if (!user) throw new Error('user already exists')

    if (username !== user.username) {
        const exists = users.some(function(user) {
            return user.username === username
        })

        if (exists) throw new Error('username already exists')
    }

    user.name = name
    user.city = city
    user.country = country
    user.username = username
    user.password = password
}

function searchVehicles(query) {
    const filtered = vehicles.filter(function (vehicle) {
        return vehicle.name.includes(query)
    })

    return filtered
}
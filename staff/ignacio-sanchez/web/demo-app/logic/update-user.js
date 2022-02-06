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
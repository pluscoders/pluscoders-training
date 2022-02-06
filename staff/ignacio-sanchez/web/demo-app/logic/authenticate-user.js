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
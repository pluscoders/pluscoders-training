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
function registerUser(fullname, email, password, repassword, callback) {
    if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a string')
    if (!fullname.trim().length) throw new Error('fullname is empty or blank')

    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not a valid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof repassword !== 'string') throw new TypeError(repassword + ' is not a string')
    if (!repassword.trim().length) throw new Error('password repeat is empty or blank')

    if (password !== repassword) throw new Error('passwords do not match')

    fetch(
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{ "fullname": "' + fullname + '", "username" : "' + email + '", "password": "' + password + '" }'
        }
    )
        .then(function (response) {
            if (response.status === 201)
                callback(null)
            else
                return response.json()
                    .then(function (response) {
                        var error = response.error

                        callback(new Error(error))
                    })
        })
}

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not a valid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')

    fetch(
        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{ "username" : "' + email + '", "password": "' + password + '" }'
        }
    )
        .then(function (response) {
            if (response.status === 200)
                return response.json()
                    .then(function (response) {
                        var token = response.token

                        callback(null, token)
                    })
            else
                return response.json()
                    .then(function (response) {
                        var error = response.error

                        callback(new Error(error))
                    })
        })
}
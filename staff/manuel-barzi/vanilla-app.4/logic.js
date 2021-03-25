function registerUser(fullname, email, password, repassword) {
    if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a string')
    if (!fullname.trim().length) throw new Error('fullname is empty or blank')

    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not a valid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof repassword !== 'string') throw new TypeError(repassword + ' is not a string')
    if (!repassword.trim().length) throw new Error('password repeat is empty or blank')

    if (password !== repassword) throw new Error('passwords do not match')

    var exists = users.some(function (user) { return user.email === email })

    if (exists) throw new Error('user already exists')

    var user = { fullname: fullname, email: email, password: password }

    users.push(user)
}

function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not a valid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (!password.trim().length) throw new Error('password is empty or blank')

    var exists = users.some(function (user) { return user.email === email && user.password === password })

    if (!exists) throw new Error('wrong credentials')
}
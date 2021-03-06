function registerUser(email, password) {
    if(typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if(typeof password !== 'string') throw new TypeError(password + ' is not a string')

    if (!email.includes('@') || !email.includes('.')) throw new Error(email + ' is not an e-mail')

    // TODO validate parts of the e-mail => ???@???.???

    var exists = users.some(function (user) { return user.email === email })

    if (exists) throw new Error('user already exists')

    var user = { email: email, password: password }

    users.push(user)
}
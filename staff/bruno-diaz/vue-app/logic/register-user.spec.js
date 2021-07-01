describe('registerUser', () => {
    it('should succeed on new user', async () => {
        const originData = {}
        originData.length = users.length

        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password')

        await registerUser(fullname, email, password)

        let response = await fetch("https://b00tc4mp.herokuapp.com/api/v2/users/auth", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: `{ "username": "${email}", "password": "${password}" }`,
        })

        const { token } = await response.json()

        response = await fetch("https://b00tc4mp.herokuapp.com/api/v2/users", {
            headers: { "Authorization": `Bearer ${token}` }
        })

        const { fullname: fullname2, username: email2 } = await response.json()

        expect(fullname2).toEqual(fullname)
        expect(email2).toEqual(email)
    })

    fit('should fail when user already exists', async () => {
        const originData = {}
        originData.length = users.length

        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password')

        await fetch("https://b00tc4mp.herokuapp.com/api/v2/users/", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: `{ "fullname": "${fullname}", "username": "${email}", "password": "${password}" }`,
        })

        let _error

        try {
            await registerUser(fullname, email, password)
        } catch(error) {
            _error = error
        }

        expect(_error).toBeDefined()
        expect(_error.message).toEqual(`user with username "${email}" already exists`)
    })

    it('should fail on undefined fullname', function () {
        const fullname = undefined
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(TypeError, fullname + ' is not a string')
    })

    it('should fail on undefined email', function () {
        const fullname = getRandomString('fullname')
        const email = undefined
        const password = getRandomString('password')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(TypeError, email + ' is not a string')
    })

    it('should fail on invalid email instance: no @', function () {
        const fullname = getRandomString('fullname')
        const email = getRandomString() + getRandomString() + '.com'
        const password = getRandomString('password')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, email + ' is not an e-mail')
    })

    it('should fail on invalid email instance: wrong username', function () {
        const fullname = getRandomString('uppercase')
        const email = '@' + getRandomString() + '.com'
        const password = getRandomString('numeric')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, email + ' is not an e-mail')
    })

    it('should fail on invalid email instance: no organitation domain', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + '.com'
        const password = getRandomString('password')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, email + ' is not an e-mail')
    })

    it('should fail on invalid email instance: no extention domain', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString()
        const password = getRandomString('password')

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, email + ' is not an e-mail')
    })

    it('should fail on invalid password instance: no password', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = undefined

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(TypeError, password + ' is not a string')
    })

    it('should fail on invalid password instance: no lowcases character', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        let password = getRandomString('password')
        password = password.slice(password.length - 3, password.length) + password.slice(password.length - 3, password.length)

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    it('should fail on invalid password instance: no uppercase character', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password').toLocaleLowerCase()

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    it('should fail on invalid password instance: no number', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        let password = getRandomString('password')
        password = password.slice(0, password.length - 2) + password.slice(password.length - 1, password.length)

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    it('should fail on invalid password instance: no symbol', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        let password = getRandomString('password')
        password = password.slice(0, password.length - 1)

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    it('should fail on invalid password instance: less than 8 characteres', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        let password = getRandomString('password')
        password = password.slice(password.length - 6, password.length)

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    it('should fail on invalid password instance: more than 13 characteres', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        let password = getRandomString('password')
        password += password + password

        // APPLY & TEST

        expect(function () {
            registerUser(fullname, email, password)
        }).toThrowError(Error, 'The password have to contain between 8 to 13 characters which at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
    })

    xit('should succeed width repeat fullname and password', () => {
        const originData = {}
        originData.length = users.length

        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password')

        const fullnameRepeat = fullname
        const email2 = getRandomString() + '@' + getRandomString() + '.com'
        const passwordRepeat = password

        // APPLY

        registerUser(fullname, email, password)
        registerUser(fullnameRepeat, email2, passwordRepeat)

        // TEST

        expect(users.length).toEqual(originData.length + 2)

        const user = users.find(function (user) {
            return user.fullname === fullnameRepeat && user.email === email2 && user.password === passwordRepeat
        })

        expect(fullnameRepeat).toEqual(user.fullname)
        expect(email2).toEqual(user.email)
        expect(passwordRepeat).toEqual(user.password)
    })

    xit('should fail with repeat email', function () {
        const fullname = getRandomString()
        const email = getRandomString() + '@' + getRandomString() + '.com'
        const password = getRandomString('password')

        const fullname2 = getRandomString()
        const emailRepeat = email
        const password2 = getRandomString('password')

        // APPLY

        registerUser(fullname, email, password)

        // APPLY & TEST

        expect(function () {
            registerUser(fullname2, emailRepeat, password2)
        }).toThrowError(Error, 'user already exists')
    })
})
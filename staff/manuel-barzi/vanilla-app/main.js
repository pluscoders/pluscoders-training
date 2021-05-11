var register = createRegister(function (fullname, email, password, repassword) {
    try {
        registerUser(fullname, email, password, repassword)

        register.style.display = 'none'
        login.style.display = 'block'
    } catch(error) {
        var feedback = register.querySelector('span')
        feedback.innerText = error.message
        feedback.style.display = 'block'
    }
}, function() {
    register.style.display = 'none'
    login.style.display = 'block'
})

document.body.append(register)
register.style.display = 'none'

var welcome = createWelcome()
welcome.style.display = 'none'

document.body.append(welcome)

var login = createLogin(function (email, password) {
    try {
        authenticateUser(email, password)

        login.style.display = 'none'
        welcome.style.display = 'block'
    } catch(error) {
        var feedback = login.querySelector('span')
        feedback.innerText = error.message
        feedback.style.display = 'block'
    }
}, function() {
    login.style.display = 'none'
    register.style.display = 'block'
})

document.body.append(login)



function createRegister(onRegister, onGoToLogin) {
    var form = document.createElement('form')

    var fullnameLabel = document.createElement('label')
    fullnameLabel.innerText = 'Fullname'
    fullnameLabel.for = 'fullname'

    var fullname = document.createElement('input')
    fullname.type = 'text'
    fullname.name = 'fullname'
    fullname.id = 'fullname'

    fullnameLabel.append(fullname)

    var emailLabel = document.createElement('label')
    emailLabel.innerText = 'E-mail'
    emailLabel.for = 'email'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = 'email'
    email.id = 'email'

    emailLabel.append(email)

    var passwordLabel = document.createElement('label')
    passwordLabel.innerText = 'Password'
    passwordLabel.for = 'password'

    var password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.id = 'password'

    passwordLabel.append(password)

    var repasswordLabel = document.createElement('label')
    repasswordLabel.innerText = 'Repeat password'
    repasswordLabel.for = 'repassword'

    var repassword = document.createElement('input')
    repassword.type = 'password'
    repassword.name = 'repassword'
    repassword.id = 'repassword'

    repasswordLabel.append(repassword)

    var submit = document.createElement('button')
    submit.innerText = 'Register'

    var gotoLogin = document.createElement('a')
    gotoLogin.href=''
    gotoLogin.innerText = 'or go to Login'
    gotoLogin.onclick = function(event) {
        event.preventDefault()

        fullname.value = ''
        email.value = ''
        password.value = ''
        repassword.value = ''

        feedback.style.display = 'none'

        onGoToLogin()
    }

    var feedback = document.createElement('span')
    feedback.style.color = 'red'
    feedback.style.display = 'none'

    form.append(fullnameLabel, emailLabel, passwordLabel, repasswordLabel, submit, gotoLogin, feedback)

    form.onsubmit = function (event) {
        event.preventDefault()

        var fullname = event.target.fullname.value
        var email = event.target.email.value
        var password = event.target.password.value
        var repassword = event.target.repassword.value

        onRegister(fullname, email, password, repassword)
    }

    return form
}

function createWelcome() {
    var h1 = document.createElement('h1')

    h1.innerText = 'Welcome!'

    return h1
}

function createLogin(onLogin, onGoToRegister) {
    var form = document.createElement('form')

    var emailLabel = document.createElement('label')
    emailLabel.innerText = 'E-mail'
    emailLabel.for = 'email'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = 'email'
    email.id = 'email'

    emailLabel.append(email)

    var passwordLabel = document.createElement('label')
    passwordLabel.innerText = 'Password'
    passwordLabel.for = 'password'

    var password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.id = 'password'

    passwordLabel.append(password)

    var submit = document.createElement('button')
    submit.innerText = 'Login'

    var gotoRegister = document.createElement('a')
    gotoRegister.href = ''
    gotoRegister.innerText = 'or go to Register'
    gotoRegister.onclick = function (event) {
        event.preventDefault()

        email.value = ''
        password.value = ''

        feedback.style.display = 'none'

        onGoToRegister()
    }

    var feedback = document.createElement('span')
    feedback.style.color = 'red'
    feedback.style.display = 'none'

    form.append(emailLabel, passwordLabel, submit, gotoRegister, feedback)

    form.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        onLogin(email, password)
    }

    return form
}

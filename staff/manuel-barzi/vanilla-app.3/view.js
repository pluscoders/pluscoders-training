function createRegister(onRegister) {
    var form = document.createElement('form')

    var emailLabel = document.createElement('label')
    emailLabel.innerText = 'E-mail'
    emailLabel.for = 'email'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = 'email'
    email.id = 'email'

    var passwordLabel = document.createElement('label')
    passwordLabel.innerText = 'Password'
    passwordLabel.for = 'password'

    var password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.id = 'password'

    var submit = document.createElement('button')
    submit.innerText = 'Register'

    var feedback = document.createElement('span')
    feedback.style.color = 'red'
    feedback.style.display = 'none'

    emailLabel.append(email)
    passwordLabel.append(password)

    form.append(emailLabel)
    form.append(passwordLabel)
    form.append(submit)
    form.append(feedback)

    form.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        onRegister(email, password)
    }

    return form
}

function createWelcome() {
    var h1 = document.createElement('h1')

    h1.innerText = 'Welcome!'

    return h1
}

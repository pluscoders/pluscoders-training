// data

const users = [
    { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' }
]

// login page

var loginPage = document.querySelector('.login-page')

var loginForm = loginPage.querySelector('form')
loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.email
    var passwordInput = loginForm.password

    var email = emailInput.value
    var password = passwordInput.value

    try {
        if (email.trim().length === 0) throw new Error('email is empty or blank')
        if (password.trim().length === 0) throw new Error('password is empty or blank')

        const user = users.find(function (user) {
            return user.email === email && user.password === password
        })

        if (user === undefined) throw new Error('wrong credentials')

        loginForm.reset()

        loginPage.classList.add('off')

        document.querySelector('.home-page__title').innerText = 'Hola ' + user.name

        homePage.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

var registerAnchor = loginPage.querySelector('a')
registerAnchor.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()
    
    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

// register page

var registerPage = document.querySelector('.register-page')

var registerForm = registerPage.querySelector('form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    var nameInput = registerForm.name
    var emailInput = registerForm.email
    var passwordInput = registerForm.password

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    try {
        if (name.trim().length === 0) throw new Error('name is empty or blank')
        // TODO validate name has not numbers
        if (email.trim().length === 0) throw new Error('email is empty or blank')
        if (password.trim().length === 0) throw new Error('password is empty or blank')

        let user = users.find(function (user) {
            return user.email === email
        })

        if (user !== undefined) throw new Error('user already exists')

        user = {
            name: name,
            email: email,
            password: password
        }

        users.push(user)

        alert('user registered')

        registerForm.reset()

        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

var loginAnchor = registerPage.querySelector('a')
loginAnchor.onclick = function (event) {
    event.preventDefault()

    registerForm.reset()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

// home page

var homePage = document.querySelector('.home-page')

var logoutButton = homePage.querySelector('.home-page__logout-button')
logoutButton.onclick = function() {
    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

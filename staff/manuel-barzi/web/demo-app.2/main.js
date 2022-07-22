// data

var users = []

// presentation

var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginForm.username.value = ''
    loginForm.password.value = ''

    loginView.classList.add('off')

    registerView.classList.remove('off')
}

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    registerForm.name.value = ''
    registerForm.city.value = ''
    registerForm.country.value = ''
    registerForm.username.value = ''
    registerForm.password.value = ''

    registerView.classList.add('off')

    loginView.classList.remove('off')
}

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = registerForm.name.value
    var city = registerForm.city.value
    var country = registerForm.country.value
    var username = registerForm.username.value
    var password = registerForm.password.value

    if (!isNaN(name)) {
        alert('name cannot be a number')

        return
    }

    if (name.length < 2) {
        alert('name has less than 2 characters')

        return
    }

    if (!isNaN(city)) {
        alert('city cannot be a number')

        return
    }

    if (city.length < 2) {
        alert('city has less than 2 characters')

        return
    }

    if (!isNaN(country)) {
        alert('country cannot be a number')

        return
    }

    if (country.length < 2) {
        alert('country has less than 2 characters')

        return
    }

    if (!isNaN(username)) {
        alert('username cannot be a number')

        return
    }

    if (username.length < 6) {
        alert('username has less than 6 characters')

        return
    }

    if (password.length < 8) {
        alert('password has less than 8 characters')

        return
    }

    var user = {
        name: name,
        city: city,
        country: country,
        username: username,
        password: password
    }

    users.push(user)

    registerForm.name.value = ''
    registerForm.city.value = ''
    registerForm.country.value = ''
    registerForm.username.value = ''
    registerForm.password.value = ''

    registerView.classList.add('off')

    loginView.classList.remove('off')
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var username = loginForm.username.value
    var password = loginForm.password.value

    if (!isNaN(username)) {
        alert('username cannot be a number')

        return
    }

    if (username.length < 6) {
        alert('username has less than 6 characters')

        return
    }

    if (password.length < 8) {
        alert('password has less than 8 characters')

        return
    }

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (!user)
        alert('user not found')
    else {
        loginForm.username.value = ''
        loginForm.password.value = ''

        loginView.classList.add('off')

        var homeTitle = homeView.querySelector('h1')

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        homeView.classList.remove('off')
    }
}
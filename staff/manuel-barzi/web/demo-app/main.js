// data

var users = []

// presentation

var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function(event) {
    event.preventDefault()

    loginView.classList.add('off')

    registerView.classList.remove('off')
}

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function(event) {
    event.preventDefault()

    registerView.classList.add('off')

    loginView.classList.remove('off')
}

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function(event) {
    event.preventDefault()

    var name = registerForm.name.value
    var city = registerForm.city.value
    var username = registerForm.username.value
    var password = registerForm.password.value

    //console.log(name, city, username, password)

    var user = {
        name: name,
        city: city,
        username: username,
        password: password
    }

    users.push(user)

    registerView.classList.add('off')

    loginView.classList.remove('off')
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function(event) {
    event.preventDefault()

    var username = loginForm.username.value
    var password = loginForm.password.value

    //console.log(username, password)

    var user = users.find(function(user) {
        return user.username === username && user.password === password
    })

    if (!user)
        alert('user not found')
    else {
        loginView.classList.add('off')

        var homeTitle = homeView.querySelector('h1')

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        homeView.classList.remove('off')
    }
}
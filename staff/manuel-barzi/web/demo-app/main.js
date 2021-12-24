// TODO add feedback to register

// presentation

var loginView = document.querySelector('.login')
var registerView = document.querySelector('.register')
var homeView = document.querySelector('.home')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginForm.username.value = ''
    loginForm.password.value = ''

    var feedback = loginForm.querySelector('.feedback')

    feedback.innerText = ''
    feedback.classList.add('off')

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

    try {
        registerUser(name, city, country, username, password)

        registerForm.name.value = ''
        registerForm.city.value = ''
        registerForm.country.value = ''
        registerForm.username.value = ''
        registerForm.password.value = ''

        registerView.classList.add('off')

        loginView.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var username = loginForm.username.value
    var password = loginForm.password.value

    var feedback = loginForm.querySelector('.feedback')

    if (!isNaN(username)) {
        feedback.innerText = 'username cannot be a number'

        feedback.classList.remove('off')

        return
    }

    if (username.length < 6) {
        feedback.innerText = 'username has less than 6 characters'

        feedback.classList.remove('off')

        return
    }

    if (password.length < 8) {
        feedback.innerText = 'password has less than 8 characters'

        feedback.classList.remove('off')

        return
    }

    try {
        var user = authenticateUser(username, password)

        loginForm.username.value = ''
        loginForm.password.value = ''

        loginView.classList.add('off')

        var homeTitle = homeView.querySelector('h1')

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        homeView.classList.remove('off')
    } catch(error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')
    }
}

var searchForm = homeView.querySelector('form')

searchForm.onsubmit = function (event) {
    event.preventDefault()

    var results = homeView.querySelector('.results')
    results.innerHTML = ''

    var query = searchForm.query.value

    var filtered = searchVehicles(query)

    if (filtered.length) {
        var list = document.createElement('ul')

        filtered.forEach(function (vehicle) {
            var item = document.createElement('li')

            var title = document.createElement('h3')
            var image = document.createElement('img')
            var price = document.createElement('span')

            title.innerText = vehicle.name
            image.src = vehicle.thumbnail
            price.innerText = vehicle.price + ' $'

            item.append(title, image, price)

            list.append(item)
        })

        results.append(list)
    } else {
        // TODO feedback "no results"
    }

    results.classList.remove('off')
}
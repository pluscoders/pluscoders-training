// TODO add feedback to register

// presentation

let id // user id

const loginView = document.querySelector('.login')
const registerView = document.querySelector('.register')
const homeView = document.querySelector('.home')
const profileView = document.querySelector('.profile')

const loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginForm.username.value = ''
    loginForm.password.value = ''

    const feedback = loginForm.querySelector('.feedback')

    feedback.innerText = ''
    feedback.classList.add('off')

    loginView.classList.add('off')

    registerView.classList.remove('off')
}

const registerLoginLink = registerView.querySelector('a')

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

const registerForm = registerView.querySelector('form')

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const city = registerForm.city.value
    const country = registerForm.country.value
    const username = registerForm.username.value
    const password = registerForm.password.value

    try {
        registerUser(name, city, country, username, password, error => {
            if (error) return alert(error.message)

            registerForm.name.value = ''
            registerForm.city.value = ''
            registerForm.country.value = ''
            registerForm.username.value = ''
            registerForm.password.value = ''

            registerView.classList.add('off')

            loginView.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}

const loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const username = loginForm.username.value
    const password = loginForm.password.value

    const feedback = loginForm.querySelector('.feedback')

    try {
        //id = authenticateUser(username, password)

        //const user = retrieveUser(id)

        authenticateUser(username, password, (error, token) => {
            if (error) return alert(error.message)

            console.log(token)

            loginForm.username.value = ''
            loginForm.password.value = ''

            loginView.classList.add('off')

            const homeTitle = homeView.querySelector('h1')

            //homeTitle.innerText = 'Hello, ' + user.name + '!'

            homeView.classList.remove('off')
        })
    } catch (error) {
        feedback.innerText = error.message

        feedback.classList.remove('off')
    }
}

const searchForm = homeView.querySelector('form')

searchForm.onsubmit = function (event) {
    event.preventDefault()

    const results = homeView.querySelector('.results')
    results.innerHTML = ''

    const query = searchForm.query.value

    const filtered = searchVehicles(query)

    if (filtered.length) {
        const list = document.createElement('ul')

        filtered.forEach(function (vehicle) {
            const item = document.createElement('li')

            const title = document.createElement('h3')
            const image = document.createElement('img')
            const price = document.createElement('span')

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

const homeProfileButton = homeView.querySelector('.home__profile-button')

homeProfileButton.onclick = function () {
    try {
        const user = retrieveUser(id)

        const profileForm = profileView.querySelector('form')

        profileForm.name.value = user.name
        profileForm.city.value = user.city
        profileForm.country.value = user.country
        profileForm.username.value = user.username

        homeView.classList.add('off')

        profileView.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

const profileBackButton = profileView.querySelector('.profile__back-button')

profileBackButton.onclick = function () {
    profileView.classList.add('off')

    homeView.classList.remove('off')
}

const profileForm = profileView.querySelector('form')

profileForm.onsubmit = function (event) {
    event.preventDefault()

    const name = profileForm.name.value
    const city = profileForm.city.value
    const country = profileForm.country.value
    const username = profileForm.username.value
    const password = profileForm.password.value

    try {
        updateUser(id, name, city, country, username, password)

        const user = retrieveUser(id)

        const homeTitle = homeView.querySelector('h1')

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        profileView.classList.add('off')

        homeView.classList.remove('off')
    } catch (error) {
        alert(error.message)
    }
}

const homeLogoutButton = homeView.querySelector('.home__logout-button')

homeLogoutButton.onclick = function () {
    id = undefined

    homeView.classList.add('off')

    loginView.classList.remove('off')
}
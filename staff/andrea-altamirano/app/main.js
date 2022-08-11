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
        const user = authenticateUser(email, password)

        loginForm.reset()

        loginPage.classList.add('off')

        document.querySelector('.home-page__title').innerText = 'Hola ' + user.name

        homePage.classList.remove('off')
    } catch (error) {
        alert(error.message)

        passwordInput.value = ''
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
        registerUser(name, email, password)

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

var searchForm = homePage.querySelector('.home-page__search-form')
searchForm.onsubmit = function(event) {
    event.preventDefault()

    var queryInput = searchForm.query

    var query = queryInput.value

    try {
        var machines = searchMachinery(query)

        // console.table(machines)

        var resultList = homePage.querySelector('.home-page__result-list')
        resultList.innerHTML = ''

        machines.forEach(function(machine) {
            var resultItem = document.createElement('li')

            var resultTitle = document.createElement('h2')
            resultTitle.innerText = machine.type + ' ' + machine.model + ' (' + machine.brand + ')'

            var resultDescription = document.createElement('p')
            resultDescription.innerText = machine.description

            var resultImage = document.createElement('img')
            resultImage.src = machine.image
            resultImage.style.width = '500px'

            resultItem.append(resultTitle, resultDescription, resultImage)

            resultList.append(resultItem)
        })
    } catch(error) {
        alert(error.message)
    }
}

//

//loginPage.classList.add('off')
//homePage.classList.remove('off')
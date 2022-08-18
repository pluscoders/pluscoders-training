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
        homePage.classList.remove('off')

        const userId = user.id

        const resultNotes = retrieveUserNotes(userId)

        var resultList = homePage.querySelector('.home-page__result-list')
        resultList.innerHTML = ''

        resultNotes.forEach(function (note) {
            var resultItem = document.createElement('li')

            var resultTitle = document.createElement('h2')
            resultTitle.innerText = note.id + ' ' + note.category

            var resultNote = document.createElement('p')
            resultNote.innerText = note.text

            resultItem.append(resultTitle, resultNote)

            resultList.append(resultItem)
        })


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

//home page variables
var homePage = document.querySelector('.home-page')

var logoutButton = homePage.querySelector('.home-page__logout-button')
logoutButton.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()

    homePage.classList.add('off')
    loginPage.classList.remove('off')


}

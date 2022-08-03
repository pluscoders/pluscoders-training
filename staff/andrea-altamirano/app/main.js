var loginPage = document.querySelector('.login-page')

var loginForm = loginPage.querySelector('form')
loginForm.onsubmit = function(event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

    console.log(email, password)
}

// TODO var registerPage ...

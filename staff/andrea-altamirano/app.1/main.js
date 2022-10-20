// login page

var loginPage = document.querySelector('.login-page')

var loginForm = loginPage.querySelector('form')
loginForm.onsubmit = function(event) {
    event.preventDefault()

    var emailInput = loginForm.email
    var passwordInput = loginForm.password

    var email = emailInput.value
    var password = passwordInput.value

    console.log(email, password)
}

var registerAnchor = loginPage.querySelector('a')
registerAnchor.onclick = function(event) {
   event.preventDefault()

   loginPage.classList.add('off')
   registerPage.classList.remove('off')
}

// register page

var registerPage = document.querySelector('.register-page')

var registerForm = registerPage.querySelector('form')
registerForm.onsubmit = function(event) {
    event.preventDefault()

    var nameInput = registerForm.name
    var emailInput = registerForm.email
    var passwordInput = registerForm.password

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    console.log(name, email, password)
}

var loginAnchor = registerPage.querySelector('a')
loginAnchor.onclick = function(event) {
   event.preventDefault()

   registerPage.classList.add('off')
   loginPage.classList.remove('off')
}

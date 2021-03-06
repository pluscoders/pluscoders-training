var register = createRegister(function (email, password) {
    try {
        registerUser(email, password)

        register.style.display = 'none'
        welcome.style.display = 'block'
    } catch(error) {
        //alert(error.message)

        var feedback = register.querySelector('span')
        feedback.innerText = error.message
        feedback.style.display = 'block'
    }

})

document.body.append(register)

var welcome = createWelcome()
welcome.style.display = 'none'

document.body.append(welcome)


// TODO add a logout button in welcome, that accepts a configurable behavior to logout and show the landing panel
// TODO add a landing to choose "Register or Login", so that when clicking on register it shows the register panel, otherwise, when clicking on the login it shows the login panel. also make this landing panel the default panel when the app start.
// TODO add a login panel, that when submitting with the correct credentials, it logs the user in, otherwise it throws an error "wrong credentials"




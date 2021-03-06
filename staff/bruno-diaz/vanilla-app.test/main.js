// data

var users = [
    { email: 'pepito@grillo.com', password: '123123123' },
    { email: 'asd@asd.asd', password: 'asd' }
]


// ---------------------------------------------------------------- REGISTRO form
// Cómo es REGISTRO - definición
function createRegister(onRegister) {
    var form = document.createElement('form')

    var emailLabel = document.createElement('label')
    emailLabel.innerText = 'E-mail'
    emailLabel.for = 'email'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = 'email'
    email.id = 'email-register'

    var passwordLabel = document.createElement('label')
    passwordLabel.innerText = 'Password'
    passwordLabel.for = 'password'

    var password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.id = 'password-register'

    var submit = document.createElement('button')
    submit.innerText = 'Register'

    var feedback = document.createElement('span')
    feedback.style.color = 'red'
    feedback.style.display = 'none'

    emailLabel.append(email)
    passwordLabel.append(password)

    form.append(emailLabel)
    form.append(passwordLabel)
    form.append(submit)
    form.append(feedback)

    form.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        onRegister(email, password)
    }

    return form
}
// Creo elemento con la definición de REGISTRO
var register = createRegister(function (email, password) {
    try {
        registerUser(email, password)

        register.style.display = 'none'
        dimmer.style.display = 'none'
        welcome.style.display = 'block'
        logout.style.display = 'block'
    } catch(error) {
        //alert(error.message)

        var feedback = register.querySelector('span')
        feedback.innerText = error.message
        feedback.style.display = 'block'
    }
})
// Lógica de funcionamiento del elemento
function registerUser(email, password) {
    if(typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if(typeof password !== 'string') throw new TypeError(password + ' is not a string')
    
    var user = { email: email, password: password }

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!regex.test(String(email).toLowerCase())) throw new Error(email + ' is not an e-mail')

    var exists = users.some(function (user) { return user.email === email })

    if (exists) throw new Error('user already exists')

    users.push(user)
}
// Coloco el elemento en el BODY
document.body.append(register)



// ---------------------------------------------------------------- LOGIN form
// Cómo es LOGIN - definición
function createLogin(onLogin) {
    var form = document.createElement('form')

    var emailLabel = document.createElement('label')
    emailLabel.innerText = 'E-mail'
    emailLabel.for = 'email'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = 'email'
    email.id = 'email-login'

    var passwordLabel = document.createElement('label')
    passwordLabel.innerText = 'Password'
    passwordLabel.for = 'password'

    var password = document.createElement('input')
    password.type = 'password'
    password.name = 'password'
    password.id = 'password-login'

    var submit = document.createElement('button')
    submit.innerText = 'Log In'

    var feedback = document.createElement('span')
    feedback.style.color = 'red'
    feedback.style.display = 'none'

    emailLabel.append(email)
    passwordLabel.append(password)

    form.append(emailLabel)
    form.append(passwordLabel)
    form.append(submit)
    form.append(feedback)

    form.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        onLogin(email, password)
    }

    return form
}
// Creo elemento con la definición de LOGIN
var login = createLogin(function (email, password) {
    try {
        authenticateUser(email, password)

        login.style.display = 'none'
        dimmer.style.display = 'none'
        welcome.style.display = 'block'
        logout.style.display = 'block'
    } catch(error) {
        var feedback = login.querySelector('span')
        feedback.innerText = error.message
        feedback.style.display = 'block'
    }
})
// Lógica de funcionamiento del elemento
function authenticateUser(email, password) {
    if(typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if(typeof password !== 'string') throw new TypeError(password + ' is not a string')

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!regex.test(String(email).toLowerCase())) throw new Error(email + ' is not an e-mail')
    
    var user = users.find(function(user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error('We have no user with this email or password')
}
// estilos anexos para crear funcionalidad
login.style.display = 'none'
// Coloco el elemento en el BODY
document.body.append(login)



// ---------------------------------------------------------------- SWITCH LOGIN - REGISTER
// Cómo es dimmer - definición
function createDimmer(onRegister, onLogIn) {
    var dimmer = document.createElement('button')

    dimmer.style.width = '150px'
    dimmer.style.borderStyle = 'solid'
    dimmer.style.borderWidth = '2px'
    dimmer.style.margin = '16px'
    dimmer.style.padding = '16px'
    dimmer.style.display = 'flex'
    dimmer.style.justifyContent = 'center'
    dimmer.style.alignItems = 'center'
    dimmer.style.color = 'black'

    dimmer.innerHTML = 'LOG IN'

    dimmer.onclick = function() { 
        if (dimmer.innerText === 'LOG IN') {
            dimmer.innerText = 'REGISTER'
            
            onRegister()
        } else {
            dimmer.innerText = 'LOG IN'
            
            onLogIn()
        }
    }

    return dimmer
}
// Creo elemento con la definición de dimmer
var dimmer = createDimmer(
    function() {
        login.style.display = 'block'
        register.style.display = 'none'
    },
    function() {
        login.style.display = 'none'
        register.style.display = 'block'
    }
)
// Coloco elemento en el BODY
document.body.append(dimmer)


// ---------------------------------------------------------------- PÁGINA WELCOME
// Cómo es WELCOME - definición
function createWelcome() {
    var h1 = document.createElement('h1')

    h1.innerText = 'Welcome!'

    return h1
}
// Creo elemento con la definición de WELCOME
var welcome = createWelcome()
// estilos anexos para crear funcionalidad
welcome.style.display = 'none'
// Coloco elemento en el BODY
document.body.append(welcome)


// ---------------------------------------------------------------- BOTÓN LOGOUT
// Cómo es LOGOUT - definición
function createLogout(onLogout) {
    var logout = document.createElement('button')

    logout.style.width = '50px'
    logout.style.height = '50px'
    logout.style.borderStyle = 'solid'
    logout.style.borderWidth = '2px'
    logout.style.padding = '2px'
    logout.style.display = 'flex'
    logout.style.justifyContent = 'center'
    logout.style.alignItems = 'center'

    logout.innerHTML = 'LOG OUT'

    logout.onclick = onLogout

    return logout
}
// Creo elemento con la definición de LOGOUT
var logout = createLogout(
    function() { 
        register.style.display = 'block'
        dimmer.style.display = 'block'
        welcome.style.display = 'none'
        logout.style.display = 'none'
    }
)
// estilos anexos para crear funcionalidad
logout.style.display = 'none'
// Coloco elemento en el BODY
document.body.append(logout)
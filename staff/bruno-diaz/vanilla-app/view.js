function createBackofficeForm(onRegister, onLogin) {

    var backofficeForm = document.createElement('div')
    backofficeForm.style.width = '400px'
    backofficeForm.style.margin = '42px auto'
    backofficeForm.style.boxSizing = 'border-box'



    var navBackofficeForm = document.createElement('nav')
    backofficeForm.append(navBackofficeForm)

    var navListBackofficeForm = document.createElement('ul')
    navListBackofficeForm.style.display = 'flex'
    navListBackofficeForm.style.flexFlow = 'row nowrap'
    navBackofficeForm.append(navListBackofficeForm)
    
    var navItemRegister = document.createElement('li')
    navListBackofficeForm.append(navItemRegister)

    var navItemLogin = document.createElement('li')
    navListBackofficeForm.append(navItemLogin)

    var registerLink = createLinkActionBackoffice('Register', navItemRegister)
    registerLink.classList.add('backofficeForm__link--active')

    var loginLink = createLinkActionBackoffice('Log in', navItemLogin)



    var formWrapper = document.createElement('div')
    formWrapper.style.width = '400px'
    formWrapper.style.border = '1px solid #cccccc'
    formWrapper.style.borderTop = 'none'
    formWrapper.style.margin = '0 auto'
    formWrapper.style.padding = '32px 0 16px'
    formWrapper.style.display = 'flex'
    formWrapper.style.flexFlow = 'column nowrap'
    formWrapper.style.justifyContent = 'center'
    formWrapper.classList.add = 'backofficeForm__wrapper'
    backofficeForm.append(formWrapper)

    var feedback = document.createElement('span')
    feedback.style.color = '#000000'
    feedback.style.backgroundColor = 'LightPink'
    feedback.style.minWidth = '270px'
    feedback.style.maxWidth = '310px'
    feedback.style.padding = '4px 8px'
    feedback.style.textAlign = 'center'
    feedback.style.display = 'none'
    formWrapper.append(feedback)


    
    var registerForm = document.createElement('form')
    registerForm.style.display = 'flex'
    registerForm.style.flexFlow = 'column nowrap'
    registerForm.style.justifyContent = 'center'
    registerForm.style.alignItems = 'center'
    registerForm.id = 'registerForm'
    formWrapper.append(registerForm)

    var nameRegister = createInputBackoffice('User name', 'text', registerForm)
    var emailRegister = createInputBackoffice('E-mail', 'email', registerForm)
    var nameRegister = createInputBackoffice('Password', 'password', registerForm)

    var loginForm = document.createElement('form')
    loginForm.style.display = 'none'
    loginForm.style.flexFlow = 'column nowrap'
    loginForm.style.justifyContent = 'center'
    loginForm.style.alignItems = 'center'
    loginForm.id = 'loginForm'
    formWrapper.append(loginForm)

    var emailLogin = createInputBackoffice('E-mail', 'email', loginForm)
    var nameLogin = createInputBackoffice('Password', 'password', loginForm)



    var submit = document.createElement('button')
    submit.classList.add('backofficeForm__submit')
    submit.innerText = 'Register'
    submit.style.width = '200px'
    submit.style.margin = '32px auto'
    submit.style.padding = '8px'
    submit.style.backgroundColor = 'Teal'
    submit.style.color = '#ffffff'
    submit.style.border = 'none'
    submit.style.fontSize = '15px'
    submit.style.fontWeight = 'bold'
    submit.style.borderRadius = '5px'
    submit.style.outline = 'none'
    formWrapper.append(submit)

    formWrapper.onsubmit = function (event) {
        event.preventDefault()

        var email = event.target.email.value
        var password = event.target.password.value

        if (submit.innerText === 'Register') onRegister(email, password)
        else onLogin(email, password)
    }

    return backofficeForm
}



// Add a link of backoffice form

function createLinkActionBackoffice(text, where) {
    var element = document.createElement('a')
    element.title = text
    element.href = '#'
    element.innerHTML = text
    element.classList.add('backofficeForm__link')
    
    where.append(element)

    element.onclick = function() {
        var optionLinks = document.querySelectorAll('.backofficeForm__link--active')
        optionLinks.forEach(function(link) {
             link.classList.remove('backofficeForm__link--active')
        })

        element.classList.add('backofficeForm__link--active')

        if (text === 'Register') {
            document.getElementById('registerForm').style.display === 'flex'
            document.getElementById('loginForm').style.display === 'none'
        } else {
            document.getElementById('registerForm').style.display === 'none'
            document.getElementById('loginForm').style.display === 'flex'
        }

        document.querySelector('.backofficeForm__submit').innerText = text
    }

    return element
}



// Add a input of backoffice form

function createInputBackoffice(text, type, where) {
    var elementLabel = document.createElement('label')
    elementLabel.innerText = text
    elementLabel.for = type
    elementLabel.style.width = '300px'
    elementLabel.style.margin = '8px 0'

    var element = document.createElement('input')
    element.type = type
    element.name = type
    element.id = type
    element.style.width = elementLabel.style.width
    element.style.margin = '6px 0'

    elementLabel.append(element)
    where.append(elementLabel)

    return elementLabel
}




function createWelcome() {
    var h1 = document.createElement('h1')

    h1.innerText = 'Welcome!'

    return h1
}



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
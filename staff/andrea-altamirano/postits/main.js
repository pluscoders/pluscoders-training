let userId

const loginPage = document.querySelector('.login-page')
const loginForm = loginPage.querySelector('form')
const registerAnchor = loginPage.querySelector('a')

const registerPage = document.querySelector('.register-page')
const registerForm = registerPage.querySelector('form')
const loginAnchor = registerPage.querySelector('a')

const homePage = document.querySelector('.home-page')
const logoutButton = homePage.querySelector('.home-page__logout-button')
const settingsButton = homePage.querySelector('.home-page__settings-button')
const resultList = homePage.querySelector('.home-page__result-list')
const settingsPanel = homePage.querySelector('.home-page__settings-panel')
const nameForm = homePage.querySelector('.name-form')
const emailForm = homePage.querySelector('.email-form')
const passwordForm = homePage.querySelector('.password-form')
const footer = homePage.querySelector('footer')
const addButton = footer.querySelector('.add-note')


loginForm.onsubmit = function (event) {
    event.preventDefault()

    const emailInput = loginForm.email
    const passwordInput = loginForm.password

    const email = emailInput.value
    const password = passwordInput.value

    try {
        userId = authenticateUser(email, password)

        loginForm.reset()

        loginPage.classList.add('off')
        homePage.classList.remove('off')

        renderNotes()
    } catch (error) {
        alert(error.message)

        passwordInput.value = ''
    }
}

registerAnchor.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const nameInput = registerForm.name
    const emailInput = registerForm.email
    const passwordInput = registerForm.password

    const name = nameInput.value
    const email = emailInput.value
    const password = passwordInput.value

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

loginAnchor.onclick = function (event) {
    event.preventDefault()

    registerForm.reset()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}


logoutButton.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}



addButton.onclick = function () {
    try {
        addNote(userId)

        renderNotes()
    } catch (error) {
        alert(error.message)
    }
}

settingsButton.onclick = function (event) {
    try{
        const user = retrieveUser(userId)

        nameForm.name.value = user.name
        emailForm.email.value = user.email

        resultList.classList.toggle('off')
        addButton.classList.toggle('off')
        settingsPanel.classList.toggle('off')
        settingsButton.innerText = settingsButton.innerText === 'notes' ? 'settings' : 'notes'    
    } catch(error) {
        alert(error.message)
    }
}


function renderNotes() {
    const notes = retrieveNotes(userId)

    const resultList = homePage.querySelector('.home-page__result-list')
    resultList.innerHTML = ''

    notes.forEach(note => {
        const item = document.createElement('li')

        const category = document.createElement('h4')
        category.innerText = note.category
        category.contentEditable = true
        category.onkeyup = function () {
            try {
                updateNoteCategory(userId, note.id, category.innerText)
            } catch (error) {
                alert(error.message)
            }
        }

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Supr'
        deleteButton.onclick = function (event) {
            try {
                deleteNote(userId, note.id)

                renderNotes()
            } catch (error) {
                alert(error.message)
            }
        }

        const text = document.createElement('p')
        text.contentEditable = true
        text.innerText = note.text
        text.onkeyup = function () {
            try {
                updateNote(userId, note.id, text.innerText)
            } catch (error) {
                alert(error.message)
            }
        }

        item.append(category, text, deleteButton)

        resultList.append(item)
    })
}

nameForm.onsubmit = function (event) {
    event.preventDefault()

    const nameInput = nameForm.name
    const name = nameInput.value

    try {
        updateName(userId, name)

    } catch (error) {
        alert(error.message)
    }
}

emailForm.onsubmit = function (event) {
    event.preventDefault()
    
    const emailInput = emailForm.email
    const email = emailInput.value


    try {
        updateEmail(userId, email)

    } catch (error) {
        alert(error.message)
    }
}

passwordForm.onsubmit = function (event) {
    event.preventDefault()

    const oldPasswordInput = passwordForm.oldPassword
    const oldPassword = oldPasswordInput.value
    const newPasswordInput = passwordForm.newPassword
    const newPassword = newPasswordInput.value
    const newPasswordRepeatInput = passwordForm.newPasswordRepeat
    const newPasswordRepeat = newPasswordRepeatInput.value

    try {
        updatePassword(userId, oldPassword, newPassword, newPasswordRepeat)
    } catch (error) {
        alert(error.message)
    }

    passwordForm.reset
}









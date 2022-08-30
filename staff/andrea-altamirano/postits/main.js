let userId

const loginPage = document.querySelector('.login-page')

const loginForm = loginPage.querySelector('form')
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

const registerAnchor = loginPage.querySelector('a')
registerAnchor.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}
const registerPage = document.querySelector('.register-page')

const registerForm = registerPage.querySelector('form')
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

const loginAnchor = registerPage.querySelector('a')
loginAnchor.onclick = function (event) {
    event.preventDefault()

    registerForm.reset()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

//home page constiables
const homePage = document.querySelector('.home-page')

const logoutButton = homePage.querySelector('.home-page__logout-button')
logoutButton.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

const footer = document.querySelector('footer')
const addButton = footer.querySelector('.add-note')

addButton.onclick = function () {
    try {
        addNote(userId)

        renderNotes()
    } catch (error) {
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








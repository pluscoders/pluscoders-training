/* users */

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const token = response.token

            callback(null, token)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    xhr.setRequestHeader('Content-Type', "application/json")

    xhr.send(`{
        "username": "${email}",
        "password": "${password}"
    }`)
}

function registerUser(name, email, password, callback) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (name.trim().length === 0) throw new Error('name is empty or blank')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 201) {
            callback(null)
        }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(`{
    "name": "${name}",
    "username": "${email}",
    "password": "${password}"
   }`)
}

function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status >= 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            callback(null, response)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

/* notes */

const retrieveNotes = (token, callback) => {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const notes = response.notes || []

            callback(null, notes)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

function createNote(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')
   
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const notes = response.notes || []

            const note = {
                id: 'note-' + Date.now(),
                text: '',
                category: ''
            }
        
            notes.push(note)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const status = xhr2.status

                if (status >= 500) {
                    callback(new Error('server error'))
                } else if (status >= 400) {
                    callback(new Error('client error'))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
            xhr2.setRequestHeader('Content-Type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            const payload = { notes }

            const json2 = JSON.stringify(payload)

            xhr2.send(json2)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

/*
1) recuperar notas del usuario desde la api (token)
2) en esas notas buscar la nota que quiero modificar (por id nota)
3) aplicar nuevo texto (update) a esa nota
4) guardar todas la notas con esa nota actualizada en la api (token, notas)

*/
function updateNoteText(token, noteId, text, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('noteId is not a string')
    if (noteId.trim().length === 0) throw new Error('noteId is empty or blank')
    if (typeof text !== 'string') throw new TypeError('text is not a string')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const notes = response.notes || []

            // TODO en esas notas buscar la nota que quiero modificar (por id nota)

            const note = notes.find (function (note) {
                return note.id === noteId
            })

            if (!note) {
                callback(new Error(`note with id ${noteId} not found`))

                return
            }

            note.text = text

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const status = xhr2.status

                if (status >= 500) {
                    callback(new Error('server error'))
                } else if (status >= 400) {
                    callback(new Error('client error'))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
            xhr2.setRequestHeader('Content-Type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            const payload = { notes }

            const json2 = JSON.stringify(payload)

            xhr2.send(json2)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

function updateNoteCategory(token, noteId, category, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('noteId is not a string')
    if (noteId.trim().length === 0) throw new Error('noteId is empty or blank')
    if (typeof category !== 'string') throw new TypeError('text is not a string')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const notes = response.notes || []

            // TODO en esas notas buscar la nota que quiero modificar (por id nota)

            const note = notes.find (function (note) {
                return note.id === noteId
            })

            if (!note) {
                callback(new Error(`note with id ${noteId} not found`))

                return
            }

            note.category = category

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const status = xhr2.status

                if (status >= 500) {
                    callback(new Error('server error'))
                } else if (status >= 400) {
                    callback(new Error('client error'))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
            xhr2.setRequestHeader('Content-Type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            const payload = { notes }

            const json2 = JSON.stringify(payload)

            xhr2.send(json2)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}


function deleteNote(token, noteId,callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('noteId is not a string')
    if (noteId.trim().length === 0) throw new Error('noteId is empty or blank')
    if (typeof callback !== 'function') throw TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error('server error'))
        } else if (status >= 400) {
            callback(new Error('client error'))
        } else if (status === 200) {
            const json = xhr.responseText

            const response = JSON.parse(json)

            const notes = response.notes || []

            const noteIndex = notes.findIndex(function (note) {
                return note.id === noteId
            })

            if (noteIndex < 0) {
                callback(new Error(`note with id ${noteId} not found`))

                return
            }
        
            notes.splice(noteIndex, 1)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = () => {
                const status = xhr2.status

                if (status >= 500) {
                    callback(new Error('server error'))
                } else if (status >= 400) {
                    callback(new Error('client error'))
                } else if (status === 204) {
                    callback(null)
                }
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
            xhr2.setRequestHeader('Content-Type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)

            const payload = { notes }

            const json2 = JSON.stringify(payload)

            xhr2.send(json2)
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}


function updateName(userId, name) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (userId.trim().length === 0) throw new Error('userId is empty or blank')
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (name.trim().length === 0) throw new Error('name is empty or blank')

    var user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error(`user with id ${userId} not found`)

    var userIndex = users.findIndex(function (user) {
        return user.id === userId
    })

    users[userIndex].name = name
}

function updateEmail(userId, email) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (userId.trim().length === 0) throw new Error('userId is empty or blank')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')

    var user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error(`user with id ${userId} not found`)

    var userIndex = users.findIndex(function (user) {
        return user.id === userId
    })

    users[userIndex].email = email
}

function updatePassword(userId, oldPassword, newPassword, newPasswordRepeat) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (userId.trim().length === 0) throw new Error('userId is empty or blank')
    if (typeof oldPassword !== 'string') throw new TypeError('oldPassword is not a string')
    if (oldPassword.trim().length === 0) throw new Error('oldPassword is empty or blank')
    if (typeof newPassword !== 'string') throw new TypeError('oldPassword is not a string')
    if (newPassword.trim().length === 0) throw new Error('newPassword is empty or blank')
    if (typeof newPasswordRepeat !== 'string') throw new TypeError('oldPassword is not a string')
    if (newPasswordRepeat.trim().length === 0) throw new Error('newPasswordRepeat is empty or blank')

    var user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error(`user with id ${userId} not found`)

    var userIndex = users.findIndex(function (user) {
        return user.id === userId
    })

    if (users[userIndex].password !== oldPassword) throw new TypeError('Old Password does not correspond')
    if (newPassword !== newPasswordRepeat) throw new TypeError('New password and new password repeat is not the same')

    users[userIndex].password = newPasswordRepeat
}
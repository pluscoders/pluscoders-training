/*
TODOS
- authenticateUser
- registerUser
- retrieveUserNotes
*/

function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    return user.id
}

function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (name.trim().length === 0) throw new Error('name is empty or blank')
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')

    let user = users.find(function (user) {
        return user.email === email
    })

    if (user !== undefined) throw new Error('user already registered')

    user = {
        id: 'user-' + (Number(users[users.length - 1].id.split('-')[1]) + 1),
        name: name,
        email: email,
        password: password
    }
    users.push(user)
}

function addNote(userId) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (userId.trim().length === 0) throw new Error('userId is empty or blank')

    // TODO find user in db and validate that exists
    var user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error(`user with id ${userId} not found`)

    const note = {
        id: 'note-' + (Number(notes[notes.length - 1].id.split('-')[1]) + 1),
        user: userId,
        text: '',
        category: ''
    }

    notes.push(note)
}

function updateNote(userId, noteId, text) {
    if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    if (userId.trim().length === 0) throw new Error('userId is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('noteId is not a string')
    if (noteId.trim().length === 0) throw new Error('noteId is empty or blank')
    if (typeof text !== 'string') throw new TypeError('text is not a string')

    var user = users.find(function (user) {
        return user.id === userId
    })

    if (!user) throw new Error(`user with id ${userId} not found`)

    var note = notes.find(function (note) {
        return note.id === noteId
    })

    if (!note) throw new Error(`note with id ${noteId} not found`)

    if (note.user !== userId) throw new Error(`note with id ${noteId} does not belong to user with ${userId}`)

    note.text = text
    // TODO validate inputs
    // TODO find user in db by userId, and validate that exists
    // TODO find note in db by noteId, and validate that exists and belongs to this user
    // TODO update note text
}

/*
function retrieveUserNotes(userId) {
    return notes.filter(function(note) {
        return note.user === userId
    })
}
*/

/*
function retrieveUserNotes(userId) {
    return notes.filter(note => note.user === userId)
}
*/

/*
const retrieveUserNotes = function(userId) {
    return notes.filter(note => note.user === userId)
}
*/

const retrieveNotes = userId => notes.filter(note => note.user === userId)

const createNote = userId => {
    // TODO create an empty note, with a new id (correlative with previous notes), with the user id, add it to notes (array)
}
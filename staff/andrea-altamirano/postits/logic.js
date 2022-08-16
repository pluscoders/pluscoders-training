/*
TODOS
- authenticateUser
- registerUser
- retrieveUserNotes
*/

function authenticateUser(email, password) {
    // TODO validate inputs

    const user = users.find(function(user){
        return user.email === email && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    return user
}

function registerUser(name, email, password){
    let user = users.find (function (user){
        return user.email === email
    })
     if (user !== undefined) throw new Error ('user already registered')

     user = {
        id: 'user-' + (Number(users[users.length - 1].id.split('-')[1]) + 1),
        name: name,
        email: email, 
        password: password
     }
      users.push (user)
}

function retrieveUserNotes(userId) {
    // TODO filter notes that have this user id and return them
}
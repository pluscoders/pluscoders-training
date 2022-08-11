function authenticateUser(email, password) {
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (password.trim().length === 0) throw new Error('password is empty or blank')

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    return user
}

function registerUser(name, email, password) {
    if (name.trim().length === 0) throw new Error('name is empty or blank')
    // TODO validate name has not numbers
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (password.trim().length === 0) throw new Error('password is empty or blank')

    let user = users.find(function (user) {
        return user.email === email
    })

    if (user !== undefined) throw new Error('user already exists')

    user = {
        name: name,
        email: email,
        password: password
    }

    users.push(user)
}

function searchMachinery(query) {
    const machines = machinery.filter(function (machine) {
        return machine.type.includes(query) || machine.brand.includes(query) || machine.model.includes(query) || machine.synonyms.includes(query) || machine.description.includes(query)// TODO synonyms, description
    })

    return machines
}
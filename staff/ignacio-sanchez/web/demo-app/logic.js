// users

function registerUser(firstname, lastName, city, country, email, password) {
    validateFirstName(firstname)
    validateLastName(lastName)
    validateCity(city)
    validateCountry(country)
    validateEmail(email)
    validatePassword(password)

    const user = users.some(function (user) {
        return user.email === email
    })

    if (user) throw new Error('user alredy exists')

       user = {
        id: generateId(),
        firstname: firstname,
        lastname: lastName,
        city: city,
        country: country,
        email: email,
        password: password,
    }

    users.push(user)
}

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error ('wrong credentials')

    return user.id
}
function retriveUser(id) {
    validateId(id)

    const user = users.find(function (user) {
        return user.id === id
    })

    if (!user) throw new Error ('user not found')

    return {
        firstname: user.firstname,
        lastname: user.lastname,
        city: user.city,
        country: user.country,
        email : user.email,
    }
}

// TODO function updateUser
/*
- validate properties (firstname, lastname, city, ....) (stand-by)
- find user by e-mail in users
- update properties in user
*/

function updateUser(id, firstname, lastName, city, country, email, password) {
    validateId(id)
    validateFirstName(firstname)
    validateLastName(lastName)
    validateCity(city)
    validateCountry(country)
    validateEmail(email)
    validatePassword(password)

    const user = users.find(function (user) {
        return user.id === id
    })

    if(!user) throw new Error('user not found') 

    if(email !== user.email) {
        const exists = users.some(function(user){
            return user.email === email
        })

        if (exists) throw new Error ('email already exists')
    }

    user.firstname = firstname
    user.lastname = lastName
    user.city = city
    user.country = country
    user.email = email
    user.password = password
}

// vehicles

function searchVehicles(query, model) {
    const filtered = vehicles.filter(function (vehicle) {
        return vehicle.name.includes(query) && vehicle.name.includes(model)
    })

    return filtered
}
// users

function registerUser(firstname, lastname, city, country, email, password) {
    var user = users.some(function (user) {
        return user.email === email
    })

    if (user) throw new Error('user alredy exists')

    var user = {
        firstname: firstname,
        lastname: lastname,
        city: city,
        country: country,
        email: email,
        password: password,
    }

    users.push(user)
}

function authenticateUser(email, password) {
    var user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error ('wrong credentials')

    return user
}

// TODO function updateUser
/*
- validate properties (firstname, lastname, city, ....) (stand-by)
- find user by e-mail in users
- update properties in user
*/


// vehicles

function searchVehicles(query, model) {
    var filtered = vehicles.filter(function (vehicle) {
        return vehicle.name.includes(query) && vehicle.name.includes(model)
    })

    return filtered
}
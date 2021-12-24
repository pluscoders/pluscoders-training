function registerUser(name, city, country, username, password) {
    var exists = users.some(function(user) {
        return user.username === username
    })

    if (exists) throw new Error('user already exists')

    var user = {
        name: name,
        city: city,
        country: country,
        username: username,
        password: password
    }

    users.push(user)
}

function authenticateUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (!user) throw new Error('wrong credentials')

    return user
}

function searchVehicles(query) {
    var filtered = vehicles.filter(function(vehicle) {
        return vehicle.name.includes(query)
    })

    return filtered
}
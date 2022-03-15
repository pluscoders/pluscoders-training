function searchVehicles(token, brand, model, callback) {
    // DONE function searchVehicles(token, brand, model, callback) {
    // DONE call api to get user
    // DONE extract favs from user
    // DONE call api to search vehicles (following search criteria: model, brand)
    // DONE on response from search, mark the vehicles that are fav ones (set property isFav to each vehicle)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { favs = [] } = user


            {
                const xhr = new XMLHttpRequest

                xhr.onload = () => {
                    const { status } = xhr

                    if (status === 200) {
                        const { responseText: json } = xhr

                        const vehicles = JSON.parse(json)

                        vehicles.forEach(vehicle => vehicle.isFav = favs.includes(vehicle.id))

                        callback(null, vehicles)
                    } else if (status >= 400 && status < 500) {
                        const { responseText: json } = xhr

                        const payload = JSON.parse(json)

                        const { error } = payload

                        callback(new ClientError(error))
                    } else {
                        callback(new ServerError('server error'))
                    }
                }

                xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?maker=${brand}&q=${model}`)

                xhr.send()
            }
        } else if (status >= 400 && status < 500) {
            const { responseText: json } = xhr

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    }

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}
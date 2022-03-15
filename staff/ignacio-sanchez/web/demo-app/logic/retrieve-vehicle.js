function retrieveVehicle(token, vehicleId, callback) {
    // TODO validate input arguments (token, vehicleId)
    validateCallback(callback)
    validateToken(token)

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

                const vehicle = JSON.parse(json)

                // TODO check if vehicle is in favs
                vehicle.isFav = favs.includes(vehicle.id)

                callback(null, vehicle)

            } else if (status >= 400 && status < 500) {
                const { responseText: json } = xhr

                const payload = JSON.parse(json)

                const { error } = payload

                callback(new ClientError(error))
            } else {
                callback(new ServerError('server error'))
            }
        }

        xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicleId}`)

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

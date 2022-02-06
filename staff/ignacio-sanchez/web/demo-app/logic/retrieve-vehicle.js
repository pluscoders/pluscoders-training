function retrieveVehicle(id, callback) {
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr
        if (status === 200) {
            const { responseText : json} = xhr

            const vehicles = JSON.parse(json)

            callback(null, vehicles)

        } else if (status >= 400 && status < 500) {
            const { responseText : json} = xhr 

            const payload = JSON.parse(json)

            const { error } = payload

            callback(new ClientError(error))
        } else {
            callback(new ServerError('server error'))
        }
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)

    xhr.send()
}
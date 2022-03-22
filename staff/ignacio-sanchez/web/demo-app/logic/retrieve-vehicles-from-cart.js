function retrieveVehiclesFromCart(token, callback) {

    //TODO
    //- call api to retrieve user (xhr)

    // retrieve user api call
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { cart = [] } = user

            //- create empty array of vehicles ([])

            const vehicles = []

            //- extract cart from user ([...])
            let count = 0

            if (cart.length) {
                for (let i = 0; i < cart.length; i++) {
                    const xhr = new XMLHttpRequest

                    const item = cart[i]

                    xhr.onload = () => {
                        const { status } = xhr

                        if (status === 200) {
                            const { responseText: json } = xhr

                            const vehicle = JSON.parse(json)

                            vehicle.qty = item.qty

                            vehicles[i] = vehicle

                            count++

                            // if (vehicles.length === cart.length) {
                            if (count === cart.length) {
                                // console.log(vehicles)

                                callback(null, vehicles)
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

                    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${item.id}`)

                    xhr.send()
                }
            } else callback(null, vehicles)

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

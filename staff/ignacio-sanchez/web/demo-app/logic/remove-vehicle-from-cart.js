function removeVehicleFromCart(token, vehicleId, callback) {
    // TODO get user (from api)
    // TODO remove vehicle to the cart with its quantity updated
    // TODO patch user in api to update cart


    // retrieve user api call
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { cart = [] } = user

            const index = cart.findIndex(x => x.id === vehicleId)

            if (index >= 0) {
                //let qty = cart[index].qty
                //cart[index].qty = qty+1
                cart[index].qty--
                if (cart[index].qty === 0 ){
                    cart.splice(index,1)
                }
            } else {
                callback(new Error(`vehicle with id ${vehicleId} not in cart`))

                return
            }

            {
                // update user api call
                const xhr = new XMLHttpRequest

                xhr.onload = () => {
                    const { status } = xhr

                    if (status === 204) {
                        callback(null)
                    } else if (status >= 400 && status < 500) {
                        const { responseText: json } = xhr

                        const payload = JSON.parse(json)

                        const { error } = payload

                        callback(new ClientError(error))
                    } else {
                        callback(new ServerError('server error'))
                    }
                }

                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                xhr.setRequestHeader('Authorization', `Bearer ${token}`)

                xhr.setRequestHeader('Content-Type', 'application/json')

                const payload = { cart }

                const json = JSON.stringify(payload)

                xhr.send(json)
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

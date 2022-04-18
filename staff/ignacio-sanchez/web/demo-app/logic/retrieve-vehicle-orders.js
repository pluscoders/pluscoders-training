function retrieveVehicleOrders(token, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { orders = [] } = user

            const totalVehicles = orders.reduce((accum, order) => accum + order.cart.length, 0)

            const vehicles = []

            let vehiclesCount = 0

            if (orders.length) {
                for (let i = 0; i < orders.length; i++) { 
                    const order = orders[i]

                    const { cart } = order
                    
                    if (cart.length) {
                        for (let j = 0; j < cart.length; j++) {
                            const item = cart[j]

                            const xhr = new XMLHttpRequest

                            xhr.onload = () => {
                                const { status } = xhr

                                if (status === 200) {
                                    const { responseText: json } = xhr

                                    const vehicle = JSON.parse(json)

                                    item.vehicle = vehicle

                                    delete item.id

                                    vehiclesCount++

                                    if (vehiclesCount === totalVehicles)
                                        callback(null, orders)
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
                    }
                }


            } else callback(null, orders)

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

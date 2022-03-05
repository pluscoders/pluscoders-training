function retrieveFavVehicles(token, callback) {

    //TODO
    //- call api to retrieve user (xhr)

    // retrieve user api call
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { favs = [] } = user

            //- create empty array of vehicles ([])

            const vehicles = []

            //- extract favs from user ([...])
            let count = 0

            if (favs.length) {
                for (let i = 0; i < favs.length; ++i) {
                    const xhr = new XMLHttpRequest

                    xhr.onload = () => {
                        const { status } = xhr

                        if (status === 200) {
                            const { responseText: json } = xhr

                            const vehicle = JSON.parse(json)

                            // vehicles.push(vehicle)
                            vehicles[i] = vehicle

                            count++

                            // if (vehicles.length === favs.length) {
                            if (count === favs.length) {
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

                    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${favs[i]}`)

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



//- call api to retrieve each vehicle from favs (xhr)
//- per api call (vehicles) push vehicle in vehicles
//- HINT count api responses 
//- when count === favs.length then call callback(null, vehicles)



function toggleFavVehicle(token, vehicleId, callback) {
    // TODO get user (from api)
    // TODO create property favs in user (if not existed before)
    // TODO add/remove vehicle to the favs
    // TODO patch user in api to update favs

    validateVehicleId(vehicleId)
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.addEventListener('load', () => {
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
    })

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { favs }

    const json = JSON.stringify(payload)

    xhr.send(json)
}


function toggleFavVehicle(token, vehicleId, callback) {
    // TODO get user (from api)
    // TODO create property favs in user (if not existed before)
    // TODO add/remove vehicle to the favs
    // TODO patch user in api to update favs

    //validateVehicleId(vehicleId)
    //validateToken(token)
    //validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            /*
            mirar si user ya tiene favs
            si no tenía favs, inicializarlo ([]) */

            const favs = vehicleId

            const payload = ''

            //const index = user.indexOf(favs);

            //console.log(user.includes(favs));

            {
                function updateUser(user, favs) {
                    if (!Object.values(user).indexOf(favs) > -1) {
                        const payload = { favs: [favs] }
                        return payload
                            ;
                    } else if (Object.values(user).indexOf(favs) > -1) {
                        function removeItemOnce(user, favs) {
                            const index = Object.values(user).indexOf(favs);
                            if (index > -1) {
                                user.splice(index, 1);
                            }
                            const payload = { favs: [] }

                            return payload
                        }
                    }
                }

                /*
                mirar si en favs contiene vehicleId
                si lo tiene entonces quitarlo de favs
                si no, añadirlo a favs

                llamar a api para actualizar favs en el usuario (patch)    
                */

                xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                xhr.setRequestHeader('Authorization', `Bearer ${token}`)

                xhr.setRequestHeader('Content-Type', 'application/json')

                const payload = { favs: [favs] }

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




toggleFavVehicle("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWY4ZDZmMDIzMGFiMzAwMTdjY2MzOTAiLCJpYXQiOjE2NDU1NTU3MzIsImV4cCI6MTY0NTU1OTMzMn0.OHaWroQ-JM859oPWdr32o2ASuXH4vG8kW00AJF88Co0", 'FXB15', (error) => {
    if (error) return alert(error.message)

    console.log(user)
})


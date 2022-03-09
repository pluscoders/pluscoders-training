function searchVehicles(_token, brand, model, callback) {
    // TODO function searchVehicles(token, brand, model, callback) {
    // TODO call api to get user
    // TODO extract favs from user
    // TODO call api to search vehicles (following search criteria: model, brand)
    // TODO on response from search, mark the vehicles that are fav ones (set property isFav to each vehicle)
    validateCallback(callback)

    const xhr = new XMLHttpRequest


    xhr.onload = () => {
        const { status } = xhr
        if (status === 200) {
            const { responseText: json } = xhr

            const vehicles = JSON.parse(json)

            if (vehicles.length) {
                const xhr = new XMLHttpRequest

                xhr.onload = () => {
                    const { status } = xhr

                    let count = 0
            
                    if (status === 200) {
                        const { responseText: json } = xhr
            
                        const user = JSON.parse(json)
            
                        // const favs = user.favs || []
                        const { favs = [] } = user


                        const isFav = []

                        let index = count
            
                        vehicles.forEach(car => {
                            if (car.id === favs[index])
                            isFav.push(favs[index])

                            count++
                        
                        })

            
                        /*
                        mirar si en favs contiene vehicleId
                        si lo tiene entonces quitarlo de favs
                        si no, añadirlo a favs
            
                        llamar a api para actualizar favs en el usuario (patch)    
                        */
                        
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
                
                            xhr.setRequestHeader('Authorization', `Bearer ${_token}`)
                
                            xhr.setRequestHeader('Content-Type', 'application/json')
                
                            const payload = { isFav }
                
                            const json = JSON.stringify(payload)
                
                            xhr.send(json)
                        }

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
            
                xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
            
                xhr.setRequestHeader('Authorization', `Bearer ${_token}`)
            
                xhr.send()
            }

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
function toggleFavVehicle(token, vehicleId, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            const user = JSON.parse(json)

            const { favs = [] } = user

            const index = favs.indexOf(vehicleId)

            if (index < 0)
                favs.push(vehicleId)
            else favs.splice(index, 1)
            
            {
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
    
                const payload = { favs }
    
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
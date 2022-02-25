function retrieveFavVehicles(token, callback) {

    //TODO
    //- call api to retrieve user (xhr)

    // retrieve user api call
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 200) {
            const { responseText: json } = xhr

            debugger

            const user = JSON.parse(json)

            const { favs = [] } = user

            console.log (favs)


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


//- extract favs from user ([...])
//- create empty array of vehicles ([])
//- call api to retrieve each vehicle from favs (xhr)
//- per api call (vehicles) push vehicle in vehicles
//- HINT count api responses 
//- when count === favs.length then call callback(null, vehicles)


retrieveFavVehicles("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWY4ZDZmMDIzMGFiMzAwMTdjY2MzOTAiLCJpYXQiOjE2NDU3MzAwNzYsImV4cCI6MTY0NTczMzY3Nn0.e7e8kvFeaLion633Hi3fWwHwKOnNvWdwX74mOqhpAcc", (error) => {
    if (error) return console.error(error.message)

    console.log('fav listed')
})


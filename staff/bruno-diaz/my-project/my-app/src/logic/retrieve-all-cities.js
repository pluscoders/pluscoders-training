export default function retrieveAllCities() {
    return fetch('http://localhost:8080/cities')
        .then(response => {
            if (response.ok)
                return response.json()
                    .then(response => response)

            throw new Error('server error')
        })
}
import axios from 'axios'

export default function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')

    if (!token.trim().length) throw new Error('token is empty or blank')

    return axios.get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            const { data: user } = response

            return user
        })
        .catch(error => {
            const message = error.response.data.error

            throw new Error(message)
        })
}
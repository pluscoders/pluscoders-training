import axios from 'axios'

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

export default function registerUser(name, email, password) {
    if (typeof name !== 'string')
        throw new Error('name is not a string')

    else if (name.trim().length === 0)
        throw new Error('name is empty or blank')

    else if (typeof email !== 'string')
        throw new Error('email is not a string')

    else if (email.trim().length === 0)
        throw new Error('email is empty or blank')

    else if (!EMAIL_REGEXP.test(email))
        throw new Error('email is not a valid email')

    else if (typeof password !== 'string')
        throw new Error('password is not a string')

    else if (password.trim().length === 0)
        throw new Error('password is empty or blank')

    return axios
        .post(`${process.env.REACT_APP_API_URL}/users`, {
            name,
            email,
            password,
        })
        .then(() => {})
        .catch(error => {
            const message = error.response.data.error

            throw new Error(message)
        })
}
import axios from 'axios'

export default function updateUserEmail(token, email) {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof email !== 'string')
    throw new Error('email is not a string')

  else if (email.trim().length === 0)
    throw new Error('email is empty or blank')

  else if (!EMAIL_REGEXP.test(email))
    throw new Error('email is not a valid email')

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/users/email`, {
      email,
    }, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(() => { })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}

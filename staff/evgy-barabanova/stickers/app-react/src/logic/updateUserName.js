import axios from 'axios'

export default function updateUserName(token, name) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof name !== 'string')
    throw new Error('new name is not a string')

  else if (name.trim().length === 0)
    throw new Error('new name is empty or blank')

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/users/name`, {
      name,
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

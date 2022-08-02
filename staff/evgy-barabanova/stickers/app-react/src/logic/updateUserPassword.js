import axios from 'axios'

export default function updateUserPassword(token, userId, oldPassword, newPassword) {
  if (typeof oldPassword !== 'string')
    throw new Error('old password is not a string')

  else if (oldPassword.trim().length === 0)
    throw new Error('old password is empty or blank')

  else if (typeof newPassword !== 'string')
    throw new Error('old password is not a string')

  else if (newPassword.trim().length === 0)
    throw new Error('old password is empty or blank')

  else if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('old password is empty or blank')

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/users/password`, {
      oldPassword,
      newPassword,
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

import axios from 'axios'

export default function updateUserName(token, userId, oldName, newName) {
  if (typeof oldName !== 'string')
    throw new Error('old name is not a string')

  else if (oldName.trim().length === 0)
    throw new Error('old name is empty or blank')

  else if (typeof newName !== 'string')
    throw new Error('new name is not a string')

  else if (newName.trim().length === 0)
    throw new Error('new name is empty or blank')

  else if (typeof userId !== 'string')
    throw new Error('userId is not a string')

  else if (userId.trim().length === 0)
    throw new Error('userId is empty or blank')

  return axios
    .patch(`${process.env.REACT_APP_API_URL}/users/name`, {
      oldName,
      newName,
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

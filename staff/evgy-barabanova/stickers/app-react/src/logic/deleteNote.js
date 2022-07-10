import axios from 'axios'

export default function deleteNote(token, noteId) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof noteId !== 'string')
    throw new Error('noteId is not a string')

  else if (!noteId.trim().length) throw new Error('token is empty or blank')

  return axios
    .post(`${process.env.REACT_APP_API_URL}/notes`, {
      token,
      noteId
    })
    .then(response => {
      // const { noteId } = response.data

      // return token
    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}


import axios from 'axios'

export default function deleteNote(token, noteId) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof noteId !== 'string')
    throw new Error('noteId is not a string')

  else if (!noteId.trim().length) throw new Error('token is empty or blank')

  return axios
    .delete(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, 
      {
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


import axios from 'axios'

export default function updateNote(token, noteId, text) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof noteId !== 'string')
    throw new Error('noteId is not a string')

  else if (!noteId.trim().length) throw new Error('noteId is empty or blank')

  else if (typeof text !== 'string')
    throw new Error('text is not a string')

  else if (!text.trim().length) throw new Error('text is empty or blank')

  return axios
    .post(`${process.env.REACT_APP_API_URL}/notes/:noteId`, {
      token, 
      noteId, 
      text
    })
    .then(
    )
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}

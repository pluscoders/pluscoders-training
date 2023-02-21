import axios from 'axios'

export default function createNote(token, text) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  else if (typeof text !== 'string')
    throw new Error('text is not a string')


  // TODO call api via ajax

  return axios
    .post(`${process.env.REACT_APP_API_URL}/notes`, {
      text
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

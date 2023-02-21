import axios from "axios";

export default function retrieveNotes(token) {
  if (typeof token !== 'string') throw new Error('token is not a string')

  else if (!token.trim().length) throw new Error('token is empty or blank')

  return axios.get(`${process.env.REACT_APP_API_URL}/notes`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      const { data: notes } = response

      return notes
    })
    .catch(error => {
      const message = error.response.data.error

      throw new Error(message)
    })
}

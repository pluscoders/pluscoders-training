import React from 'react'
import './Note.css'

export default function Note() {

  const handleSave = async event => {
    event.preventDefault();

    const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`
      }
    })

    const { status } = response

    if (status === 200) {
      const payload = await response.json()

      const { notes = [] } = payload

      const text = event.target.text.value;

      const note = { text }

      notes.push(note)

      {
        const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            notes
          })
        })

        const { status } = response

        if (status === 204) {
          alert('note saved')
        } else if (status >= 400 && status < 500) {
          const payload = await response.json()

          const { error } = payload

          alert(error)
        } else if (status >= 500) {
          alert('server error')
        }
      }
    } else if (status >= 400 && status < 500) {
      const payload = await response.json()

      const { error } = payload

      alert(error)
    } else if (status >= 500) {
      alert('server error')
    }
  }

  return (
    <form className='Note' onSubmit={handleSave}>
      <h2>NOTE</h2>
      <textarea name='text' />
      <button type='submit'>Save</button>
    </form>
  )
}


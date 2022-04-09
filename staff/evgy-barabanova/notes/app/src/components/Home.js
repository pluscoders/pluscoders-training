import React, { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState()

  useEffect(() => {
    fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`
      }
    })
      .then(response => {
        const { status } = response

        if (status === 200){
          return response.json()
            .then(payload => {
              const { name } = payload

              setName(name)
            })
        } else if (status >= 400 && status < 500) {
          return response.json()
            .then(payload => {
              const { error } = payload

              alert(error)
            })
        } else if (status >= 500) {
          alert('server error')
        }
      })
  }, [])


  return (
    <main>
      <h1>Home</h1>
      <p>hello {name}!</p>
    </main>
  )
}


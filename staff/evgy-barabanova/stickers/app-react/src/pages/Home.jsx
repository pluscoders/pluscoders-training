import React, { useEffect, useState } from 'react'
import './Home.css'
import { retrieveUser, createNote } from '../logic'

export default function Home() {
  const [user, setUser] = useState()

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then(user => setUser(user))
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleSubmit = event => {
    // TODO get input field text

    // TODO call createNote logic with token and text
  }

  return <div>
    <div>Hello, {user?.name}!</div>

    <h2>New note</h2>
    <form>...</form>
  </div>
}

// TODO understand "short-circuit evaluation"

import React, { useEffect, useState, useCallback } from "react"
import "./Home.css"
import { retrieveUser, createNote, updateNote, deleteNote } from "../logic"

export default function Home() {
  const [user, setUser] = useState()
  const [text, setText] = useState()

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleSubmit = (event) => {
    // TODO get input field text

    event.preventDefault()

    // TODO call createNote logic with token and text
    
    try {
      createNote(text)
        .then((text) => setText(text))
        .catch((error) => alert(error.message))
    } catch (error) {
      alert(error.message)
    }

    useCallback(() => {
      try {
        deleteNote(sessionStorage.token)
          .then((noteId) => setText(noteId))
          .catch((error) => alert(error.message))
      } catch (error) {
        alert(error.message)
      }
    })

    
  }

  return (
    <div>
      <div>Hello, {user?.name}!</div>

      <h2>New note</h2>
      <form onSubmit={handleSubmit}>
        <input name="text" type="text" placeholder="Enter your note" />
      </form>
      <button type="submit">Create</button>
      <button type="submit">Update</button>
      <button type="submit">Delete</button>
    </div>
  )
}

// TODO understand "short-circuit evaluation"

import React, { useEffect, useState, useCallback } from "react"
import "./Home.css"
import { retrieveUser, createNote, updateNote, deleteNote } from "../logic"

export default function Home() {
  const [user, setUser] = useState()

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleCreateNote = (event) => {
    event.preventDefault()

    try {
      const text = event.target.text.value

      createNote(sessionStorage.token, text)
        .catch((error) => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }

  // try {
  //   deleteNote(sessionStorage.token)
  //     .then((noteId) => setText(noteId))
  //     .catch((error) => alert(error.message))
  // } catch (error) {
  //   alert(error.message)
  // }

  return (
    <div>
      <div>Hello, {user?.name}!</div>

      <h2>Note list</h2>

      <h2>New note</h2>

      <form onSubmit={handleCreateNote}>
        <input name="text" type="text" placeholder="Enter your note" />
        <button type="submit">Create</button>
      </form>

      {/* <button type="submit">Update</button> */}
      {/* <button onClick={handleDeleteNote}>Delete</button> */}
    </div>
  )
}

// TODO understand "short-circuit evaluation"

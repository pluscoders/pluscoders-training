/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import {
  retrieveUser,
  retrieveNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../logic";

export default function Home() {
  const [user, setUser] = useState();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handlerLogout = () => {
    delete sessionStorage.token;
    navigate("/login");
  };

  const handleCreateNote = (event) => {
    event.preventDefault();

    try {
      createNote(sessionStorage.token, "")
        .then(() => retrieveNotes(sessionStorage.token))
        .then((notes) => setNotes(notes))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    try {
      retrieveNotes(sessionStorage.token)
        .then((notes) => {
          setNotes(notes);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleDeleteNote = (noteId) => {
    try {
      deleteNote(sessionStorage.token, noteId)
        .then(() => retrieveNotes(sessionStorage.token))
        .then((notes) => setNotes(notes))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateNote = (noteId, text) => {
    try {
      updateNote(sessionStorage.token, noteId, text)
        .then(() => retrieveNotes(sessionStorage.token))
        .then((notes) => setNotes(notes))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Hello, {user?.name}!</h1>
        <button
          className="header__logout-button"
          onClick={() => handlerLogout()}
        >
          Logout
        </button>
      </header>

      <main className="main">
        <ul className="list">
          <li className="list__item">
            {notes.map((note) => (
              <div className="sticker">
                <button
                  className="sticker__delete-button"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  x
                </button>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const text = event.target.text.value;

                    handleUpdateNote(note.id, text);
                  }}
                >
                  <textarea
                    className="sticker__text"
                    name="text"
                    placeholder="Add note"
                    defaultValue={note.text}
                  ></textarea>
                  <button type="submit">Save</button> 
                </form>
                <div>{note.date}</div>
              </div>
            ))}
          </li>
        </ul>

        <footer className="footer">
          <form class="footer__add-button" onSubmit={handleCreateNote}>
            <button type="submit">+</button>
          </form>
        </footer>
      </main>
    </div>
  );
}

// TODO understand "short-circuit evaluation"

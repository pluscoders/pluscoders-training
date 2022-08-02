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

  const handleCreateNote = (text) => {
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
      updateNote(sessionStorage.token, noteId, text).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header className="home-page-header">
        <h1 className="home-page-header__title">Hello, {user?.name}!</h1>
        <button
          className="home-page-header__logout-button"
          onClick={() => handlerLogout()}
        >
          Logout
        </button>
      </header>

      <main className="home-page-main">
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

                <p
                  className="sticker__text"
                  contentEditable="true"
                  onKeyUp={(event) => {
                    const text = event.target.innerText;

                    handleUpdateNote(note.id, text);
                  }}
                >
                  {note.text}
                </p>
              </div>
            ))}
          </li>
        </ul>
      </main>

      <footer className="home-page-footer">
        <button
          className="home-page-footer__add-button"
          onClick={() => handleCreateNote()}
        >
          +
        </button>
      </footer>
    </>
  );
}

// TODO understand "short-circuit evaluation"

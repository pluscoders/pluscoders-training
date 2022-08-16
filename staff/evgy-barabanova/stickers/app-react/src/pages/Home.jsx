/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import {
  retrieveUser,
  retrieveNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} from "../logic";

export default function Home() {
  const [user, setUser] = useState();
  const [notes, setNotes] = useState([]);
  const [menuButton, setMenuButton] = useState(false);
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

  const menuButtonHandler = () => {
    setMenuButton((value) => !value);
  };

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

  const handleSearchNotes = (query) => {
    try {
      searchNotes(sessionStorage.token, query).catch((error) =>
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
          className="home-page-header__menu-button"
          onClick={menuButtonHandler}
        >
          Menu
        </button>
        {menuButton && (
          <div className="home-page-header__menu-link">
            <Link className="link" to="/users/profile">
              Setting
            </Link>
            <button
              className="home-page-header__logout-button"
              onClick={() => handlerLogout()}
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <main className="home-page-main">
        <div className="home-page-main__search">
          <input type="search" />
          <button
            //  const query = event.target.text
            className="home-page-header__search-button"
            // onClick={() => handleSearchNotes(query)}
          >
            Search
          </button>
        </div>
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

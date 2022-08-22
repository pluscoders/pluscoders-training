import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import {
  retrieveUser,
  updateUserPassword,
  updateUserName,
  updateUserEmail,
} from "../logic";

export default function Settings() {
  const [user, setUser] = useState();
  const [correctPassword, setCorrectPassword] = useState(false);

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleCorrectPassword = () => {
    setCorrectPassword(!correctPassword);
  };

  const handleUpdateUserPassword = (event) => {
    event.preventDefault();

    const oldPassword = event.target.oldPassword.value;
    const newPassword = event.target.newPassword.value;

    try {
      updateUserPassword(sessionStorage.token, oldPassword, newPassword).catch(
        //debugger
        (error) => alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateUserName = (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    try {
      updateUserName(sessionStorage.token, name).catch((error) => {
        // debugger;
        alert(error.message);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdateUserEmail = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    try {
      updateUserEmail(sessionStorage.token, email).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main className="profile-page-main">
        <h2 className="profile-page-main__title">Settings</h2>
        <form
          className="profile-page-name-form"
          onSubmit={handleUpdateUserName}
        >
          <div className="profile-page-name">
            {" "}
            {user?.name}
            <input name="name" type="text" placeholder="Enter your new name" />
            <button className="profile-page__save-button" type="submit">
              save
            </button>
          </div>
        </form>

        <form
          className="profile-page-email-form"
          onSubmit={handleUpdateUserEmail}
        >
          <div className="profile-page-email">
            {" "}
            {user?.email}
            <input
              name="email"
              type="email"
              placeholder="Enter your new email"
            />
            <button className="profile-page__save-button" type="submit">
              save
            </button>
          </div>
        </form>
        <form
          className="profile-page-password-form"
          onSubmit={handleUpdateUserPassword}
        >
          <div className="profile-page-oldPassword">
            {" "}
            old password
            <input
              name="oldPassword"
              type="oldPassword"
              placeholder="Enter your old password"
            />
            <button
              className="profile-page__save-oldPassword-button"
              type="submit"
              onClick={handleCorrectPassword}
            >
              save
            </button>
          </div>
          {correctPassword && (
            <div className="profile-page-newPassword">
              {" "}
              new password
              <input
                name="newPassword"
                type="newPassword"
                placeholder="Enter your new password"
              />
              <button
                className="profile-page__save-newPassword-button"
                type="submit"
              >
                save
              </button>
            </div>
          )}
        </form>

        <Link className="link" to="/home">
          back
        </Link>
      </main>
    </>
  );
}

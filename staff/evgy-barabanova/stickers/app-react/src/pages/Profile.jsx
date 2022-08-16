import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import {
  retrieveUser,
  updateUserPassword,
  updateUserName,
  updateUserEmail,
} from "../logic";

export default function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handlerUpdateUserPassword = (userId, oldPassword, newPassword) => {
    try {
      updateUserPassword(
        sessionStorage.token,
        userId,
        oldPassword,
        newPassword
      ).catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const handlerUpdateUserName = (userId, name) => {
    try {
      updateUserName(sessionStorage.token, userId, name).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handlerUpdateUserEmail = (userId, email) => {
    try {
      updateUserEmail(sessionStorage.token, userId, email).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header className="profile-page-header">
        <h1 className="profile-page-header__title">{user?.name}`s profile</h1>
      </header>
      <main className="profile-page-main">
        <h2 className="profile-page-main__title">Settings</h2>
        <div className="profile-page-name">
          {" "}
          {user?.name}
          <input placeholder="Enter your new name" />
          <button
            className="profile-page__save-button"
            onClick={() => updateUserName()}
          >
            save
          </button>
        </div>
        <div className="profile-page-email">
          {" "}
          {user?.email}
          <input placeholder="Enter your new email" />
          <button
            className="profile-page__save-button"
            onClick={() => updateUserEmail()}
          >
            save
          </button>
        </div>
        <div className="profile-page-password">
          {" "}
          Password
          <input placeholder="Enter your new password" />
          <button
            className="profile-page__save-button"
            onClick={() => updateUserPassword()}
          >
            save
          </button>
        </div>

        <Link className="link" to="/home">
          back
        </Link>
      </main>
    </>
  );
}

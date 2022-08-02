import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { retrieveUser, updateUserPassword } from "../logic";

export default function Profile() {
  const [user, setUser] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handlerUpdateUser = (userId, oldPassword, newPassword) => {
    try {
      updateUserPassword(sessionStorage, userId, oldPassword, newPassword).catch((error) =>
        alert(error.message)
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
  <header className="profile-page-header">
    <h1 className="profile-page-header__title">User name</h1>
    </header>
     <main className="profile-page-main">
     <h2 className="profile-page-main__title">Settings</h2>
     {/* <div className="profile-page-name"> Name
       <input placeholder="Enter your name"/>
       <button className="profile-page__save-button">save</button>
       </div>
     <div className="profile-page-email"> Email
       <input placeholder="Enter your email"/>
       <button className="profile-page__save-button">save</button>
     </div> */}
     <div className="profile-page-password"> Password
       <input placeholder="Enter your password"/>
       <button className="profile-page__save-button">save</button>
     </div>
   </main>
    </>
  )
}

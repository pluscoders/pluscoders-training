import React from 'react';

function ProfilePage(props) {
  const showMessage = () => {
    alert('Has votado por: ' + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <button onClick={handleClick}>Votar</button>
  );
}

export default ProfilePage;
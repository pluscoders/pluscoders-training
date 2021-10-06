import React from 'react';

class ProfilePage extends React.Component {
  showMessage = () => {
    alert('Has votado por: ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Votar</button>;
  }
}

export default ProfilePage;

import React, { Component } from 'react';

class UserBar extends Component {

  render() {
    if (this.props.username) {
      return (
        <div className="sign-in" >
          <span className="welcome-message">{`Welcome, ${this.props.username}!`}</span>
          <button className="message-submit" onClick={this.props.updateUser} >Sign out</button>
        </div>
      );
    } else {
      return (
        <div className="sign-in" >
          <input id="user-input" type="text" />
          <button className="message-submit" onClick={this.props.updateUser} >Sign in</button>
        </div>
      );
    }
  }
}

export default UserBar;
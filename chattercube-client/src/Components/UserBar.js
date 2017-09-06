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
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <form className="navbar-form navbar-right">
              <div className="input-group">
                <input id="user-input" className="form-control" type="text" placeholder="Sign in" />
                <div className="input-group-btn">
                  <button onClick={this.props.updateUser} className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-log-in"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      );
    }
  }
}

export default UserBar;
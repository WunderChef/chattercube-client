import React, { Component } from 'react';

class UserBar extends Component {

  render() {
    if (this.props.username) {
      return (
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-right sign-out">
              <div className="navbar-header">
                <span className="welcome-message navbar-brand">{`Welcome, ${this.props.username}!`}</span>
              </div>
              <button onClick={this.props.updateUser} className="btn btn-default navbar-btn" type="submit">
                <i className="glyphicon glyphicon-log-out"></i>
              </button>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-inverse navbar-static-top">
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
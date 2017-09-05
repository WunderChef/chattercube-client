import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      user: 'phil',
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <nav className="navbar">
            <div>
              Search
            </div>
          </nav>
          <div>
            <div className="app-header">Title</div>
          </div>
          <div>
            <div className="message-input"> Type here </div>
          </div>
          <div>
            <div className="message-list">Message list</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

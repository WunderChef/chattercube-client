import React, { Component } from 'react';
import MessageList from './MessageList';
import InputMessage from './InputMessage';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: ['hi', 'hi'],
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
            <div className="message-input">
              <InputMessage />
            </div>
          </div>
          <div>
            <div className="message-list">
              <MessageList messages={this.state.messages}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MessageList from './MessageList';
import InputMessage from './InputMessage';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: ['hi', 'hi'],
      user: 'phil',
    };
    this.getMessages.bind(this);
    this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    axios.get('http://chattercube.thirdtape.com/messages/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendMessage(message) {
    
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

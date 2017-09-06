import React, { Component } from 'react';
import MessageList from './MessageList';
import InputMessage from './InputMessage';
import UserBar from './UserBar';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      username: '',
    };
    this.getMessages = this.getMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getMessages();
    setInterval(this.getMessages, 1000);
  }

  updateUser() {
    if (this.state.username) {
      this.setState({
        username: '',
      });
    } else {
      this.setState({
        username: document.getElementById('user-input').value,
      });
    }
  }

  getMessages() {
    axios.get('http://chattercube.thirdtape.com/messages/')
      .then(({ data }) => {
        this.setState({
          messages: data.messages,
        });
      })
      .catch((error) => {
        console.error('FAILURE!! ', error);
      });
  }

  sendMessage() {
    axios.post('http://chattercube.thirdtape.com/messages/', {
      message: document.getElementById('message-input').value,
      username: this.state.username,
    })
      .then((response) => {
        this.getMessages();
      })
      .catch((error) => {
        console.error('FAILURE!! ', error);
      });
    document.getElementById('message-input').value = '';
  }

  render() {
    return (
      <div className="app">
        <div>
          <nav className="navbar">
            <UserBar updateUser={this.updateUser} username={this.state.username} />
          </nav>
          <div>
            <div className="app-header">Title</div>
          </div>
          <div>
            <div className="message-input">
              <InputMessage submit={this.sendMessage} />
            </div>
          </div>
          <div>
            <div className="message-list">
              <MessageList messages={this.state.messages} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

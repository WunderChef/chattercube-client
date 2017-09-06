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

  updateUser(event) {
    event.preventDefault();
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
    if (this.state.username) {
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
    } else {
      window.alert('Sign in first to send a message!');
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <UserBar updateUser={this.updateUser} username={this.state.username} />
          <div className="jumbotron text-center">
            <h1>chattercube</h1>
            <p>Talk with your friends!</p> 
          </div>
          <div>
            <div className="message-input">
              <InputMessage submit={this.sendMessage} />
            </div>
          </div>
          <div>
            <div className="message-list col-sm-4">
              <MessageList messages={this.state.messages} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

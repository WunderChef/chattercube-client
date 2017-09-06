import React, { Component } from 'react';
import MessageList from './MessageList';
import InputMessage from './InputMessage';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      username: 'phil',
    };
    this.getMessages = this.getMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.getMessages();
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
            <div>
              Search
            </div>
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

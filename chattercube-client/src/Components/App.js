import React, { Component } from 'react';
import MessageList from './MessageList';
import InputMessage from './InputMessage';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
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
      .then(({ data }) => {
        this.setState({
          messages: data.messages,
        });
      })
      .catch(function (error) {
        console.error('FAILURE!! ', error);
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

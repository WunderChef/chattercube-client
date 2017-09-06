import React, { Component } from 'react';
import MessageEntry from './MessageEntry';

class MessageList extends Component {

  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => 
          <MessageEntry key={i} message={message}/>
        )}
      </div>
    );
  }
}

export default MessageList;

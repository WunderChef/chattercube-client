import React, { Component } from 'react';
import MessageEntry from './MessageEntry';

class MessageList extends Component {

  render() {
    return (
      <div>
        <ul className="media-list">
          {this.props.messages.map((message, i) => 
            <MessageEntry key={i} message={message}/>
          )}
        </ul>
      </div>
    );
  }
}

export default MessageList;

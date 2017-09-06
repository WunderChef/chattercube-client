import React, { Component } from 'react';
import _ from 'lodash';

class MessageEntry extends Component {

  render() {
    const username = _.escape(this.props.message.username);
    const message = _.escape(this.props.message.message);
    const date = _.escape(this.props.message.createdAt);

    return (
      <div>
        <span>{username}</span>
        <span>
          <span>{date}</span>
          <span>{message}</span>
        </span>
      </div>
    );
  }
}

export default MessageEntry;
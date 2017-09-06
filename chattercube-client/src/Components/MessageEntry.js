import React, { Component } from 'react';
import _ from 'lodash';

class MessageEntry extends Component {

  render() {
    const username = _.escape(this.props.message.username);
    const message = _.escape(this.props.message.message);
    const date = _.escape(this.props.message.createdAt);

    return (
      <li class="media">
        <div class="media-body">
          <div class="media">
            <div class="media-body">
              <div className="message-text">
                {message}
              </div>
                <br/>
              <small class="text-muted">{`${username} | ${date}`}</small>
                <hr/>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default MessageEntry;
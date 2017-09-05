import React, { Component } from 'react';

class InputMessage extends Component {

  render() {
    return (
      <div className="message-control">
        <input className="message-input" type="text" />
        <button className="message-submit">Submit</button>
      </div>
    );
  }
}

export default InputMessage;
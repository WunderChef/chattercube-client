import React, { Component } from 'react';

class InputMessage extends Component {

  render() {
    return (
      <div className="message-control">
        <input id="message-input" type="text" />
        <button className="message-submit" onClick={this.props.submit} >Submit</button>
      </div>
    );
  }
}

export default InputMessage;
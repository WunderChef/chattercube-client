import React, { Component } from 'react';

class InputMessage extends Component {

  render() {
    return (
      <div>
        <div className="message-control form-group">
          <textarea id="message-input" rows="2" type="text" />
        </div>
          <button className="message-submit btn btn-default" onClick={this.props.sendMessage} type="submit" >Send</button>
      </div>
    );
  }
}

export default InputMessage;
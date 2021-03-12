import React, { Component } from 'react';

class Message  extends Component {

  constructor() {
    super();
    this.state = { // state is a reserved keyword
      message: 'Welcome Visitor'
    }  
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    });
  }

  render() {
    return(
      <div>
        <h1>{ this.state.message }</h1>
        <button onClick={ () => this.changeMessage() }>Subscribe</button>
      </div>
    );
  }
}

export default Message;
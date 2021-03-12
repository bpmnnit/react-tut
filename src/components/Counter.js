import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback Value: ', this.state.count);
    // });
    // this.state.count = this.state.count + 1;

    this.setState(prevState => ({
      count: prevState.count + 1
    }), () => {
      console.log('Callback value: ', this.state.count);
    }); // this will give the right reult.
    console.log(this.state.count); // This runs before the state is set, so, in browser the count will be 1 but, in console it will show 0.
  }

  incrementFive() {
    // This won't increment the state five times, because react for performance, perform these operations just one time. So, the counter will always be incremented by 1. But, in console, we will see the output 5 times.
    // To correctly do this, use the previous state.

    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  
  render() {
    return (
      <div>
        <div>Count - { this.state.count }</div>
        <button onClick={ () => this.incrementFive() }>Increment</button>
      </div>
    );
  }
}

export default Counter

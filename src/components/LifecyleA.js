import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecyleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhanu Pratap'
    }
    console.log('LifecycleA Constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle A componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'Codevolution'
    });
  }

  render() {
    console.log('Lifecycle A Rendered');
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>change State</button>
        <LifecycleB></LifecycleB>
      </div>
    );
  }
}

export default LifecyleA

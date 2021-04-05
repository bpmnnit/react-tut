import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhanu Pratap'
    }
    console.log('LifecycleB Constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  render() {
    console.log('LifecycleB Rendered');
    return (
      <div>
        LifecycleB     
      </div>
    );
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate');
  }
}

export default LifecycleB

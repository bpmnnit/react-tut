import React, { Component } from 'react';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'Bhanu'
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Bhanu'
      });
    }, 2000); // Results in re-rendering of the parent component every 2 seconds.
  }

  render() {
    console.log('*********** Parent Comp Render **********');
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp;

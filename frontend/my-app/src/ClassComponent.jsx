import React, { Component } from 'react'

export class ClassComponent extends Component {
  constructor(props){
    super(props);
    this.state = {}
    console.log("constructor")
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps")
    return {
      isChanged: false
    };
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate")
    return "snapshot";
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate")
    console.log(snapshot)
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render() {
    console.log("render")
    console.log(this.state)
    return (
      <div style={{border: "1px solid black"}}>
        <h1>Class Component</h1>
        <button onClick={()=>{this.setState({})}}>
          setState
        </button>
        <button onClick={()=>{this.forceUpdate()}}>
          forceUpdate
        </button>
      </div>
    )
  }
}

export default ClassComponent
import React, { Component } from 'react'
import Person from './compoent/Person'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
  }
  handleclick=()=> this.setState({show:this.state.show})


  render() {
    return (
      <div>
        <h2>CheckPoint state</h2>
        <button onClick={this.handleclick}>Show/Hide</button>

        { this.state.show ? <Person/> :null}
        
      </div>
    )
  }
}


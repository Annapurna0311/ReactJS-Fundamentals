import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Annapurna'
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDeriedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate')
    }
    changeState = () =>{
      this.setState({
        name: 'ANnnaodr'
      })
    }
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA

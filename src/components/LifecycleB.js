import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Annapurna'
      }
      console.log('Lifecycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B getDeriedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('LifecycleB shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('LifecycleB getSnapshotBeforeUpdate')
      return null
    }
    componentDidUpdate(){
      console.log('LifecycleB componentDidUpdate')
    }
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB

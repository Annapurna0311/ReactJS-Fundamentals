import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'HELLO'
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     this.setState({
    //         message:'WOW!!!'
    //     })
    //     // console.log(this)        --->>> undefined
    // }
    changeMessage = ()=>{
        this.setState({
            message: 'WOW'
        })
        console.log(this.props)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={()=>this.changeMessage()}>LOGIN</button> */}
        <button onClick={this.changeMessage}>LOGIN</button>
         {    /*  BOTH ARE SAME RETURN EVENT HANDLER BIND OBJECT*/}

        {/* <button onClick={this.changeMessage.bind(this)}>LOGIN</button> */}
      </div>
    )
  }
}

export default EventBind

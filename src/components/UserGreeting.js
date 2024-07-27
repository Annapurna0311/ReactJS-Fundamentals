import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    //CONDITIONAL RENDERING

    //1. IF/ELSE
    // if(this.state.isLoggedIn==true){
    //     return (
    //         <div>
    //             Welcome Annapurna
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }

    //2. ELEMENT VARIABLES
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Annapurna</div>
    // }
    // else{
    //     message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>

    //3.TERNARY OPERATOR

    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Annapurna</div> : <div>Welcome Guest</div>
    // )

    // 4. SHORT CIRCUIT OPERATOR
    
    return this.state.isLoggedIn && <div>Welcome Guest</div>

    // return (
    //   <div>
    //     <div>
    //     Welcome Annapurna
    //    </div>
    //    <div>
    //     Welcome Guest
    //    </div>
    //   </div>
    // )
  }
}

export default UserGreeting

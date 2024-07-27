import React, { Component } from 'react'

class ClassClick extends Component {
  
 clickHandler(){
    console.log('Clicked go to')
    alert("Press any key");
 }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Go to</button>
      </div>
    )
  }
}


//this keyword refers to an object
export default ClassClick


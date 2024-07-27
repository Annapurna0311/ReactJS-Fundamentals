import React from 'react'


function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked');
        document.getElementsByClassName("hello");
    }
  return (
    <div className='hello'>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

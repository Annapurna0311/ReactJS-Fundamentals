import React from 'react'

// function Greet(){
//     return <h1>Hello Annapurna</h1>;
// }
const Greet = props => {
    // console.log(props)
    const {name,character} = props;
    return (
    <div>
    <h1>Hello {name} of {character}</h1>
        {/* {props.children} */}
    </div>
    )
}
export default Greet;

import React, { createElement } from "react";

const Hello = () =>  {
    //Using JSX
    // return (
    //     <div className='hello' id='1'>
    //         <h1>Hello Annapurna</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {className: 'hello',id:'1'},
        React.createElement('h1',null,'Hello Annapurna')
    );
}
export default Hello;
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Counter from "./components/counter";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import FunctionClick from "./components/FunctionClick";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import './appStyles.css'
import styles from './appStyles.modules.css'
import LifecycleA from "./components/LifecycleA";
//  functional component used in this!!!
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>SUCCESS</h1> */}
        {/* <Counter /> */}
        {/* <Message/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Greet name="Clark" character="Hero">
        <p>This is a child props</p>
        </Greet> */}
        {/* <Welcome name="Diana" character="Heroine" /> */}
        {/* <ParentComponent/> */}
        {/* <Hello /> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet/>
      <Inline/> */}
      {/* </header> */}
        <LifecycleA/>
        {/* <Form/> */}

    </div>
  );
}

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {/* Edit <code>src/App.js</code> and save to reload. */}
//             Hello world
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

// }

export default App;

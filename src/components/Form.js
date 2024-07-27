import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            username: '',
            comments:'',
            topic:'react'
        }
    }
    usernameHandler = (e) =>{
        this.setState({
            username: e.target.value
        })
    }
    commentsHandler = (e) =>{
        this.setState({
            comments: e.target.value
        })
    }
    topicHandler = (e) =>{
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit = (e) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        e.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.usernameHandler}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.commentsHandler}>Lo</textarea>
        </div>
        <div>
            <label>TOPIC</label>
            <select value={this.state.topic} onChange={this.topicHandler}>
            <option value="react">ReactJS</option>
            <option value="vue">VUEJS</option>
            <option value="angular">ANGULARJS</option>
            </select>
        </div>
        <button type='submit'>SUBMIT</button>
      </form>
    )
  }
}

export default Form

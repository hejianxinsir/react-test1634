import React from 'react'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: '第一个代办'}
      ]
    }
  }

  render(){
    let todos = this.state.todoList.map((item, index)=>{
      return <li id={index}>{item.title}</li>
    })

    return (
      <div className="app">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;

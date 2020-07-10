import React from 'react'
import './App.css'

import TodoInput from './TodoInput.js'
import TodoItem from './TodoItem.js'


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
      return (
        <TodoItem todo={item}/>
      )
    })

    return (
      <div className="app">
        <h1>我的代办</h1>
        <TodoInput content={this.state.newTodo}/>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;

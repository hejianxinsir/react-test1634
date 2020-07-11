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
        <TodoItem todo={item} key={index} />
      )
    })

    return (
      <div className="app">
        <h1>我的代办</h1>
        <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

  addTodo(){
    console.log('我得添加一个 todo 了')
  }
}

export default App;

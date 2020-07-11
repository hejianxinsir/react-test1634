import React from 'react'
import './App.css'

import TodoInput from './TodoInput.js'
import TodoItem from './TodoItem.js'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      newTodo: '',
      todoList: [

      ]
    }
  }

  render(){
    let todos = this.state.todoList.map((item, index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item}/>
        </li>
      )
    })
    console.log('todos 是: ', todos)

    return (
      <div className="app">
        <h1>我的代办</h1>
        <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

  addTodo(event){
    console.log('我得添加一个 todo 了')

    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })

    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
}

export default App;

let id = 0

function idMaker(){
  id += 1
  return id
}

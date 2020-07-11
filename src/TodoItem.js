import React, {Component} from 'react'
import './TodoItem.css'

export default class TodoItem extends Component{
  render(){
    return (
      <div className="todoItem">
        {this.props.todo.title}
      </div>
    )
  }
}
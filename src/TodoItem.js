import React, {Component} from 'react'
import './TodoItem.css'

export default class TodoItem extends Component{
  render(){
    return (
      <li className="todoItem">
        {this.props.todo.title}
      </li>
    )
  }
}
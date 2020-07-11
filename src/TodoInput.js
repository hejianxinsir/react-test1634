import React from 'react'

export default class TodoInput extends React.Component {

  render(){
    return (
      <div className="todoInput">
        <input type="text" default={this.props.content}/>
      </div>
    )
  }
}
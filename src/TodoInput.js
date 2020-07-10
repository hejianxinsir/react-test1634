import React from 'react'

export default class TodoInput extends React.Component {

  render(){
    return (
      <div class="todoInput">
        <input type="text" value={this.props.content}/>
      </div>
    )
  }
}
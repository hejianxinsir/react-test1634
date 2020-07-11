import React from 'react'

export default class TodoInput extends React.Component {

  render(){
    return (
        <input type="text" defaultValue={this.props.content}
            onKeyPress={this.submit.bind(this)}
        />
    )
  }

  submit(e){
    let _this = this
    if(e.key === 'Enter'){
      console.log('用户按回车了')
      _this.props.onSubmit(e)
    }
  }
}
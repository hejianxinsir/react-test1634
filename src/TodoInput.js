import React from 'react'

export default class TodoInput extends React.Component {

  render(){
    return (
        <input type="text"
            value={this.props.content}
            onKeyPress={this.submit.bind(this)}
            onChange={this.changeTitle.bind(this)}
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

  changeTitle(e){
    this.props.onChange(e)
  }
}
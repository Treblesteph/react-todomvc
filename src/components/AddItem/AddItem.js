import React, { Component, Fragment } from 'react'
// import { addTodo } from '../actions'

import './AddItem.scss'

class AddItem extends Component {
  handleKeyPress = (e) => {e.key !== 'Enter' ? (
    console.log('different key pressed'),
    null) : (
     !e.target.value.trim() ? (
      console.log('no content to add'), 
      null) : (
        console.log('adding item'),
        e.preventDefault(),
        this.props.handleAddTodo(e.target.value),
        e.target.value = ""
      )
    )
  }

  render () {
    return (
      <Fragment>
        {this.props.todos.length !== 0 ? <a
          styleName={this.props.todos.filter(t => !t.completed).length === 0 ? 'togglebutton toggle-on' : 'togglebutton'}
          onClick={()=>this.props.handleToggleAll()}
        /> : <span />}
        <input
          styleName='todorow'
          type="text"
          onKeyPress={this.handleKeyPress}
          name="additem"
          placeholder="What needs to be done?"
        />
      </Fragment>
    )
  }
}

export default AddItem

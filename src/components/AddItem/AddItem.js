import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        dispatch(addTodo(e.target.value))
      )
    )
  }

  render () {
    return (
      <React.Fragment>
        <form>
          <input type="text" onKeyPress={this.handleKeyPress} name="additem" placeholder="What needs to be done?"></input>
        </form>
      </React.Fragment>
    )
  }
}

export default AddItem
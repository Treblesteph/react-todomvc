import React, { Component } from 'react'

import './AddItem.scss'

class AddItem extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('added!')
    }
  }
  render () {
    return (
      <React.Fragment>
        <form onSubmit={console.log("new todo")}>
          <input type="text" onKeyPress={this.handleKeyPress} name="additem" placeholder="What needs to be done?"></input>
        </form>
      </React.Fragment>
    )
  }
}

export default AddItem
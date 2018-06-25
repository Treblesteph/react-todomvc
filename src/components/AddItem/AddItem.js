import React, { Component } from 'react'

import './AddItem.scss'

class AddItem extends Component {
  handleKeyPress = (e) => {(e.key === 'Enter' ? alert(e.target.value) : null)};
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
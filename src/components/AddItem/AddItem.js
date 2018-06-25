import React, { Component } from 'react'

class AddItem extends Component {
  render () {
    return (
      <React.Fragment>
        <form onSubmit={console.log("new todo")}>
          <input type="text" name="additem" placeholder="What needs to be done?"></input>
        </form>
      </React.Fragment>
    )
  }
}

export default AddItem
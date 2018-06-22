import React, { Component } from 'react'
import AddItem from "./AddItem";
import ItemList from "./ItemList";


class TodoApp extends Component {
  render () {
    return (
      <React.Fragment>
        <AddItem />
        <ItemList />
        <form>
          <p>1 item left</p>
          <div>
            <input type="radio" id="all" name="filter" checked />
            <label for="all">All</label>
          </div>

          <div>
            <input type="radio" id="active" name="filter" />
            <label for="active">Active</label>
          </div>

          <div>
            <input type="radio" id="completed" name="filter" />
            <label for="completed">Completed</label>
          </div>
          <input type="button" className="btn" value="Clear completed"></input>
        </form>
      </React.Fragment>
    )
  }
}

export default TodoApp
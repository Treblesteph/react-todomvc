import React from 'react'
import "./TodoItem.scss";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = { isEditable: false }
  }

  toggleEditable = (value) => {
    this.setState({ isEditable: value })
  }

  handleKeyPress = (e, id, deleteTodo) => {e.key !== 'Enter' ? (
    console.log('editing todo item'),
    null) : (
     !e.target.value.trim() ? (
      console.log('this should delete the item'),
      e.preventDefault(),
      e.target.blur(),
      deleteTodo(id)
      ) : (
        console.log('updating item'),
        e.preventDefault(),
        e.target.blur()
      )
    )
  }
  
  render () {
    return (
      <li styleName='list-item'>
        <input
          styleName='item-checkbox'
          checked={this.props.todo.completed}
          onClick={this.props.handleClick}
          type="checkbox"
          id={this.props.todo.id}
          name="todoitem"
        />
        <span onClick={this.props.handleClick} styleName={this.props.todo.completed ? 'custom-check-completed' : 'custom-check'} />
        <label styleName={this.props.todo.completed ? 'item-label-completed' : 'item-label'}>
          {this.state.isEditable ? (
            <input
              autoFocus
              className="inEdit"
              value={this.props.todo.content}
              onBlur={() => this.toggleEditable(false)}
              onChange={(e) => this.props.handleChangeTodo(e, this.props.todo.id)}
              onKeyPress={(e) => this.handleKeyPress(e, this.props.todo.id, this.props.handleDeleteTodo)}
            />
            ) : (
            <p onDoubleClick={() => this.toggleEditable(true)}>
              {this.props.todo.content}
            </p>
            )
          }
        </label>
      </li>
    )
  }
}

export default TodoItem
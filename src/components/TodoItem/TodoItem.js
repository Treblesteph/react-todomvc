import React from 'react'
import '../../styles/mixins.scss';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = { isEditable: false }
  }

  toggleEditable = (value) => {
    this.setState({ isEditable: value })
  }

  handleKeyPress = (e) => {e.key !== 'Enter' ? (
    console.log('editing todo item'),
    null) : (
     !e.target.value.trim() ? (
      console.log('this should delete the item'), 
      null) : (
        console.log('updating item'),
        e.preventDefault(),
        e.target.blur()
      )
    )
  }
  
  render () {
    return (
      <li>
        <input checked={this.props.todo.completed} onClick={this.props.handleClick} type="checkbox" id={this.props.todo.id} name="todoitem" />
        <label style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>
          {this.state.isEditable ? (
            <input
              autoFocus
              className="inEdit"
              value={this.props.todo.content}
              onBlur={() => this.toggleEditable(false)}
              onChange={(e) => this.props.handleChangeTodo(e, this.props.todo.id)}
              onKeyPress={(e) => this.handleKeyPress(e)}
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
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

  render () {
    return (
      <li>
        <input onClick={this.props.handleClick} type="checkbox" id={this.props.todo.id} name="todoitem" />
        <label style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>
          {this.state.isEditable ? (
            <input
              autoFocus
              className="inEdit"
              value={this.props.todo.content}
              onBlur={() => this.toggleEditable(false)}
              onChange={(e) => this.props.handleChangeTodo(e)}
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
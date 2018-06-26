import React from 'react'

const Todo = ({ handleClick, handleKeyPress, todo }) => (
  <li>
    <input onClick={handleClick} type="checkbox" id={todo.id} name="todoitem" value="item1" />
    <label
      for={key}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >{content}</label>
  </li>
)

export default Todo
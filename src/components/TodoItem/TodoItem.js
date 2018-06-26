import React from 'react'

const Todo = ({ onClick, key, completed, content }) => (
  <li>
    <input onClick={onClick} type="checkbox" id={key} name="todoitem" value="item1" />
    <label
      for={key}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >{content}</label>
  </li>
)

export default Todo